import { Form, Input,Avatar, Button, Radio, Pagination } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import styles from '../../styles/components/GiftCards.module.scss'
import { buyGiftCard, getGiftCards, getGiftCardsByStoreId } from '../../services/gift-cards';
import moment from 'moment';
import { useRouter } from 'next/router';

const ShopCard = (props) => {

    const [giftCards, setGiftCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();
    let query = router.query;

    console.log("Query: ",query);

    useEffect(() =>{
        try{
            if((router.query.name !== null && router.query.name !== undefined)){
                getGiftCardsByStoreId(6).then(res =>{
                    if(res.status){
                        if(res.data){
                            console.log("Gift Card: ",res.data);
                            setGiftCards(res.data);
                        }
                    }else{
                        
                    }
                })
            }else{
                getGiftCards(currentPage).then(res =>{
                    if(res.status){
                        if(res.data){
                            console.log("Gift Card: ",res.data);
                            setGiftCards(res.data);
                        }
                    }else{

                    }
                })
            }
        }catch(error){
            console.log(error);
        }
    },[])

    const handelChangePagination = (event) =>{
        console.log("Event ShopCard: ",event);
        setCurrentPage(event);
    }

    const handleBuyCart = (cartId) =>{
        
        // console.log("CartId: ",cartId);
        try{
            buyGiftCard(cartId).then(res =>{
                // console.log("CartId: ",res);
                if(res.status){
                    router.push(`${process.env.base_url}giftcards/1`);
                    // router.push('/giftcards/1');
                }else{
                    console.log(res.status);
                }
            })
        }catch(error){

        }
    }

    return (
        <div>
            {giftCards.length > 0 ? 
            <div>
                <div className={styles['res-grid']}>
                {giftCards.map((obj) =>{
                    return(
                        <div className="gift-card" key={obj.id}>
                            <div className="gift-card-header">
                                <Avatar size={44} icon={<UserOutlined />} />
                                <div style={{display : "flex", justifyContent : "flex-start", flexDirection : "column"}}>
                                    <h6>{ obj.GiftCardName } <span style={{color : "var(--dark-neutral-3) !important"}}>{ "#KDH926LSK00P1" }</span></h6>
                                    <span className="primary-txt">{obj?.Store?.storeName}</span>
                                    <span style={{color : "var(--dark-neutral-2)"}}>
                                        {(obj.BusinessCategories !== null && obj.BusinessCategories !== undefined) ? obj.BusinessCategories.name : ''}    
                                        {/* Fitness Club */}
                                    <span className="material-icons" style={{fontSize : "10px", color : "var(--light-neutral-2)"}}>fiber_manual_record</span>
                                    {(obj.BusinessSubCategories !== null && obj.BusinessSubCategories !== undefined) ? obj.BusinessCategories.name : ''}
                                    {/* Sports Activity */}
                                    </span>
                                </div>
                            </div>

                            { obj.description ? 
                            <div className="gift-card-description">
                                <strong className="full-width">Description</strong>
                                <p>
                                    { (obj.description !== null && obj.description !== undefined) ? 
                                obj.description
                                :
                                <>
                                </>
                                }
                                </p>
                            </div>
                            : 
                            <>
                            </> 
                            }

                                                
                            <div className="grid-view grid-2 colgap-14 gift-card-pricing">

                            <div>
                                <strong>Price</strong>
                                <p>${ obj.price }</p>
                            </div>

                            <div>
                                <strong>Value</strong>
                                <p>${ obj.value }</p>
                            </div>
                            </div>

                            <div className="grid-view grid-2 colgap-14 gift-card-validity">
                                <div>
                                    <strong>Valid For</strong>
                                    <p>{ obj.validForDays }</p>
                                </div>
                                <div>
                                    <strong>Gift Card Availability</strong>
                                    <p>{ moment(obj.dateValidFrom).format(process.env.date_format)}{" - "}{ moment(obj.dateValidTo).format(process.env.date_format)}</p>
                                </div>
                            </div>
                            
                        
                            
                            <div className="gift-card-actions">
                                <Button className="primary" onClick={() => handleBuyCart(obj.id)}>Buy Now</Button>
                            </div>

                        </div>
                    )
                })}
                </div>
                <Pagination className="txt float pull right" defaultCurrent={1} total={giftCards.length} onChange={handelChangePagination}/>
            </div>
            : 
            <div className="txt center mt-20">
                <span><strong>No Cart To Shop</strong></span>
            </div>
            }
        </div>
    )
}
export default ShopCard;