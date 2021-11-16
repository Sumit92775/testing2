import React, { useEffect, useState } from "react";
import { Delete } from "@material-ui/icons";
import { Button, Checkbox, Divider, message, Modal } from "antd";
import styles from './Styles.module.scss';
import cx from 'classnames';
import AddAddress from "../product-details/add-address-modal";
import { addAddressUser, deleteUserAddress, getAddresses, markAsDefault } from "../../services/addresses";
import AddressByMap from "../product-details/address-by-map";


const Card7AddAddress = (props : any) =>{


    const [isAddressPresent, setIsAddressPresent] = useState(false);
    const [presentaddress, setPresentAddress] = useState([] = Array());
    const [checked, setChecked] = useState(false);

    console.log(props);

    useEffect(() =>{

        console.log("useEffect run");
        let addressArray = [];
        addressArray = props.addressArray?.addresses;
        if(addressArray.length > 0){
            setIsAddressPresent(true);
            setPresentAddress(addressArray);
            // setDefaultIdSetted(false);
        }else{
            setIsAddressPresent(false);
            setPresentAddress([]);
        }     
    },[]);

    const makeFormatAddress = (address: any) =>{
        console.log(address);

        let formatAddress = "";

        if(address.houseNumber){
            formatAddress+=address.houseNumber+", "
        }
       
        // if(address.streetAddress){
        //     formatAddress+=address.houseNumber+", "
        // }
       
        if(address.add1){
            formatAddress+=address.add1+", "
        }

        
        if(address.add2){
            formatAddress+=address.add2+", "
        }

        if(address.city){
            formatAddress+=address.city+", "
        }
       
        if(address.zipCode){
            formatAddress+=address.city+", "
        }
        
        if(address.country){
            formatAddress+=address.country
        }

        return formatAddress;
    }

    const addAddress = async (newAddress: any) =>{
        
        // console.log(newAddress);
        
       addAddressUser(
                {
                    "name":newAddress.name,
                    "email":newAddress.email,
                    "phoneNumber":newAddress.mobileNumber,
                    "latitude":"newAddress.lat",
                    "longitude":"newAddress.long",
                    "storeId":0,
                    "houseNumber":newAddress.houseNumber,
                    "streetAddress":"newAddress.streetNumber",
                    "add1":newAddress.add1,
                    "add2":newAddress.add2,
                    "city":newAddress.city,
                    "state":newAddress.state,
                    "country":newAddress.country,
                    "zipCode":newAddress.pincode,
                    "googleAddress":"",
                    "isDefault":0
                }
            ).then((response: any) =>{
                console.log(response);
                let array = new Array();
                
                getAddresses().then(res =>{
                    console.log("Response: 1",res); 
                    if(res.addresses){
                        array = res.addresses;
                        setPresentAddress(array);
                        handleCancel;
                    }
                }).catch(error =>{
                    console.log(error);
                })
        
            }).catch(error =>{
                console.log(error);
            })

      
                // let status = response.status;

    }

    
    
const [chooseModal, setchooseModal] = useState(false);
const [chooseModal1, setchooseModal1] = useState(false);
const [chooseModalName, setchooseModalName] = useState("");
const [chooseModalName1, setchooseModalName1] = useState("");
const [deleteAddressId, setDeleteAddressId] = useState(0);
const [chooseModalTitle, setchooseModalTitle] = useState("");
const [footer, setFooter] = useState(false);
const [defaultAddressChoosed, setDefaultAddressChoosed] = useState(false)
const [defaultIdSetted, setDefaultIdSetted] = useState(false);


const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setchooseModal(false);
    setchooseModal1(false);
};

const openModal = (type : any) => {

    setchooseModal(true);

    // setchooseModalName(type)
    console.log("setModal : "+type);
    // setchooseModalName(type);
    
    if(type === "Change Email"){
    }else if(type === "Change Mobile Number"){
        setchooseModalName(type);
    }else if(type === "General details"){
        setchooseModalName(type);
        setFooter(true);
    }
    else if(type === "Add Address"){
        setchooseModalName(type);
    }

    console.log(chooseModalName);
};

