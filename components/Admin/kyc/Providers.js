import React, {useState} from 'react'
import { Table, Button, Select, Menu, Input, Form, Modal, Tooltip } from 'antd';
import * as moment from 'moment';
import PreviewKyc from './PreviewKyc';
import DeleteKyc from './deleteKyc';
import ResetPassword from '../../Admin/kyc/ResetPassword';

const { Option } = Select;

const Providers = () => {
    const [viewDetail, setViewDetail] = useState(false);
    const [reject, setReject] = useState(false);
    const [del, setDel] = useState(false);

    const user_types = ['User Type', 'User Type 1', 'User Type 2', 'User Type 3'],
    status = ['Accepted', 'Rejected', 'Re-Submited'],
    dataSource = [],
    columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Document',
            dataIndex: 'document',
            key: 'document',
            render: function document(documents) {
                return (
                    <>
                        { documents.map(document => <a key={document} className="txt success mr-10" rel="noreferrer" target="_blank" href={ document.link }>{ document.name }</a>) }
                    </>
                )
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Submissions',
            dataIndex: 'submissions',
            key: 'submissions',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: function status(status) {
                switch (status) {
                    case 0:
                        return <span className="txt danger">Rejected</span>

                    case 1:
                        return <span className="txt success">Accepted</span>

                    case 2:
                        return <span className="txt secondary">Re-Submited</span>
                
                    default:
                        return <span className="txt success">Accepted</span>
                }
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
                            <Menu.Item key="View Details" onClick={()=>openModal("view_details")} icon={<span className="material-icons">visibility</span>}>View Details</Menu.Item>
                            <Menu.Item key="Message" icon={<span className="material-icons">done</span>}>Accept</Menu.Item>
                            <Menu.Item key="Delete" onClick={()=>openModal("delete")} className="txt danger" icon={<span className="material-icons">delete</span>}>Reject</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </>
            }
        },

    ],
    handleOk = (evt) => {
        console.log('ok clicked', evt)
    },
    handleCancel = () => {
        // console.log('cancel clicked', evt);
        // if(type === "view_details"){
            setViewDetail(false);
        // }else if(type === "delete"){
            setDel(false);
        // }
        
    },
    openModal = (type) => {

        console.log(type);

        if(type === "view_details"){
            setViewDetail(true);
        }
        
        if(type === "delete"){
            setDel(true);
        }
    };

    for(let i = 1; i<20; i++) {
        dataSource.push({
            key: i,
            username: `Halais ${i}`,
            first_name: `Ehsaan`,
            last_name: `H`,
            address: `King abdul aziz south road, Jidhah`,
            document: [
                {
                    name: 'KYC.pdf',
                    link: ''
                },
                {
                    name: 'Id.pdf',
                    link: ''
                }
            ],
            date: new Date(),
            submissions: i,
            status: i%3,
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
                    <Select className="medium" defaultValue={status[0]}>
                        {status.map(option => (
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
            <div className="pull-right auto-width" style={{ minWidth: '250px' }}>
                <Input className="search-field" size="small" placeholder="Search by username, email" prefix={<span className="material-icons">search</span>} />
            </div>

            <Table className="bordered mt-25" rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    }
                }} dataSource={dataSource} columns={columns} />

            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={<h4 className="txt primary">KYC Verification</h4>} footer={
            
            <div>
                <button style={{width : "fit-content",paddingLeft : "15px",paddingRight : "15px", height : "43px", marginRight : "32px", borderRadius : "6px", background : "transparent",border : "1px solid var(--primary-1)", outline : "none"}}><h6 style={{color : "var(--primary-1)"}}>Request Resubmit</h6></button>
                <button style={{width : "155px", height : "43px", marginRight : "32px", borderRadius : "6px", background : "transparent",border : "1px solid var(--red-1)", outline : "none"}}><h6 style={{color : "var(--red-1)"}}>Reject KYC</h6></button>
                <button style={{width : "187px", height : "43px", marginRight : "32px", borderRadius : "6px", background : "var(--primary-1)",border : "none", outline : "none"}}><h6 style={{color : "white", backgroundColor : "var(--primary-1)"}}>Approve KYC</h6></button>
            </div>
            } visible={viewDetail} onOk={handleOk} onCancel={handleCancel}>
                <PreviewKyc />
            </Modal>

            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                <div style={{width : "100%", 
                height: "100%",
                display: "grid",
                gridTemplateColumns: "1fr",
                alignItems: "center"}}
                >
                    <h4 className="txt primary">Change Password</h4>
                   
                </div>

        } footer={
            <div style={{padding : "20px"}}>
                <Button className="mr-20" >Cancel</Button>
                <Button className="ant-btn primary mr-21">Submit</Button>
            </div>
            } visible={del} onOk={handleOk} onCancel={handleCancel}>
                <DeleteKyc />
            </Modal>

        </div>
    )
}

export default Providers