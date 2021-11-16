// import React, {useState} from 'react'
// import { Table, Button, Select, Menu, Input, Form, Modal, DatePicker, Rate } from 'antd';
// import * as moment from 'moment';
// import MapView from './MapView';
// import cx from 'classnames';
// import styles from './Style.module.scss';

// const { Option } = Select;
// const { RangePicker } = DatePicker;

// const Rejections = () => {
    
//     const categories = ['Categories', 'Category 1', 'Category 2'],
//     subCategory = ['Sub Category', 'Sub Category 1', 'Sub Category 2', 'Sub Category 2'],
//     dataSource = [],
//     columns = [
//         {
//             title: 'Booking ID',
//             dataIndex: 'bookingId',
//             key: 'bookingId',
//         },
//         {
//             title: 'Service Name',
//             dataIndex: 'service',
//             key: 'service',
//             render: function service(service) {
//                 return (
//                     <>
//                         <strong>{ service.name }</strong><br/>
//                         <span className="tag dark4">{ service.type }</span>
//                     </>
//                 )
//             }
//         },
//         {
//             title: 'Date & Time',
//             dataIndex: 'date_time',
//             key: 'date_time',
//             render: function date_time(date_time) {
//                 return <p>{ moment(date_time).format(`${process.env.date_format} ${process.env.time_format}`) }</p>
//             }
//         },
//         // {
//         //     title: 'Staff',
//         //     dataIndex: 'staff',
//         //     key: 'staff',
//         //     render: function staff(staff) {
//         //         return <p>{ staff.join(', ') }</p>
//         //     }
//         // },
//         {
//             title: 'Service Provider',
//             dataIndex: 'serviceprovider',
//             key: 'serviceprovider',
//             render: function serviceprovider(serviceprovider) {
//                 return (
//                     <>
//                         <span className="txt grey1">{ serviceprovider.name }</span>
//                         <br/>
//                         <Rate className="mr-5 fz-10 lh-15 h-15 custom-color txt" value={ 5 } /> <span className="fz-10 lh-15 pull left">({ serviceprovider.reviews })</span>
//                         <br/>
//                     </>
//                 )
//             }
//         },
//         {
//             title: 'Reason',
//             dataIndex: 'reasons',
//             key: 'reasons',
//             render: function reasons(reasons) {
//                 return (
//                     <>
//                         <span className="txt grey1">{ reasons }</span>
//                     </>
//                 )
//             }
//         },
//         {
//             title: 'Status',
//             dataIndex: 'status',
//             key: 'status',
//             render: function status(status) {
//                 return (
//                     <Button className={styles['btn-rejection']}>Rejected</Button>
//                 )
//             }
//         },

//     ]

//     for(let i = 1; i<5; i++) {
//         dataSource.push({
//             key: i,
//             bookingId: 'SP15912501(R1)',
//             service: { name: 'Hair Cut', type: 'by Machine' },
//             date_time: new Date(),
//             staff: ['Chris J'],
//             serviceprovider: {
//                 name: 'Ehnaan',
//                 rating: 5,
//                 reviews: 25,
//             },
//             reasons:'This order is rejected',
//         })
//     }

//     return (
//         <>
//             <h5 className="mb-20">Rejections</h5>
//             <Form className="stats-filter medium">
//                 <Form.Item className="auto-width">
//                     <Select className="medium" defaultValue={categories[0]}>
//                         {categories.map(option => (
//                             <Option key={option} value={option}>{option}</Option>
//                         ))}
//                     </Select>
//                 </Form.Item>
//                 <Form.Item className="auto-width">
//                     <Select className="medium" defaultValue={subCategory[0]}>
//                         {subCategory.map(option => (
//                             <Option key={option} value={option}>{option}</Option>
//                             ))}
//                     </Select>
//                 </Form.Item>
//                 {/* <Form.Item className="auto-width">
//                     <Select className="medium" defaultValue={staff[0]}>
//                         {staff.map(option => (
//                             <Option key={option} value={option}>{option}</Option>
//                             ))}
//                     </Select>
//                 </Form.Item> */}
//                 <Form.Item className="auto-width">
//                     <div className={cx('picker',  `booking-picker`)}>
//                         <RangePicker allowClear={false} separator={<span>to</span>} suffixIcon={false}></RangePicker>
//                     </div>
//                 </Form.Item>
//                 <Form.Item className="auto-width">
//                     <Button className="primary medium full-width">Apply Filters</Button>
//                 </Form.Item>
//                 <Form.Item className="auto-width">
//                     <Button className="medium full-width">Clear Filters</Button>
//                 </Form.Item>
//             </Form>

