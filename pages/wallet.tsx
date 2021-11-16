import React, { useState, useEffect } from 'react'
import { Button, Divider, Tabs, Menu, Modal, Tooltip, message } from 'antd';
import styles from '../styles/components/Payment.module.scss';
import { useRouter } from 'next/router';
import TransactionCard from '../components/Common/TransactionCard';
// import EditPreferences from '../components/Product-Details/edit-preferences-modal';
import RaiseDisputes from '../components/Payments/raise-dispute';
import ViewDetails from '../components/Payments/view-details';
import Dispute from '../components/Payments/dispute';
import OutsideKsa from '../components/Payments/outside-ksa';
import WithinKsa from '../components/Payments/within-ksa';
import PaymentWalletDeposit from '../components/Payments/payment-wallet-deposit';
import AddMoneyModal from '../components/Payments/AddMoneyModal';
import cx from 'classnames';
import { getMyBalance, getTransactionHistory, getTransactionHistoryByData } from '../services/payments';
import moment from 'moment';

const { TabPane } = Tabs;


const Wallet = () => {


    const [selectedModalName, setSelectedModalName] = useState("");
    const [selectedModal, setSelectedModal] = useState(false);
    
    const [selectedModal1, setSelectedModal1] = useState(false);
    const [activeksa, setActiveksa] = useState('');

    const [transactionHistory, setTransactionHistory] = useState([] as any);

    const [myBalance, setMyBalance] = useState(0);

    const [index, setIndex] = useState(0);

    useEffect(() =>{
        try{
            getTransactionHistory().then(res =>{
                if(res?.status){
                    if(res.TransactionData){
                        let txnsHistoryArray = [];
                        txnsHistoryArray = res.TransactionData;  

                        let txtHistory = [];
                        for(let i = 0 ; i < txnsHistoryArray.length ; i++){
                            txtHistory.push({
                                key: ''+txnsHistoryArray[i].id,
                                date: ''+moment(txnsHistoryArray[i].createdAt).format(process.env.date_format),
                                amount: {amount: ''+txnsHistoryArray[i].amount, direction: txnsHistoryArray[i].direction},
                                transaction: {transaction: ''+txnsHistoryArray[i].description, transactionId: txnsHistoryArray[i].transactionId},
                                status: ''+txnsHistoryArray[i].transactionStatus.name,
                                actions: i,
                                transactionId: ''+txnsHistoryArray[i].transactionId,
                                time: ''+moment(txnsHistoryArray[i].createdAt).format(process.env.time_format),
                                style: txnsHistoryArray[i].direction == 1 ? 'background: green' : 'background: red',
                            })
                        }
                        console.log("TransactionHistory Table: ",txtHistory);
                        setTransactionHistory(txtHistory);
                        
                    }else{
                        console.log("error in fetching transactionHistories");
                    }
                }else{
                    console.log("error in fetching transactionHistories");
                }
            }).catch(error =>{
                console.log("error: ",error);
            })

            getMyBalance().then(res =>{
                if(res?.status){
                    setMyBalance(res?.walletBalance);
                }else{
                    console.log("error");
                    setMyBalance(0);
                }
            }).catch(error =>{
                console.log("error: ",error);
                setMyBalance(0);
            })
        }catch(error: any){
            console.log("error: ", error);
            
        }
    },[])


    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'providers',

    onTabClick = (key:string, event: any) => {
        setActiveksa(key);
        // router.push(`${process.env.base_url}wallet/${key}`)
    };

    const countryData = {
        title: 'Transaction History',
        columns: [
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
                render: function date(date: any){
                    return(
                        <div>{date}</div>
                    )
                },
            },
            {
                title: 'Transaction',
                dataIndex: 'transaction',
                key: 'transaction',
                render: function transaction(transaction: any){
                    return(
                        <div>{transaction.transaction}<br/>
                            <Tooltip title={transaction.transactionId}>
                                <div className="txt fz-11 light1 weight400 cursor"><div style={{width: '100px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>{"( txnId: "}{transaction.transactionId}</div>{")"}
                                </div>
                            </Tooltip>
                        </div>
                    )
                }
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                render: function amount(amount: any){
                    return(
                        <div style={{color: amount.direction == 1 ? 'green' : 'red'}}>{amount.amount}</div>
                    )
                }
            },
            {
                title: 'Transaction Status',
                dataIndex: 'status',
                key: 'status',
                render: function status(status: any){
                    return(
                        <div>{status}</div>
                    )
                }

            },
            {
                title: 'Actions',
                dataIndex: 'actions',
                key: 'actions',
                render: function action(i: any) {
                    return <>
                        <Menu className="table-action-btn" mode="horizontal">
                            <Menu.SubMenu key="SubMenu" title="">
                                <Menu.Item key="View Details" onClick={() =>{
                                    openModal("View Details");
                                    setIndex(i);
                                    }} >View Details</Menu.Item>
                                <Menu.Item key="Raise Dispute" onClick={() =>openModal("Raise Dispute")}>Raise Dispute</Menu.Item>
                                <Menu.Item key="Disputed" onClick={() =>openModal("Disputed")}>Disputed</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </>
                }
            },
        ],
    }



    const sortTransactionByDate = (newDate: any) => {

        console.log("Sort Applied");
        setTransactionHistory([]);
        
        try{
            getTransactionHistoryByData(newDate).then(res =>{
                if(res?.status){
                    if(res.TransactionData){
                        let txnsHistoryArray = [];
                        txnsHistoryArray = res.TransactionData;  

                        let txtHistory = [];
                        for(let i = 0 ; i < txnsHistoryArray.length ; i++){
                            txtHistory.push({
                                key: ''+txnsHistoryArray[i].id,
                                date: ''+moment(txnsHistoryArray[i].createdAt).format(process.env.date_format),
                                amount: {amount: ''+txnsHistoryArray[i].amount, direction: txnsHistoryArray[i].direction},
                                transaction: {transaction: ''+txnsHistoryArray[i].description, transactionId: txnsHistoryArray[i].transactionId},
                                status: ''+txnsHistoryArray[i].transactionStatus.name,
                                actions: i,
                                transactionId: ''+txnsHistoryArray[i].transactionId,
                                time: ''+moment(txnsHistoryArray[i].createdAt).format(process.env.time_format),
                                style: txnsHistoryArray[i].direction == 1 ? 'background: green' : 'background: red',
                            })
                        }
                        console.log("TransactionHistory Table: ",txtHistory);
                        setTransactionHistory(txtHistory);
                        
                    }else{
                        message.error("Transaction history not found.")
                        console.log("error in fetching transactionHistories");
                    }
                }else{
                    console.log("error in fetching transactionHistories");
                }
            }).catch(error =>{
                console.log("error: ",error);
            })

            // getMyBalance().then(res =>{
            //     if(res?.status){
            //         setMyBalance(res?.walletBalance);
            //     }else{
            //         console.log("error");
            //         setMyBalance(0);
            //     }
            // }).catch(error =>{
            //     console.log("error: ",error);
            //     setMyBalance(0);
            // })
        }catch(error: any){
            console.log("error: ", error);
        }
    }

    // Modal

    const handleOk = (evt : any) => {
        console.log('ok clicked', evt);
    };

    const handleCancel = () => {
        setSelectedModal(false);   
        setSelectedModal1(false);
    };

    const openModal = (type : any) => {
        console.log(type);
        setSelectedModal(!selectedModal);
        setSelectedModalName(type);
    };


    return(
        <div>
             <div className={styles['your-payment-wallet']}>
                <h5><strong>Your Payments Wallet</strong></h5>
                <div className={styles['payment-modal-container']}>
                    <div className={styles['pmc-left']}>
                        <div className={styles['pmc-left-container']}>

                            <div className={styles['pmc-left-container-top']}>
                                <h5 className="mb-5"><strong>Wallet Balance</strong></h5>
                                {/* <h5 className="mb-5"><strong className="primary-txt">$ 850.20 USD</strong></h5> */}
                                <h5 className="mb-1"><strong className="primary-txt">SAR {myBalance}</strong></h5>
                            </div>
                            
                            <Divider className="mt-0"></Divider>

                            <div className={styles['pmc-left-container-bottom']}>
                               <div className={styles['pmc-left-container-bottom-btn']}>
                                   <Button onClick={() => openModal("Add Money")}><strong>Add Money</strong></Button>
                                   <Button className="primary" onClick={() => setSelectedModal1(true)}><strong>Request Payout</strong></Button>
                               </div>

                               <div className={styles['pmc-left-container-bottom-anim-1']}></div>
                               <div className={styles['pmc-left-container-bottom-anim-2']}></div>
                               <div className={styles['pmc-left-container-bottom-anim-3']}></div>

                            </div>
                        </div>
                    </div>
                    <div className={styles['pmc-right']}>
                        <TransactionCard sortTxnByDate={sortTransactionByDate} table={{columns : countryData.columns, title : countryData.title, dataSource : transactionHistory}} />
                    </div>

                    <Modal
                        destroyOnClose={true}
                        style={{borderRadius :"15px", overflow : "hidden"}} title={
                                <div style={{width : "100%", 
                                height: "100%",
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                alignItems: "center"}}>
                                    <h4 className="txt primary">{selectedModalName}</h4>
                                </div>
                        } footer={

                            selectedModalName === "Raise Dispute" ?
                            <div className="pt-20 pb-20 pr-0">
                                <Button className="ant-btn mr-21" onClick={() =>handleCancel}>Cancel</Button>
                                <Button className="ant-btn primary mr-21">Submit</Button>
                            </div>
                            : 
                            <>
                            </>

                            } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
                            
                            {
                            selectedModalName === "Raise Dispute" ? 
                            <RaiseDisputes val={transactionHistory[index]}/> 
                            : 
                            selectedModalName === "View Details" ? 
                            <ViewDetails val={transactionHistory[index]}/> 
                            : 
                            selectedModalName === "Disputed" ? 
                            <Dispute/> 
                            : 
                            selectedModalName === "Add Money" ? 
                            <AddMoneyModal/> 
                            : 
                            <>
                            </>
                            }
                    </Modal>
                    
                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">{"Request Payout"}</h4>
                            </div>
                    } footer={

                        <div className="pt-20 pb-20 pr-0">
                            <Button className="ant-btn mr-21" onClick={handleCancel}>Cancel</Button>
                            <Button className="ant-btn primary mr-21">Submit</Button>
                        </div>
                      
                        } visible={selectedModal1} onOk={handleOk} onCancel={handleCancel}>
                           
                           {
                               <div>
                                   <Tabs defaultActiveKey="1" activeKey={activeksa} onTabClick={onTabClick}>
                                       <TabPane tab="Active" key="1">
                                       {/* <h5>Your Active Gift Cards</h5> */}
                        <WithinKsa></WithinKsa>
                        {/* <div className={styles['res-grid']}>
                            {count.map((a, i) => {
                                return <GiftCard key={i} card={a} />
                            })}
                        </div> */}
                                       </TabPane>
                                       <TabPane tab="Expired" key="2">
                                       {/* <h5>Your Active Gift Cards</h5> */}
                        <OutsideKsa></OutsideKsa>
                        {/* <div className={styles['res-grid']}>
                            {count.map((a, i) => {
                                return <GiftCard key={i} card={a} />
                            })}
                        </div> */}
                                       </TabPane>
                                   </Tabs>
                               </div>
                           }
                    </Modal>

                </div>
            </div>
            {/* {addMoneyClicked === true ? 
            <PaymentWalletDeposit backToWallet={setAddMoneyClicked}></PaymentWalletDeposit>
            : 
            <div className={styles['your-payment-wallet']}>
                <h5><strong>Your Payments Wallet</strong></h5>
                <div className={styles['payment-modal-container']}>
                    <div className={styles['pmc-left']}>
                        <div className={styles['pmc-left-container']}>

                            <div className={styles['pmc-left-container-top']}>
                                <h5 className="mb-5"><strong>Wallet Balance</strong></h5>
                                <h5 className="mb-5"><strong className="primary-txt">$ 850.20 USD</strong></h5>
                                <h5 className="mb-1"><strong className="primary-txt">SAR 254.20 Saudi Riyal</strong></h5>
                            </div>
                            
                            <Divider className="mt-0"></Divider>

                            <div className={styles['pmc-left-container-bottom']}>
                               <div className={styles['pmc-left-container-bottom-btn']}>
                                   <Button onClick={() => openModal("Add Money")}><strong>Add Money</strong></Button>
                                   <Button className="primary" onClick={() => setSelectedModal1(true)}><strong>Request Payout</strong></Button>
                               </div>

                               <div className={styles['pmc-left-container-bottom-anim-1']}></div>
                               <div className={styles['pmc-left-container-bottom-anim-2']}></div>
                               <div className={styles['pmc-left-container-bottom-anim-3']}></div>

                            </div>
                        </div>
                    </div>
                    <div className={styles['pmc-right']}>
                        <TransactionCard table={{columns : countryData.columns, title : countryData.title, dataSource : countryData.dataSource}} />
                    </div>

                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">{selectedModalName}</h4>
                            </div>
                    } footer={

                        selectedModalName === "Raise Dispute" ?
                        <div className="pt-20 pb-20 pr-0">
                            <Button className="ant-btn mr-21">Cancel</Button>
                            <Button className="ant-btn primary mr-21">Submit</Button>
                        </div>
                        : 
                        <>
                        </>

                        } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
                           
                           {
                           selectedModalName === "Raise Dispute" ? 
                           <RaiseDisputes/> 
                           : 
                           selectedModalName === "View Details" ? 
                           <ViewDetails/> 
                           : 
                           selectedModalName === "Disputed" ? 
                           <Dispute/> 
                           : 
                           selectedModalName === "Add Money" ? 
                           <AddMoneyModal/> 
                           : 
                           <>
                           </>
                           }
                    </Modal>
                    
                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">{"Request Payout"}</h4>
                            </div>
                    } footer={

                        <div className="pt-20 pb-20 pr-0">
                            <Button className="ant-btn mr-21" onClick={handleCancel}>Cancel</Button>
                            <Button className="ant-btn primary mr-21">Submit</Button>
                        </div>
                      
                        } visible={selectedModal1} onOk={handleOk} onCancel={handleCancel}>
                           
                           {
                               <div>
                                   <Tabs defaultActiveKey="1" activeKey={activeksa} onTabClick={onTabClick}>
                                       <TabPane tab="Active" key="1">
                         
                        <WithinKsa></WithinKsa>
                  
                                       </TabPane>
                                       <TabPane tab="Expired" key="2">
                         
                        <OutsideKsa></OutsideKsa>
                    
                                       </TabPane>
                                   </Tabs>
                               </div>
                           }
                    </Modal>

                </div>
            </div>
            } */}
        </div>
        
    )
}

export default Wallet;
