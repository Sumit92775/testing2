import React, {useEffect, useState} from 'react';
import { Table, Button, Menu, Switch, Form, Modal, Input, DatePicker, Rate, message, Tooltip } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
import { LocationOnOutlined} from '@material-ui/icons';
import styles from '../../components/Bookings/Style.module.scss';
import cx from 'classnames';
import { bookings } from '../../services/bookings';
import MapView from '../../components/Bookings/MapView';

const AutoRejections = (props) => {
    const [modal, setModal] = useState(false);
    const [recheduleModal, setRescheduleModal] = useState(false);
    const [modalName, setModalName] = useState("");
    // const [cancelBookingModal, setRescheduleModal] = useState(false);
    
    const [totalBookings, setTotalBookings] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [bookingAddress, setBookingAddress] = useState([]);

    const status = ['Pending', 'Rescheduled'];
    const columns = [
        {
            title: 'Booking ID',
            dataIndex: 'bookingId',
            key: 'bookingId',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: function status(statusObj) {
                return (
                    <div>
                        <div className={ 
                            statusObj.id == 2 ? 
                            styles['btn-cancel'] 
                            : 
                            (statusObj.id == 7 || statusObj.id == 1) ? 
                            styles['btn-rejection'] 
                            : 
                            (statusObj.id == 8 || statusObj.id == 12) ? 
                            styles['btn-success'] 
                            : 
                            styles['btn-cancel']}
                            >{statusObj.title}</div>
                    </div>
                )
            }
        },
        {
            title: 'SP Name',
            dataIndex: 'spname',
            key: 'spname',
            render: function spname(spname) {
                return (
                    <div className="flex">
                        <Tooltip title={spname.address}>
                            <LocationOnOutlined className="mt-3 mr-3" onClick={() => openModal("Change Address")}></LocationOnOutlined>
                        </Tooltip>
                        <span className="mt-3">{ spname.spname }</span>
                    </div>
                )
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: function date(date) {
                return <p>{ moment(date).format(`${process.env.date_format}`)}</p>
            }
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            render: function time(time) {
                return <p>{ moment(time).format(`${process.env.time_format}`)}</p>
            }
        },
        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     key: 'address',
        //     render: function address(address : any) {
        //         return (
        //             <div className="flex center">
        //                 <LocationCity/>
        //                 <span className="ml-3">{ address }</span>
        //             </div>
        //         )
        //     }
        // },
        {
            title: 'Service',
            dataIndex: 'service',
            key: 'service',
            render: function service(service)  {
                return(
                    <div>
                        <span>{service.service}{" ("+service.variant+")"}</span><br/>
                        <span className="fz-12">{service.type}</span>
                    </div>
                )
            }
        },
        {
            title: 'SP+ Fee',
            dataIndex: 'spfee',
            key: 'spfee',
            render: function customer(spfee) {
                return (
                    <>
                        <span className="txt danger">{ spfee }</span>
                    </>
                )
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: function price(price) {
                return (
                    <>
                        <span className="txt success">{ price }</span>
                    </>
                )
            }
        },
        {
            title: 'Reason',
            dataIndex: 'reasons',
            key: 'reasons',
            render: function reasons(reasons) {
                return (
                    <>
                        <span className="txt grey1">{ reasons }</span>
                    </>
                )
            }
        },
        {
            title: 'actions',
            dataIndex: 'actions',
            key: 'actions',
            render: function action() {
                return <>
                    <Menu className="table-action-btn" mode="horizontal">
                        <Menu.SubMenu key="SubMenu" title="">
                            <Menu.Item key="Accept" className="txt dark1" onClick={() =>openModal("Reschedule")} icon={<span className="material-icons">done</span>}>Rechudule</Menu.Item>
                            <Menu.Item key="Reject" className="txt danger" onClick={ () => openModal("Reason") } icon={<span className="material-icons">cancel</span>}>Cancel Bookings</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </>
            }
        },

    ];

    useEffect(() =>{
        try{
            bookings({
                type: 6,
                page: 1
            }).then(res =>{
                if(res.status){
                    console.log("Bookings Response: ",res);
                    let dataSource = [];
                    setTotalBookings(res.bookings);
                     
                        for(let i = 0; i < res.bookings.length; i++) {

                            let serviceType="";

                            // Remove redundant object from array
                            let cartProperties = res.bookings[i].Cart.CartProperties;
                            var duplicateRemover = new Set();
                              var distinctArrObj = cartProperties.filter((obj) => {
                                if (duplicateRemover.has(JSON.stringify(obj))) return false;
                                duplicateRemover.add(JSON.stringify(obj));
                                return true;
                              });
                              
                            //   console.log("Filtered Cart Properties: ",distinctArrObj);

                            for(let i = 0 ; i < distinctArrObj.length ; i++){
                                if(i == distinctArrObj.length-1){
                                    serviceType+=distinctArrObj[i].value
                                }else{
                                    serviceType+=distinctArrObj[i].value+", ";
                                }
                            }

                            // console.log("ServiceType: ", serviceType);
                            
                            setBookingAddress(res.bookings[i].Variation.Service.Store.Addresses);

                            let address = "";
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].add1+", ";
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].add2+", ";
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].city+", ";
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].zipCode;

                            dataSource.push({
                                key: res.bookings[i].id,
                                bookingId: res.bookings[i].bookingId,
                                spname: {spname: res.bookings[i].Variation.Service.Store.storeName, address: address},
                                date: res.bookings[i].BookingTime,
                                time: res.bookings[i].BookingTime,
                                service: {service: res.bookings[i].Variation.Service.primaryServiceName, variant: res.bookings[i].Variation.primaryLanguageVariationName , type: serviceType},
                                spfee: res.bookings[i].storePlatformFee,
                                price: res.bookings[i].Variation.price,
                                status: res.bookings[i].BookingStatus,
                                reasons:'This order is auto rejected',
                            })
                        }

                        setDataSource(dataSource);
                        console.log("DataSource: ",dataSource);
                        
                    
                }else{
                    // message.error(res.status);
                }
            })
        }catch(error){
            console.log(error);
        }
    },[]);

    const handlePagination = (page) =>{
        try{
            bookings({
                type: 6,
                page: page
            }).then(res =>{
                if(res.status){
                    console.log("Bookings Response: ",res);
                    let dataSource = [];
                    setTotalBookings(res.bookings);
                     
                        for(let i = 0; i < res.bookings.length; i++) {

                            let serviceType="";

                            // Remove redundant object from array
                            let cartProperties = res.bookings[i].Cart.CartProperties;
                            var duplicateRemover = new Set();
                              var distinctArrObj = cartProperties.filter((obj) => {
                                if (duplicateRemover.has(JSON.stringify(obj))) return false;
                                duplicateRemover.add(JSON.stringify(obj));
                                return true;
                              });
                              
                            //   console.log("Filtered Cart Properties: ",distinctArrObj);

                            for(let i = 0 ; i < distinctArrObj.length ; i++){
                                if(i == distinctArrObj.length-1){
                                    serviceType+=distinctArrObj[i].value
                                }else{
                                    serviceType+=distinctArrObj[i].value+", ";
                                }
                            }

                            // console.log("ServiceType: ", serviceType);
                            
                             
                            setBookingAddress(res.bookings[i].Variation.Service.Store.Addresses);

                            let address = "";
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].add1+", ";
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].add2+", ";
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].city+", ";
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].zipCode;

                            dataSource.push({
                                key: res.bookings[i].id,
                                bookingId: res.bookings[i].bookingId,
                                spname: {spname: res.bookings[i].Variation.Service.Store.storeName, address: address},
                                date: res.bookings[i].BookingTime,
                                time: res.bookings[i].BookingTime,
                                service: {service: res.bookings[i].Variation.Service.primaryServiceName, variant: res.bookings[i].Variation.primaryLanguageVariationName , type: serviceType},
                                spfee: res.bookings[i].storePlatformFee,
                                price: res.bookings[i].Variation.price,
                                status: res.bookings[i].BookingStatus,
                                reasons:'This order is auto rejected',
                            })
                        }


                        setDataSource(dataSource);
                        console.log("DataSource: ",dataSource);
                        
                    
                }else{
                    message.error(res.status);
                }
            })
        }catch(error){
            console.log(error);
        }
    } 
     
    const openModal = (type) => {
        setModal(true);
        setModalName(type);
    };


    const handleCancel = () => {
        setModal(false);
    }

    return (
        <div>
            <h5 className="mb-20">Auto Rejections</h5>
            <Form className="stats-filter medium">
                <Form.Item className="auto-width">
                    <div className={cx('picker',  `booking-picker`)}>
                        <RangePicker allowClear={false} separator={<span>to</span>} suffixIcon={false}></RangePicker>
                    </div>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="primary medium full-width">Apply Filters</Button>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="medium full-width">Clear Filters</Button>
                </Form.Item>
            </Form>

            <div className="pull-right auto-width txt icon1" style={{ minWidth: '150px' }}>
                {/* <span className="material-icons fz-22 mr-5 lh-22 pull left">picture_in_picture</span>
                <span className="fz-12 lh-22 pull left">Calendar View</span>
                <Switch className="default mt-4 ml-15 pull left" size="small" /> */}
            </div>

            <Table locale={
                {
                    emptyText: "No Booking in this category"
                }
            } className="bordered mt-25" rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    }
                }} dataSource={dataSource}  pagination={{
                    onChange: page => {
                        console.log("Page: ",page);
                        handlePagination(page);
                    },
                    pageSize: 10, total: totalBookings.length
                }} columns={columns} />

            <Modal width="500px" 
                title={ modalName === "Reschedule" ?<><h3 className="txt primary">Reschedule</h3></> : modalName === "Change Address" ?<><h3 className="txt primary">Change Address</h3></> : <><p className="mb-10"><strong className="txt primary fz-30">Reason</strong></p><strong>Reject booking from ehsaan?</strong><p>ID: SP15912501</p></> }
                footer={
                modalName === "Reschedule" ? 
                <>
                    <div style={{ paddingBlock: '18px' }}>
                        <Button className="">Cancel</Button>
                        <Button className="txt primary">Confirm</Button>
                    </div>
                </> 
                :
                modalName === "Change Address" ? 
                <>
                </> 
                :
                    <div style={{ paddingBlock: '18px' }}>
                        <Button className="primary ghost">Cancel</Button>
                        <Button className="danger">Reject Booking</Button>
                    </div>
                } visible={modal} onCancel={handleCancel}>
                    {
                    modalName === "Reschedule" ? 
                     <RangePicker style={{width : "250px", height : "43px"}}/>
                    :
                    modalName === "Change Address" ? 
                     <MapView storeAddress={bookingAddress}/>
                    :
                    <Input.TextArea rows={4} />
                    }
            </Modal>
        </div>
    )
}

export default AutoRejections;


AutoRejections.getInitialProps = async () =>{
    const res = await bookings({
        type: 6,
        page: 1
    })
    return {data : res};
}

