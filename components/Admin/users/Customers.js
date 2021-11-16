import React from 'react'
import { Table, Button, Select, Menu, Input, Form, Rate, Tooltip } from 'antd';
import * as moment from 'moment';
import { useRouter } from 'next/router';

const { Option } = Select;

const Providers = () => {
    
    const router = useRouter(),
    { slug } = router.query,
    user_types = ['User Type', 'User Type 1', 'User Type 2', 'User Type 3'],
    status = [{ key: 1, label: 'Active'}, { key: 0, label: 'Deactivated'}],
    dataSource = [],
    columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Country',
            dataIndex: 'coungry',
            key: 'coungry',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: function status(status) {
                switch (status) {
                    case 0:
                        return <span className="txt danger">Deactivated</span>

                    case 1:
                        return <span className="txt success">Active</span>

                    default:
                        return <span className="txt success">Active</span>
                }
            }
        },
        {
            title: 'actions',
            dataIndex: 'actions',
            key: 'actions',
            render: function action(action) {
                if(action) {
                    return <>
                        <Menu className="table-action-btn" mode="horizontal">
                            <Menu.SubMenu key="SubMenu" title="">
                                <Menu.Item key="View Details" icon={<span className="material-icons">visibility</span>} onClick={ () => previewProfile(action) }>View Details</Menu.Item>
                                <Menu.Item key="Message" className="disabled" icon={<span className="material-icons">sms</span>}>Message</Menu.Item>
                                <Menu.Item key="Deactivate" className="disabled" icon={<span className="material-icons">no_accounts</span>}>Deactivate</Menu.Item>
                                <Menu.Item key="Delete" className="txt danger disabled" icon={<span className="material-icons">delete</span>}>Reject</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </>
                }
                return <></>
            }
        },

    ],

    previewProfile = (row) => {
        if(slug) {
            router.push(`${ process.env.base_url }users/${slug[0]}/${row.key}`);
        }
    };


    for(let i = 1; i<20; i++) {
        dataSource.push({
            key: i,
            username: `Halais ${i}`,
            gender: i%2 ? 'Male' : 'Female',
            country: 'Saudi Arabia',
            city: 'Jidhah',
            email: 'Ehsaan@gmail.com',
            phone: '+966-505-5515-86',
            status: i%2,
            actions: true
        })
    }

    return (
        <div>
            <Form className="stats-filter medium">
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={user_types[0]}>
                        {user_types.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={status[0].key}>
                        {status.map(option => (
                            <Option key={option} value={option.key}>{option.label}</Option>
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
            <div className="pull-right auto-width" style={{ minWidth: '250px' }}>
                <Input className="search-field" size="small" placeholder="Search by username, email" prefix={<span className="material-icons">search</span>} />
            </div>

            <Table className="bordered mt-25" rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    }
                }} dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default Providers