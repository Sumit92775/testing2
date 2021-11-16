import { Button } from 'antd';
import React from 'react';
import OrderFrom from './product-details/order-from';
import Link from 'next/link'

const testing = () =>{
    return(
        <div>
            <OrderFrom data={{
                type: 'sale',
                value: '10'
            }}></OrderFrom>
            {/* <Link href="/signup" passHref={true}>
                <span>Click me</span>
            </Link> */}
            {/* <Button>Click Me</Button> */}
        </div>
    )
}

export default testing;
