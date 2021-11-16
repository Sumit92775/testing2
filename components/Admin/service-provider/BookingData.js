import React from 'react'
import { Table, Button, Select, DatePicker, Form, Rate, Tooltip } from 'antd';
import * as moment from 'moment';

const { Option } = Select;

const BookingData = () => {
    const categories = ['Category', 'Category 1', 'Category 2', 'Category 3'],
    subCategory = ['Sub Category', 'Sub Category 1', 'Sub Category 2', 'Sub Category 3'],
    countries = ['Country', 'Country 1', 'Country 2', 'Country 3'],
    cities = ['City', 'City 1', 'City 2', 'City 3'],
    dataSource = [],
    columns = [
        {
            title: 'Booking Id',
            dataIndex: 'booking_id',
            key: 'booking_id',
        },
        {
            title: 'Service Name',
            dataIndex: 'service_name',
            key: 'service_name',
            render: function service_name(service_name) {
                return <>
                    <p><strong>{ service_name.name }</strong></p>
                    <p className="fz-11">{ service_name.type }</p>
                </> 
            }
        },
        {
            title: 'Date & Time',
            dataIndex: 'date_time',
            key: 'date_time',
            render: function date_time(date_time) {
                return <>
                    <p>{ moment(date_time).format(process.env.date_format) }</p>
                    <p>{ moment(date_time).format(process.env.time_format) }</p>
                </> 
            }
        },
        {
            title: 'Staff',
            dataIndex: 'staff',
            key: 'staff',
        },
        {
            title: 'Customer Name',
            dataIndex: 'customer',
            key: 'customer',
            render: function customer(customer) {
                return <>
                    <p className="txt success">{ customer.name }</p>
                    <p className="txt light1 fz-11">{ customer.id }</p>
                </> 
            }
        },
        {
            title: 'Email',
            dataIndex: 'customer',
            key: 'email',
            render: function customer(customer) {
                return <p className="txt danger">{ customer.email }</p>
            }
        },
        {
            title: 'Earnings',
            dataIndex: 'earnings',
            key: 'earnings',
            render: function earnings(earnings) {
                return <p className="txt success">{ earnings }</p>
            }
        },
        {
            title: 'SP+ Fee',
            dataIndex: 'sp_fee',
            key: 'sp_fee',
            render: function sp_fee(sp_fee) {
                return <p className="txt danger">{ sp_fee }</p>
            }
        },
        {
            title: 'ratings',
            dataIndex: 'ratings',
            key: 'ratings',
            render: function ratings(ratings) {
                return <div className="user-ratings multi">
                    { ratings.map(user_rating => (
                        <div key={user_rating}>
                            <Tooltip placement="bottom" title={ user_rating.comment }>
                            <span>{ user_rating.name }</span>
                            <br />
                                <Rate className="mr-10 small" value={ user_rating.rating } />
                            </Tooltip>
                        </div>
                    ))}
                </div> 
            }
        }
    ];


    for(let i = 0; i<20; i++) {
        dataSource.push({
            key: i,
            booking_id: `SP159125${(i < 10 ? '0':'')+i}`,
            service_name: { name: 'Hair Cut', type: 'By Machine'},
            date_time: new Date(),
            staff: 'Chris J',
            customer: { name: 'Ehsaan', id: '@Edhaan123', email: 'Ehsaan@gmail.com'},
            earnings: '100.00',
            sp_fee: '10.00',
            ratings: [
                {
                    name: 'Ehsaan',
                    rating: 5,
                    comment: 'Great experience with Halais, this is my first order and loved it.'
                },
                {
                    name: 'Yours',
                    rating: 5,
                    comment: 'Great experience with Ehsaan, this is my first service and loved it.'
                }
            ]
        })
    }

    return (
        <div>
            <Form className="stats-filter medium">
                <Form.Item className="auto-width">
                    <DatePicker />
                </Form.Item>
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
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={countries[0]}>
                        {countries.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                            ))}
                    </Select>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={cities[0]}>
                        {cities.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                            ))}
                    </Select>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="primary medium full-width">Apply Filters</Button>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="medium full-width">Clear Filters</Button>
                </Form.Item>
            </Form>

            <Table className="bordered mt-25" rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    }
                }} dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default BookingData