//             <Table className="bordered mt-25" pagination={{ pageSize: 3 }} rowSelection={{
//                     type: 'checkbox',
//                     onChange: (selectedRowKeys, selectedRows) => {
//                         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
//                     }
//                 }} dataSource={dataSource} columns={columns} />
                
//         </>
//     )
// }

// export default Rejections

import React, {useEffect, useState} from 'react';
import { Table, Button, Menu, Switch, Form, Modal, Input, DatePicker, Rate, message, Tooltip } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
import { LocationOnOutlined} from '@material-ui/icons';
import styles from '../../components/Bookings/Style.module.scss';
import cx from 'classnames';
import { bookings } from '../../services/bookings';
import MapView from '../../components/Bookings/MapView';

const Rejections = () => {
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
                    <span className={ 
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
                        >{statusObj.title}</span>
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
                        <span>{service.service}</span><br/>
                        <span className="fz-12">{service.type}</span>
                    </div>
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
    ];

    useEffect(() =>{
        try{
            bookings({
                type: 5,
                page: 1
            }).then(res =>{
                if(res.status){
                    console.log("Bookings Response: ",res);
                    let dataSource = [];
                    setTotalBookings(res.bookings);
                     
                        for(let i = 0; i<res.bookings.length; i++) {

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
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].add2+", "
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].city+", "
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].zipCode;

                            dataSource.push({
                                key: res.bookings[i].id,
                                bookingId: res.bookings[i].bookingId,
                                spname: {spname: res.bookings[i].Variation.Service.Store.storeName, address: address},
                                date: res.bookings[i].BookingTime,
                                time: res.bookings[i].BookingTime,
                                service: {service: res.bookings[i].Variation.Service.primaryServiceName, variant: res.bookings[i].Variation.primaryLanguageVariationName , type: serviceType},
                                // servicetype: 'In-Store',
                                spfee: res.bookings[i].storePlatformFee,
                                price: res.bookings[i].Variation.price,
                                status: res.bookings[i].BookingStatus,
                                reasons:'This order is rejected',
                            })
                        }

                        setDataSource(dataSource);
                        console.log("DatSource: ",dataSource);
                        
                    
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
                type: 5,
                page: page
            }).then(res =>{
                if(res.status){
                    console.log("Bookings Response: ",res);
                    let dataSource = [];
                    setTotalBookings(res.bookings);
                     
                        for(let i = 0; i<res.bookings.length; i++) {

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
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].add2+", "
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].city+", "
                            address+=res.bookings[i].Variation.Service.Store.Addresses[0].zipCode;

                            dataSource.push({
                                key: res.bookings[i].id,
                                bookingId: res.bookings[i].bookingId,
                                spname: {spname: res.bookings[i].Variation.Service.Store.storeName, address: address},
                                date: res.bookings[i].BookingTime,
                                time: res.bookings[i].BookingTime,
                                service: {service: res.bookings[i].Variation.Service.primaryServiceName, variant: res.bookings[i].Variation.primaryLanguageVariationName , type: serviceType},
                                // servicetype: 'In-Store',
                                spfee: res.bookings[i].storePlatformFee,
                                price: res.bookings[i].Variation.price,
                                status: res.bookings[i].BookingStatus,
                                reasons:'This order is rejected',
                            })
                        }

                        setDataSource(dataSource);
                        console.log("DatSource: ",dataSource);
                        
                    
                }else{
                    // message.error(res.status);
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
            <h5 className="mb-20">Rejections</h5>
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

            <Table locale={{
                emptyText: 'No booking in this category'
            }} className="bordered mt-25" rowSelection={{
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

export default Rejections;

