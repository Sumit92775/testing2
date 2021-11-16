import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, InputNumber } from 'antd';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import styles from '../../styles/components/ShoppingCard.module.scss'
import { deleteFromCart, editCartItem, getItemInCart } from '../../services/items';


const ShoppingItem = (props : any) =>{

    useEffect(() =>{
        console.log("Props Cart: ",props?.itemObject);
    },[]);

    const handleDelete = (itemId: any) =>{
        
        try{
            deleteFromCart(itemId).then(res =>{
                if(res.status){
                    console.log("Response: ",res);
                    props?.resetUI();
                }else{
                    props?.resetUI();
                }

            }).catch(error =>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    };

    const handelEditQuantity = (qty: any, index: any) =>{
        // console.log("Quantity Edited: ",qty);
        // console.log("Key Value Array: ",keyValueArray);
        try{

            getItemInCart().then(res =>{
                if(res.status){
                    let cartItemArray = res.data;

                    for (const key in cartItemArray) {
                        if(cartItemArray[key].id === index){
                           
                            let keyValueObjectsArray = cartItemArray[key];
                            let keyArray = [];
                            let valueArray = [];

                            for(let i = 0 ; i < keyValueObjectsArray.CartProperties.length ; i++){
                                keyArray.push(keyValueObjectsArray.CartProperties[i].key)
                                valueArray.push(keyValueObjectsArray.CartProperties[i].value)
                            }
                            // let oldServiceArray = props.serviceArray;
                            // console.log("KeyArray :",keyArray);
                            // console.log("valueArray :",valueArray);
                            

                            editCartItem({
                                qty: qty,
                                id: index,
                                keys: keyArray,
                                value: valueArray
                            }).then(res =>{
                                props?.setUpdatedService(index, qty)
                                console.log("Response Response: ",res);
                                let oldServiceArray = props.serviceArray;
                                // props.resetUI;
                                // props.setUpdatedService(index, qty)
                                
                            })
                        }
                    }

                    // ------------------------------------------

                }else{
                    console.log(res.status);
                }
            }).catch(error =>{
                console.log(error);
            })

          
        }catch(error){
            console.log(error);
            
        }
    };

    return(
        <div className={styles['container']}>
            <div className={styles['left-container']}>
                <Checkbox className="mr-10"><Avatar className="ml-20" size={70}></Avatar></Checkbox>
            </div>
            <div className={styles['right-container']}>
                <div className={styles['sp_container']}>
                    <h6>{props?.itemObject?.Variation?.Service.primaryServiceName}</h6>
                    <h5 className="fz-23">${props?.itemObject?.Variation?.price}</h5>
                </div>
                <span className={styles['align']}>by <strong>{props?.itemObject?.Variation?.Service?.Store?.storeName}</strong></span>
                <div className={styles['q-container']}>
                    
                <InputNumber min={1} max={10} contentEditable={false} defaultValue={props?.itemObject?.qty} onChange={(event) => {
                    handelEditQuantity(event, props?.itemObject?.id);}} />
                </div>
                <div className={styles['sss-container']}>
                    {props?.itemObject?.CartProperties.map((obj: any) =>{
                       return(
                           <span key={obj}>
                               <span>{obj.key}: <strong>{obj.value}</strong></span>
                           </span>
                       ) 
                    })}
                    <DeleteFilled style={{fontSize : "20px", color : "var(--red-1)", position: 'absolute', right: "0px"}} onClick={() =>handleDelete(props?.itemObject?.id)}/>
                </div>
                <span className="mt-3">Date &amp; Time: <strong>{props?.itemObject?.addedToCartAt}</strong></span>
                <span className="mt-3 mb-0" onClick={()=>props.modal("Edit Preferences")}><EditFilled></EditFilled>Edit  Preferences</span>
            </div>
        </div>
    )
}
export default ShoppingItem;