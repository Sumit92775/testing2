import { Avatar, Pagination, Switch, message } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio } from 'antd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from 'react';
import styles from '../../styles/components/GiftCards.module.scss'
import moment from 'moment';
import { getMyExpiredGiftCards, getMyGiftCards } from '../../services/gift-cards';

const ExpiredGiftCards = (props) => {
    // let onSwitch = event => props.card.visibleToStore = event;
    
    const [giftCards, setGiftCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [giftCardAvailable, setGiftCardAvailable] = useState(false);


    useEffect(() =>{
        try{
            getMyExpiredGiftCards(currentPage).then(res =>{
                if(res.status){
                    if(res.data){
                        console.log("Gift Card Expired: ",res.data);
                        setGiftCards(res.data);
                        setGiftCardAvailable(true);
                    }
                }else{
                    // message.error(res);
                    setGiftCards([]);
                    setGiftCardAvailable(false);
                }
            })
        }catch(error){
            console.log(error);
            setGiftCardAvailable(false);
        }
    },[]);
    
    const handelChangePagination = (event) =>{
        console.log("Event ShopCard: ",event);
        setCurrentPage(event);
    }


    return (
        <div>
            {giftCardAvailable == true ? 
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
                                        <div className="grid-view grid-4 colgap-14 gift-card-pricing">
                                            
                                            <div>
                                                <strong>Expiry</strong>
                                                <p className="primary-txt">{ moment(obj.expiryDate).format(process.env.date_format) }</p>
                                            </div>
        
                                            <div>
                                                <strong>Price</strong>
                                                <p>${ obj.GiftCard.price }</p>
                                            </div>
                                            <div>
                                                <strong>Value Utilized</strong>
                                                <p>${ obj.GiftCard.value - obj.remainingValue }</p>
                                            </div>
                                            <div>
                                                <strong>Store Name</strong>
                                                <p className="primary-txt">{ obj.GiftCard.Store.storeName }</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                    <Pagination className="txt float pull right" defaultCurrent={1} total={giftCards.length} onChange={handelChangePagination}/>
                </div>
                    : 
                <div className="txt center mt-20">
                    <span><strong>No Expired Gift Cards</strong></span>
                </div>
            
            }
        </div>
      
    )
}

export default ExpiredGiftCards;