const openModal1 = (type : any) => {
    setchooseModal1(true);
    setchooseModalName1(type);
};

 const handleDeleteUserAddress = async (id: any) =>{
    try{
            let res = await deleteUserAddress(id);
            let addressesArray = presentaddress;
            let addressesArrayAfterDeletion = [];
            addressesArrayAfterDeletion = addressesArray.filter((addresses: any) => addresses.id !== id);
            setPresentAddress(addressesArrayAfterDeletion);
            setchooseModal1(false);

        // }
    }catch(error: any){
        message.error(error);
    }
    
 }

    const handelMarkAsDefault = async (id: any) =>{
        let res = await markAsDefault({
            "addressId": id
        });

        try{
            let res1 =  await getAddresses();
            let addressAfterSettingDefaultAddress = res1.addresses;
            setPresentAddress(addressAfterSettingDefaultAddress);
            setDefaultAddressChoosed(true);
            setDefaultIdSetted(id);
            message.info(res.message);
        }catch(error: any){
            message.error(error);
        }



    }

    return(
        <div className={cx(styles['card-no-shadow'], "card card2 pl-0 pt-0 pr-9 pb-0 mt-40")}  style={{overflow:"hidden", width:"100%"}}>
            <h5 className=" fz-18 mt-10 mb-10 pl-20">Saved Addresses</h5>
            <Divider className="full-width mt-5 mb-10"></Divider>
            <div className={cx(styles['scrollable-flex-design'],'mb-20')}>
                {presentaddress.map((address: any) =>{
                    return(
                        <div key={`${address.id}`} className={styles['address-div']} style={{height :"100%", width : "300px !important"}}>
                            {/* <div className="grid-view grid-1 pl-20 pr-20 pt-20 pb-20 rowgap-20 colgap-5" style={{height : "200px"}}> */}
                                <div className="card card2 pl-10 pt-10 pr-10 pb-10" style={{height : "236px", minWidth: "350px", maxWidth: "350px", width: "100%"}}>
                                    <div className="grid-view grid-1 rowgap-5">
                                        <div className="grid-view auto-width grid-1 mb-5">
                                            <h5>{address.name}
                                                <span className="txt pull right danger" onClick={() => {openModal1("Delete Address");
                                            setDeleteAddressId(address.id)}}>
                                                    <Delete />
                                                </span>
                                                {/* <Button className="primary small pull right" type="link" onClick={()=>{openModal("Add Address");props.title("Add Address")}}><span className="icon-wrap"><EditIcon /></span></Button> */}
                                                {/* <Button className="danger small pull right" type="link" onClick={()=>{openModal("Add Address");props.title("Add Address")}}><span className="icon-wrap"> */}
                                                    
                                                    {/* </span></Button> */}
                                            </h5>
                                        </div>

                                        {address.email ? 
                                
                                            <span className="txt weight700 float left">{address.email}</span>
                                        
                                        : 
                                        <>
                                        </>
                                        }

                                        <span className="txt weight700 float left">{address.phoneNumber}</span>

                                        <span className={cx(styles['text-overflow'], "txt weight700 float left")} >{makeFormatAddress(address)}</span>

                                        <span className="danger small pull right flex center-content" style={{position : "absolute", bottom: "10px", left: "100px"}}>
                                            {(address.isDefault == 0) ? 
                                            <Checkbox onChange={(event) =>{setChecked(event.target.checked);
                                            handelMarkAsDefault(address.id);
                                            }}><span className="txt primary">Mark as default</span></Checkbox>
                                            : 
                                            <span className="txt"><strong>Default Address</strong></span>
                                            }
                                        </span>

                                    </div>    
                                </div>
                        </div>
                    )
                })}

            <div>
               
                <div className="card card2 pl-10 pt-10 pr-10 pb-10 flex center" style={{minHeight: "250px", height: "100%", width: "300px",display: "flex", alignItems :"center", justifyContent : "space-evenly"}}>
                    <Button onClick={()=>{openModal("Add Address")}}>
                        Add Address
                    </Button>   
                </div>
            </div>
            </div>

            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">{chooseModalName}</h4>
                            </div>
                    } footer={
                        // <div className="pt-20 pb-20 pr-0">
                        //     <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                        //     <Button className="ant-btn primary mr-21" onClick={() =>handleCancel}>Save Chages</Button>
                        // </div>
                        ""
                        }
                    visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                        {
                            chooseModalName === "Add Address" ? 
                            <AddressByMap addAddress={addAddress} closeModal={handleCancel}></AddressByMap>
                            : 
                            <>
                            </>
                            // <EditGeneralDetails></EditGeneralDetails>

                        }
            </Modal>
            
            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">{chooseModalName1}</h4>
                            </div>
                    } footer={
                        <div className="pt-20 pb-20 pr-0">
                            <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                            <Button className="ant-btn primary mr-21" onClick={() =>handleDeleteUserAddress(deleteAddressId)}>Save Chages</Button>
                        </div>
                        }
                    visible={chooseModal1} onOk={handleOk} onCancel={handleCancel}>
                        {
                            chooseModalName1 === "Delete Address" ? 
                            <div>
                                <strong>Are you sure want to delete this address?</strong>
                            </div>
                            : 
                            <>
                            </>
                            // <EditGeneralDetails></EditGeneralDetails>

                        }
            </Modal>
        </div>
    )
}
export default Card7AddAddress;