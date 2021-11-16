import { Avatar, message, Modal, Pagination, Switch } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio } from 'antd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from 'react';
import ShareGiftCardModal from './ShareGiftCardModal'
import { getMyGiftCards } from '../../services/gift-cards';
import moment from 'moment';
import styles from '../../styles/components/GiftCards.module.scss'

const GiftCard = (props) => {
    // let onSwitch = event => props.card.visibleToStore = event;
    
    const [shareGiftCard, setShareGiftCard] = useState(false);
    const [activeGiftCardAvailable, setActiveGiftCardAvailable] = useState(false);
    
    const [giftCards, setGiftCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() =>{
        try{
            getMyGiftCards(currentPage).then(res =>{
                if(res.status === true){
                    console.log("Response giftcards1: ",res);
                    setActiveGiftCardAvailable(true);
                    if(res.data){
                        console.log("Gift Card: ",res.data);
                        setGiftCards(res.data);
                    }else{
                        console.log("error in active gift cards: ");
                    }
                }else{
                    // message.error(res);
                    setActiveGiftCardAvailable(false);
                    console.log("Response giftcards1: ",res);

                }
            })
        }catch(error){
            console.log("error in active gift cards: ",error);
            // setGiftCards([]);
            setActiveGiftCardAvailable(false);
        }
    },[]);

    const handleOk = (evt) => {
        console.log('ok clicked', evt)
    };
    
    const handleCancel = () => {
        setShareGiftCard(false)
    };
    
    const openModal = (type) => {
        setShareGiftCard(true)
    };


    const handelChangePagination = (event) =>{
        console.log("Event ShopCard: ",event);
        setCurrentPage(event);
    }

    
    return (
        <div>
            {activeGiftCardAvailable === true ? 
                <div>
                <div className={styles['res-grid']}>
                    {giftCards.map((obj) =>{
                        return(
                            <div className="gift-card" key={obj.id}>
                            <div className="gift-card-header">
                                <Avatar size={44} icon={<UserOutlined />} />
                                <h6>{ obj.GiftCard.GiftCardName }</h6>
                                <span>#{ obj.GiftCardNumber }</span>
                                <span></span>
                            </div>
                            <div className="gift-card-description">
                                <strong className="full-width">Description</strong>
                                <p>{ obj.GiftCard.description }</p>
                            </div>
                            <div className="grid-view grid-3 colgap-14 gift-card-validity">
                                <div>
                                    <strong>Expiry</strong>
                                    <p className="primary-txt">{ moment(obj.expiryDate).format(process.env.date_format) }</p>
                                </div>
                            </div>
                            <div className="grid-view grid-3 colgap-14 gift-card-pricing">
                                <div>
                                    <strong>Price</strong>
                                    <p>${ obj.GiftCard.price }</p>
                                </div>
                                <div>
                                    <strong>Value</strong>
                                    <p>${ obj.GiftCard.value }</p>
                                </div>
                                <div>
                                    <strong>Service Provider</strong>
                                    <p className="primary-txt">{ obj.GiftCard.Store.storeName }</p>
                                </div>
                            </div>
                            <div className="grid-view grid-3 colgap-14 gift-card-meta">
                                <div>
                                    <strong>In Balance</strong>
                                    <p>${ obj.remainingValue }</p>
                                </div>
                            </div>
                            <div className="gift-card-actions">
                                <Button className="primary small mr-33" type="link" onClick={openModal}><span className="icon-wrap"><EditIcon /></span>Share Gift Card</Button>
                            </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination className="txt float pull right" defaultCurrent={1} total={giftCards.length} onChange={handelChangePagination}/>
                </div>
                : 
                <div className="txt center mt-20">
                    <span><strong>No Cart is Shopped.</strong></span>
                </div>
            }

            
                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                                <div style={{width : "100%", 
                                height: "100%",
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                alignItems: "center"}}>
                                    <h4 className="txt primary">{"Share Gift Card"}</h4>
                                </div>
                        } footer={
                            ""
                            } visible={shareGiftCard} onOk={handleOk} onCancel={handleCancel}>
                                <ShareGiftCardModal/>
                        </Modal>
                            
        </div>
        
    )
}

export default GiftCard
