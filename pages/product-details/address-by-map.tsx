import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { Button, Input, Form, Checkbox, message } from 'antd';
import styles from './Styles.module.scss'
import { LocationCityRounded, MyLocation, TrainRounded } from '@material-ui/icons';
import confirm from 'antd/lib/modal/confirm';
import useTranslation from 'next-translate/useTranslation';
import { validateEmail } from '../../services/auth';
import { addAddressUser } from '../../services/addresses';
Geocode.setApiKey("AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.enableDebug();

const { Item } = Form;

const { TextArea } = Input;

const containerStyle = {
  width: '100%',
  height: '400px'
};


function AddressByMap(props : any) {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [formattedAddress, setFormattedAddress] = useState("")
  const [pinCode, setPinCode] = useState(0);
  const [confirmAndProceed, setconfirmAndProceed] = useState(false);
  const [changeAddress, setChangeAddress] = useState(false);
  const [userGivenAddress, setUserGivenAddress] = useState("");
  const [subLocality1, setSubLocality1] = useState("");
  const [subLocality2, setSubLocality2] = useState("");
  const [subLocality3, setSubLocality3] = useState("");
  const [adminArea1, setAdminArea1] = useState("");
  const [adminArea2, setAdminArea2] = useState("");
  const [adminArea3, setAdminArea3] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [route, setRoute] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [locality, setLocality] = useState("");

  const [houseNo, setHouseNo] = useState("");
  const [addressone, setAddressOne] = useState("");
  const [addresstwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [additionalNumber, setAdditionalNumber] = useState("");

    // console.log(props);

    // Final details

    console.log(city);

    // const center = {
    //   lat: latitude,
    //   lng: longitude
    // };

    useEffect(() =>{
      navigator.geolocation.getCurrentPosition(function(position){
        
        // props.lat(position.coords.latitude);
        // props.long(position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log("Step : 1");
        console.log("Latitude : ",position.coords.latitude);
        console.log("Longitude: ",position.coords.longitude);
        
        getAddressByLatLong(position.coords.latitude, position.coords.longitude);
      });
    },[])

    
    const { t } = useTranslation('validator');
    
    const getLatLong = (address : any) =>{
        // Get latitude & longitude from address.
     Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLatitude(lat);
          setLongitude(lng);
          // props.lat(lat);
          // props.long(lng)
          getAddressByLatLong(lat, lng);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
    // 48.85837009999999 2.2944813
    
    const getAddressByLatLong = (lat : Number, long : Number) =>{

      setHouseNo("");
      setRoute("");
      setLocality("");
      setNeighborhood("");
      setSubLocality1("");
      setSubLocality2("");
      setSubLocality3("");

      setAdminArea1("");
      setAdminArea2("");
      setAdminArea3("");

        Geocode.fromLatLng(""+lat, ""+long).then(
            (response) => {
              const geolocationRes = response.results[0];
              console.log("Step : 2");

              console.log(geolocationRes);
              setFormattedAddress(geolocationRes.formatted_address);

              for(let i = 0 ; i < geolocationRes.address_components.length ; i++){
                  getPreciseAddress(geolocationRes.address_components[i].types, geolocationRes.address_components[i]);
                }
                // console.log("Address data : 1  "+houseNo+ ":" + streetNo);

            },
            (error) => {
                console.error(error);
            }
            ).then(function(geolocationRes){
              // for(let i = 0 ; i < geolocationRes. ; i++){
                //   getPreciseAddress(geolocationRes.address_components[i].types, geolocationRes.address_components[i]);
                // }
              }).then(function(){
              });
      }
    
    const getPreciseAddress = (typeArray : any, dataObj : any) =>{

      console.log("Array : ",typeArray);
      console.log("Step 3");
      
      
      for(let i = 0 ; i < typeArray.length ; i++){
        console.log("Log : "+typeArray[i] + " : "+dataObj.long_name);
      }

      for(let i = 0 ; i < typeArray.length ; i++){
          if(typeArray[i] === "street_number"){
            console.log(dataObj.long_name);
            setStreetNo(dataObj.long_name);
            // props.streetNumber(dataObj.long_name);
            break;
          }

          if(typeArray[i] === "route"){
            console.log(dataObj.long_name);
            setRoute(dataObj.long_name);
            break;
          }
      
          if(typeArray[i] === "political"){
                if(typeArray[i+2] === "sublocality_level_2"){
                  setSubLocality2(dataObj.long_name);
                  break;
                }
                if(typeArray[i+2] === "sublocality_level_3"){
                  setSubLocality3(dataObj.long_name);
                  break;
                }
                if(typeArray[i+2] === "sublocality_level_1"){
                  setSubLocality1(dataObj.long_name);
                  // setState(dataObj.long_name);
                  break;
                }
                break;
          }
          
          if(typeArray[i] === "administrative_area_level_2" || "administrative_area_level_1" || "administrative_area_level_3"){
            
            if(typeArray[i] === "administrative_area_level_2"){
              setAdminArea2(dataObj.long_name);
              break;
            }
            if(typeArray[i] === "administrative_area_level_3"){
              setAdminArea3(dataObj.long_name);
              break;
            }
            if(typeArray[i] === "administrative_area_level_1"){
              setCity(dataObj.long_name);
              // props.city(dataObj.long_name);
              console.log("administrative_area_level_1 : ",dataObj.long_name);
              break;
            }
          }
      
          if(typeArray[i] === "locality"){
              setLocality(dataObj.long_name);
              setState(dataObj.long_name);
              console.log("Locality : ",dataObj.long_name);
              break;
            } 
          
          if(typeArray[i] === "premise"){
            setHouseNo(dataObj.long_name);
            // props.houseNumber(dataObj.long_name);
            console.log("House No.",dataObj.long_name);
            break;
          } 
          
          if(typeArray[i] === "country"){
            setCountry(dataObj.long_name);
            // props.country(dataObj.long_name);
            console.log("Country",dataObj.long_name);
            break;
            
          } 
          if(typeArray[i] === "postal_code"){
            setPinCode(dataObj.long_name);
            // props.pincode(dataObj.long_name);
            console.log("postal_code",dataObj.long_name);
            break;
          }
          if(typeArray[i] === "neighborhood"){
            setNeighborhood(dataObj.long_name);
            console.log("Neighborhood : ",dataObj.long_name);
            break;
          }
      }



    }


    const setAddressLine1 = () =>{

      console.log("Address data : 2 "+houseNo+ ":" + streetNo);
      let address1 = [];
      
      if(houseNo.length > 1){
        address1.push(houseNo);
      }

      if(route.length > 1){
        address1.push(route);
      }

      if(locality.length > 1){
        address1.push(locality)
      }

      if(neighborhood.length > 1){
        address1.push(neighborhood);
      }

      if(subLocality3.length > 1){
        address1.push(subLocality3);
      }

      if(subLocality2.length > 1){
        address1.push(subLocality2);
      }
      if(subLocality1.length > 1){
        address1.push(subLocality1);
      }

      console.log(address1);

      let data = address1.map((obj) =>{
       return obj;
      }).join(", ");

      console.log("Address Line 1: ",data);
      setAddressOne(data)

    }

    const setAddressLine2 = () =>{
      let address2 = [];
      console.log("House No. : ",houseNo);
      console.log("subLocality3 : ",subLocality3);
      console.log("subLocality2 : ",subLocality2);
      console.log("subLocality1 : ",subLocality1);
      
      if(adminArea3.length > 1){
        address2.push(adminArea3);
      }

      if(adminArea2.length > 1){
        address2.push(adminArea2);
      }
      if(adminArea1.length > 1){
        address2.push(adminArea1);
      }

      console.log(address2);

      let data = address2.map((obj) =>{
       return obj;
      }).join(", ");
      console.log("Address Line 11:",addressone);
      
      console.log("Address Line 22: ",data);
      setAddressTwo(data);

      // let location = houseNo+subLocality1+subLocality2+subLocality3+data;
      // props.add2(data)

    }
    
    
    const handleDrag = (event : any) =>{
      setLatitude(event.latLng.lat());
      setLongitude(event.latLng.lng());
      getAddressByLatLong(event.latLng.lat(), event.latLng.lng());
    }

    const handelCurrentLocation = () =>{
      console.log("Step Current location : 1");

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
          // console.log("Step Current location : 1", navigator.geolocation);
          
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          // console.log("Step : 1");
          // console.log("Latitude : ",position.coords.latitude);
          // console.log("Longitude: ",position.coords.longitude);
          
          getAddressByLatLong(position.coords.latitude, position.coords.longitude);
        });
      }else{
        console.log("Error: ", navigator.geolocation);
        
      }
    }

    const handleUserGivenLocationAddress = (event : any) =>{
      console.log(event.target.value);
      setUserGivenAddress(event.target.value);
    }

    const handleUserGivenLocationConfirm = (UserInputAdddress: any) =>{
      getLatLong(UserInputAdddress);
      setChangeAddress(false);
      getAddressByLatLong(latitude, longitude);
    }


    /////////////////////////
 
    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [add1, setAdd1] = useState("");
    const [add2, setAdd2] = useState("");
    // const [pincode, setPincode] = useState("");


    const checkEmail = (rule: any, value: any, callback: any) => {
      if(value) {
          if((/^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/).test(value)) {
              validateEmail({email: value})
              .then(res => {
                  if(res.status) {
                      setEmail(value);
                      callback();
                      // setBtnEnabled(false);
                      message.success(res.message);
                  } else {
                      callback('');
                      // setBtnEnabled(true);
                      message.error(t('value already taken', { value: value }));
                  }
              })
          } else {
              // setBtnEnabled(true);
              callback(t('email', {field: 'Store Email'}))
          }
      } else {
          callback();
      }
  }
    
  // const checkMobile = (rule: any, value: any, callback: any) => {
  //     if(value) {
  //         if((/^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/).test(value)) {
  //             validateEmail({email: value})
  //             .then(res => {
  //                 if(res.status) {
  //                     setEmail(value);
  //                     callback();
  //                     // setBtnEnabled(false);
  //                     message.success(res.message);
  //                 } else {
  //                     callback('');
  //                     // setBtnEnabled(true);
  //                     message.error(t('value already taken', { value: value }));
  //                 }
  //             })
  //         } else {
  //             // setBtnEnabled(true);
  //             callback(t('email', {field: 'Store Email'}))
  //         }
  //     } else {
  //         callback();
  //     }
  // }



  return (
      <div className="grid-view grid-1" style={{flexDirection : "column"}}>

        <div>
           
  
        {confirmAndProceed === true ? 
          <>
            <div>
              <span className="txt primary" onClick={() => setconfirmAndProceed(!confirmAndProceed)}>{"< Back"}</span>
              <Form>
                <div className="grid-view grid-1 rowgap-20 colgap-20 mt-10">
                  
                  <Form.Item>
                  
                  <div className="grid-view grid-2 colgap-30 rowgap-20">
                    
                    <Form.Item className="mb-10" label="Name" required={true}>
                      <Input value={name} type="text" maxLength={70} onChange={(event : any) => setName(event.target.value)}></Input>
                    </Form.Item>

                    <Form.Item className="mb-10" name={['email']} hasFeedback label="Email" validateTrigger={['onBlur']} rules={[
                        { required: false, message: t('required', {field: 'Email'}) },
                        { validator: checkEmail },
                        ]}>
                        <Input placeholder="ex:halais" />
                    </Form.Item>

                  </div>
                  </Form.Item>
                  <Form.Item>
                    <div className="grid-view grid-2 colgap-30 mb-10">
                      <Form.Item label="Mobile Number" name={['mobileno']} hasFeedback validateTrigger={['onBlur']} rules={[
                        { required: false, message: t('required', {field: 'Mobile Number'}) },
                        ]}>
                        <Input value={mobileNumber} maxLength={10} onChange={(event : any) => setMobileNumber(event.target.value)}></Input>
                      </Form.Item>
                      
                      <Form.Item label={<label className="txt dark3">House No.<span>(Optional)</span></label>}>
                        <Input value={streetNo} maxLength={15} onChange={(event : any) => setStreetNo(event.target.value)}></Input>
                      </Form.Item>
                    </div>
                  </Form.Item>
                  
                  <Form.Item label="Address Line: 1" required={true}>
                    <Input value={addressone} maxLength={255}></Input>
                  </Form.Item>
                  <Form.Item label="Address Line: 2">
                    <Input value={addresstwo} maxLength={255}></Input>
                  </Form.Item>
                  <Form.Item>
                    <div className="grid-view grid-2 colgap-20">
                      <Form.Item label="Zipcode" required={true}>
                        <Input value={pinCode} onChange={(event : any) => setPinCode(event.target.value)}></Input>
                      </Form.Item>
                      <Form.Item label="Additional Number" >
                        <Input value={additionalNumber} type="number" maxLength={10} onChange={(event) => setAdditionalNumber(event.target.value)}></Input>
                      </Form.Item>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <div className="grid-view grid-2 colgap-20">
                      <Form.Item label="City" required={true}>
                        <Input value={city} maxLength={25} onChange={(event : any) => setCity(event.target.value)} contentEditable="true"></Input>
                      </Form.Item>
                      <Form.Item label="Country" required={true}>
                        <Input value={country} maxLength={20}></Input>
                      </Form.Item>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <div className="pt-20 pb-20 pr-0 pull right">
                          <Button className="mr-25 float right" onClick={() =>{props?.closeModal;
                          setconfirmAndProceed(false);
                          setName("");
                          setMobileNumber("");
                          setEmail("");
                          setHouseNo("");
                          setAdditionalNumber("");
                          }}>Cancel</Button>
                          <Button className="ant-btn primary mr-21 float right" onClick={() => {
                            
                            if(name.length > 1 && mobileNumber.length  == 10){
                              props?.addAddress({
                                      name : name,
                                      mobileNumber : mobileNumber,
                                      email : email,
                                      add1 : addressone,
                                      add2 : addresstwo,
                                      city : city,
                                      country : country,
                                      houseNumber : houseNo,
                                      state : subLocality1,
                                      lat : latitude,
                                      long : longitude,
                                      pincode : pinCode,
                                      streetNumber : streetNo,
                                      isDefault : 0,
                                  });

                                  props?.closeModal();
                                  setName("");
                                  setMobileNumber("");
                                  setEmail("");
                                  setHouseNo("");
                                  setAdditionalNumber("");
                                  setconfirmAndProceed(false);
                            }else{
                              message.error("Name and Mobile Number Not Be Empty")
                            }
                              }
                                }>Save Chages</Button>
                      </div>
                  </Form.Item>

                </div>
              </Form>
            </div>
          </>
        : 
        <div>
            <div className="mb-20" style={{position : "relative"}}>
            <LoadScript
            googleMapsApiKey="AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4"
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                  lat: latitude,
                  lng: longitude,
                }}                           
                zoom={10}
                onLoad={map => {
                  const bounds = new window.google.maps.LatLngBounds();
                  map.fitBounds(bounds);
                }}
                options={{
                  // styles: waterStyle,
                  fullscreenControl: false,
                  disableDefaultUI :  true,
                }}>
                <Marker
                draggable={true}
                onDragEnd={(event) => {handleDrag(event);
                }}
                position={{
                  lat: latitude,
                  lng: longitude,
                }}
                onLoad={handelCurrentLocation}
                animation={1}
                />

            </GoogleMap>
            </LoadScript>
            <div  className={styles['myLocationIcon']} onClick={handelCurrentLocation}><MyLocation></MyLocation></div>
            </div>
            <div>
              <div className={styles['address-container']}>
                  <Input value={formattedAddress} contentEditable={false}></Input>
              </div>
                  <Button className="text primary ml-24 mr-22 mt-10 float pull right" 
                    onClick={() =>{setconfirmAndProceed(!confirmAndProceed);
                      setAddressLine1();
                      setAddressLine2();
                      }}
                  >Confirm and Proceed</Button>
                  <Button className="mr-0 mt-10 float pull right" onClick={props?.closeModal}>Cancel</Button>
            </div>
        </div>
          
        }

        </div>
      
      </div>
      // <div className="grid-view grid-1" style={{flexDirection : "column"}}>
      //   {changeAddress === true ? 
      //   <>
      //   <span className="txt primary" onClick={() => setChangeAddress(!changeAddress)}>{"< Back"}</span>
      //   <Input className="mb-20" onChange={(event) =>handleUserGivenLocationAddress(event)}></Input>
      //   <Button className="txt primary" onClick={() =>handleUserGivenLocationConfirm(userGivenAddress)}>Confirm And Proceed</Button>
      //   </>
      //   :
      //   <div>
      //       <div className="mb-20" style={{position : "relative"}}>
      //         <LoadScript
      //         googleMapsApiKey="AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4"
      //         >
      //         <GoogleMap
      //             mapContainerStyle={containerStyle}
      //             center={center}
      //             zoom={5}
      //             onLoad={map => {
      //               const bounds = new window.google.maps.LatLngBounds();
      //               map.fitBounds(bounds);
      //             }}
      //             options={{
      //               // styles: waterStyle,
      //               fullscreenControl: false,
      //               disableDefaultUI :  true,
      //             }}>
      //             <Marker
      //             draggable={true}
      //             onDragEnd={(event) => {handleDrag(event);
      //             }}
      //             position={center}
      //             onLoad={handelCurrentLocation}
      //             animation={1}
      //             />

      //         </GoogleMap>
      //         </LoadScript>
      //         <div  className={styles['myLocationIcon']}><MyLocation></MyLocation></div>
      //       </div>

      //       {confirmAndProceed === true ? 
      //       <>
      //       <div>
      //         <span className="txt primary" onClick={() => setconfirmAndProceed(!confirmAndProceed)}>{"< Back"}</span>
      //         <Form>
      //           <div className="grid-view grid-1 rowgap-20 colgap-20 mt-10">
                  
      //             <Form.Item>
                  
      //             <div className="grid-view grid-2 colgap-30 rowgap-20 mb-20">
                    
      //               <Form.Item className="mb-10" label="Name" required={true}>
      //                 <Input value={name} onChange={(event : any) => setName(event.target.value)}></Input>
      //               </Form.Item>
                  
      //               {/* <Form.Item label="Email">
      //                 <Input value={email} onChange={(event : any) => setEmail(event.target.value)}></Input>
      //               </Form.Item> */}

      //               <Form.Item className="mb-10" name={['email']} hasFeedback label="Email" validateTrigger={['onBlur']} rules={[
      //                   { required: false, message: t('required', {field: 'Email'}) },
      //                   { validator: checkEmail },
      //                   ]}>
      //                   <Input placeholder="ex:halais" />
      //               </Form.Item>

      //             </div>
      //             </Form.Item>
      //             <Form.Item>
      //               <div className="grid-view grid-2 colgap-30 mb-10">
                      
      //                 <Form.Item label="Mobile Number" required={true}>
      //                   <Input value={mobileNumber} onChange={(event : any) => setMobileNumber(event.target.value)}></Input>
      //                 </Form.Item>
                      
      //                 <Form.Item label={<label className="txt dark3">House No.<span>(Optional)</span></label>}>
      //                   <Input value={streetNo} onChange={(event : any) => setStreetNo(event.target.value)}></Input>
      //                 </Form.Item>

      //               </div>
      //             </Form.Item>
                  
      //             <Form.Item label="Address Line: 1" required={true}>
      //               <Input value={addressone}></Input>
      //             </Form.Item>
      //             <Form.Item label="Address Line: 2">
      //               <Input value={addresstwo}></Input>
      //             </Form.Item>
      //             <Form.Item>
      //               <div className="grid-view grid-2 colgap-20">
      //                 <Form.Item label="City" required={true}>
      //                   <Input value={city} onChange={(event : any) => setCity(event.target.value)} contentEditable="true"></Input>
      //                 </Form.Item>
      //                 <Form.Item label="Pincode" required={true}>
      //                   <Input value={pinCode} onChange={(event : any) => setPinCode(event.target.value)}></Input>
      //                 </Form.Item>
      //               </div>
      //             </Form.Item>
      //             <Form.Item>
      //               <div className="grid-view grid-2 colgap-20">
      //                 <Form.Item label="Country" required={true}>
      //                   <Input value={country}></Input>
      //                 </Form.Item>
      //               </div>
      //             </Form.Item>
      //             <Form.Item>
      //                <div className="pt-20 pb-20 pr-0 pull right">
      //                     <Button className="mr-25 float right" onClick={props.closeModal}>Cancel</Button>
      //                     <Button className="ant-btn primary mr-21 float right" onClick={() => {
                            
      //                       if(name.length > 1 && mobileNumber.length  == 10){
      //                         props.addAddress({
      //                                 name : name,
      //                                 mobileNumber : mobileNumber,
      //                                 email : email,
      //                                 add1 : addressone,
      //                                 add2 : addresstwo,
      //                                 city : city,
      //                                 country : country,
      //                                 houseNumber : houseNo,
      //                                 state : subLocality1,
      //                                 lat : latitude,
      //                                 long : longitude,
      //                                 pincode : pinCode,
      //                                 streetNumber : streetNo,
      //                                 isDefault : 0,
      //                             });
      //                             props.closeModal();
      //                             setconfirmAndProceed(false);
      //                       }
      //                         }
      //                           }>Save Chages</Button>
      //                 </div>
      //             </Form.Item>

      //           </div>
      //         </Form>
      //       </div>
      //       </>
      //       : 
      //       <div>
      //         <div className={styles['address-container']}>
      //             <Input value={formattedAddress} contentEditable={false}></Input>
      //         </div>
      //             <Button className="text primary ml-24 mr-22 mt-10 float pull right" 
      //               onClick={() =>{setconfirmAndProceed(!confirmAndProceed);
      //                 setAddressLine1();
      //                 setAddressLine2();
      //                 }}
      //             >Confirm and Proceed</Button>
      //             <Button className="mr-0 mt-10 float pull right" onClick={props.closeModal}>Cancel</Button>
      //       </div>

      //       }

      //   </div>
      //   }
      // </div>
  )
}
export default AddressByMap;