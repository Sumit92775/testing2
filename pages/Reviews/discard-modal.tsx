import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';

const DiscardModal = (props:any) =>{
    // console.log(props.modalContent);
  
    return(
        <div className="container flex">
            <div className="left-container" style={{width : "fit-content"}}>
                <Avatar size={60}></Avatar>
            </div>
            <div className="flex vertical right-container ml-15" style={{display : "flex", flexDirection : "column"}}>
                <h5>{props?.modalContent?.username}</h5>
                <span>{props?.modalContent?.service}</span>
                <span>{props?.modalContent?.time}</span>
                <span className="mt-10">{props?.modalContent?.comment}</span>
            </div>
        </div>
    )
}

export default DiscardModal;