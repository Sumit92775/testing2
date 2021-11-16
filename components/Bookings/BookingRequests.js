import React, {useState} from 'react';
import { Table, Button, Select, Menu, Switch, Form, Modal, Input, DatePicker, Rate } from 'antd';
import * as moment from 'moment';
import MapView from './MapView';
const { Option } = Select;
const { RangePicker } = DatePicker;
import cx from 'classnames';

const BookingRequests = () => {
    const [isVisible, toggleVisibility] = useState(false);
    
    const categories = ['Categories', 'Category 1', 'Category 2'],
    subCategory = ['Sub Category', 'Sub Category 1', 'Sub Category 2', 'Sub Category 2'],
    // staff = ['Staff', 'Staff 1', 'Staff 2', 'Staff 3'],
    status = ['Pending', 'Rescheduled'],
    dataSource = [],
    columns = [
        {
            title: 'Booking ID',
            dataIndex: 'bookingId',
            key: 'bookingId',
        },
        {
            title: 'Service Name',
            dataIndex: 'service',
            key: 'service',
            render: function service(service) {
                return (
                    <>
                        <strong>{ service.name }</strong>
                        <br/>
                        <span className="tag dark4">{ service.type }</span>
                    </>
                )
            }
        },
        {
            title: 'Date & Time',
            dataIndex: 'date_time',
            key: 'date_time',
            render: function date_time(date_time) {
                return <p>{ moment(date_time).format(`${process.env.date_format} ${process.env.time_format}`) }</p>
            }
        },
        {
            title: 'Staff',
            dataIndex: 'staff',
            key: 'staff',
            render: function staff(staff) {
                return <p>{ staff.join(', ') }</p>
            }
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
            render: function customer(customer) {
                return (
                    <>
                        <span className="txt grey1">{ customer.name }</span>
                        <br/>
                        <Rate className="mr-5 fz-10 lh-15 h-15 custom-color txt" value={ 5 } /> <span className="fz-10 lh-15 pull left">({ customer.reviews })</span>
                        <br/>
                        <span className="material-icons mr-5 txt dark4">insert_drive_file</span>
                        <MapView />
                    </>
                )
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'SP+ Fee',
            dataIndex: 'fee',
            key: 'fee',
            render: function fee(fee) {
                return <span className="txt danger">{ process.env.currency } { fee }</span>
            }
        },
        {
            title: 'Revenue',
            dataIndex: 'revenue',
            key: 'revenue',
            render: function revenue(revenue) {
                return <span className="txt success">{ process.env.currency } { revenue }</span>
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
                            <Menu.Item key="Accept" className="txt success" icon={<span className="material-icons">done</span>}>Accept</Menu.Item>
                            <Menu.Item key="Reject" className="txt danger" onClick={ () => toggleVisibility(true) } icon={<span className="material-icons">close</span>}>Reject</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </>
            }
        },

    ]

    for(let i = 1; i<20; i++) {
        dataSource.push({
            key: i,
            bookingId: 'SP15912501(R1)',
            service: { name: 'Hair Cut', type: 'by Machine' },
            date_time: new Date(),
            staff: ['Chris J'],
            customer: {
                name: 'Ehnaan',
                rating: 5,
                reviews: 25,
                document: '',
                location: ''
            },
            email: 'Ehsaan@gmail.com',
            mobile: '+966-585-5592-56',
            fee: '5',
            revenue: '35'
        })
    }

    return (
        <div>
            <Form className="stats-filter medium">
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={categories[0]}>
                        {categories.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={subCategory[0]}>
                        {subCategory.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                            ))}
                    </Select>
                </Form.Item>
                {/* <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={staff[0]}>
                        {staff.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                            ))}
                    </Select>
                </Form.Item> */}
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={status[0]}>
                        {status.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                            ))}
                    </Select>
                </Form.Item>
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

            <Table className="bordered mt-25" rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    }
                }} dataSource={dataSource} columns={columns} />

            <Modal width="500px" 
                title={ <><strong>Reject booking from ehsaan?</strong><p>ID: SP15912501</p></> }
                visible={isVisible} 
                footer={
                    <div style={{ paddingBlock: '18px' }}>
                        <Button className="primary ghost">Cancle</Button>
                        <Button className="danger">Reject Booking</Button>
                    </div>
                }
                onCancel={() => toggleVisibility(false) }>
                    <Input.TextArea rows={4} />
            </Modal>
        </div>
    )
}

export default BookingRequests