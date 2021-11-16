import { Button, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import ShoppingItem from './shopping-item';

const ShoppingCard = ({modal, cartList, resetUI, finalList, updateCardCount, updateNotificationCount }) =>{

    const [productDetailDataObj, setProductDetailDataObj ] = useState([]);

    useEffect(() =>{
        setProductDetailDataObj(cartList); 
    },[cartList]);

    const setUpdatedService = (itemId, qty) =>{
        finalList(itemId, qty);
        resetUI();
        updateCardCount();
        updateNotificationCount();
    }

    // props?.setCartItemList

    return(
        <div>
            {/* modal={props?.modal} resetUI={props?.resetUI} itemObject={obj} */}
            <div className="card card2 pt-0 pl-0 mb-37">
                <h4 className="ml-32 mt-20">Shopping Cart</h4>
                {productDetailDataObj.length >= 1 ? 
                <div>
                    {productDetailDataObj.map((obj) =>{
                        return(
                            <div key={`${obj.id}`} style={{position: 'relative'}}>
                                <ShoppingItem modal={modal} resetUI={resetUI} itemObject={obj} setUpdatedService={setUpdatedService}></ShoppingItem>
                                {obj.id === cartList.length ? 
                                <>
                                </>
                                :
                                <Divider className="mb-0"></Divider>
                                }
                            </div>
                        )
                    })}
                </div>
                : 
                <div style={{textAlign: "center"}}>
                    <span><strong>Cart is Empty.</strong></span>
                </div>
                }
            </div>
            
            <Button style={{height : "60px"}} className="full-width mr-0 center-content"><span className="material-icons mr-5">add_circle_outline</span>Add Another Service</Button>
        </div>
    )
}

export default ShoppingCard;