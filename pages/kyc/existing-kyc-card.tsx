import { Button, Divider } from 'antd';
import React from 'react';

const ExistingKycCard = (props : any) =>{

    console.log(props);
    
    const Present = (present : any) =>{
        props.ExistingKyc(present);
    }

    return(
        <div className="card card2 p-0 mt-30">
            <h5 className="pl-20 pt-20">Current Kyc Details</h5>
            <Divider></Divider>
            <Button className="txt primary full-width" onClick={()=>Present(false)}>Add New KYC</Button>
        </div>
    )

}

export default ExistingKycCard;