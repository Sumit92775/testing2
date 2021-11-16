import { Button, Image } from 'antd';
import React from 'react';

const OrderFrom = (props: any) =>{

    return(
        <div className="card card2 pl-0 pr-0 pt-14 mb-22">
            <div className="of_container flex">
                <div className="of-left-container pl-14">
                    <h5>Order From</h5>
                    <h5 className="mt-4">{props?.userDetails?.username}</h5>
                    <span>Jeddah Nazlah Dist</span>
                </div>
                <div className="of-right-container center-content mr-5">
                    <Button className="center-content"><span className="material-icons mr-10">remove_shopping_cart</span>Clear Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default OrderFrom;