import React, { useState } from 'react';
import styles from './../../../styles/components/DeleteKyc.module.scss'
import { Checkbox } from 'antd';
// import { CheckBox } from '@material-ui/icons';

const DeleteKyc = () => {

    // const [inputReasonId, setInputReasonId] = useState(null);
    const [reasonArray, setReasonArray] = useState([]);
    const [completeReason, setCompleteReason] = useState("");
    const [checkBoxClicked, setCheckBoxClicked] = useState(false);
    
    const [checkBoxClass, setCheckBoxClass] = useState();
    let reasons = [ {reason : "Face is not clear", id : 0},{reason : "ID is not clear", id : 1},  {reason : "Secret Code is Not Visible", id : 2}];
    


    const handleInputReason = (id) =>{
        // setCheckBoxClicked(false);
        setCheckBoxClass("ant-checkbox");
        setCompleteReason(reasons[id].reason);
    }

    const allReasonList = (event) =>{

        console.log(event.target.checked);
        if(event.target.checked == false){
            setCheckBoxClass("ant-checkbox");
            setCompleteReason("");
            return;
        }

        setCheckBoxClicked(true);
        setCheckBoxClass("ant-checkbox ant-checkbox-clicked");
        let allReasons = "";
        for(let i = 0 ; i < reasons.length ; i++){
            if(i !== reasons.length -1){

                allReasons+= reasons[i].reason+", ";
            }else{
                allReasons+= reasons[i].reason;
            }
        }

        console.log(allReasons);
        setCompleteReason(allReasons);
    }


     return ( 
        <div className={styles['container']}>
            {/* <div className={styles['feedback-container']}> */}
                <h6 style={{color : "var(--dark-neutral-4)"}}>Your Feedback</h6>
                <div className={styles['input-container']}>
                    <input placeholder="Mention feedback here..." value={completeReason}></input>
                </div>
                <h6 style={{color : "var(--dark-neutral-4)"}}>Quick Replies</h6>
                <div className={styles['reasons-list']}>

                    {reasons.map((obj) => {
                        return <button key={obj.id} onClick={()=>
                           handleInputReason(obj.id)}><span>{obj.reason}</span></button>
                    })}

                </div>
                <div className={styles['select-all-reason']}>
                    <Checkbox className={checkBoxClass} onChange={(event)=> allReasonList(event)}>Select all the above reasons</Checkbox>
                </div>
             {/* </div> */}
        </div>
     );


    }

 
export default DeleteKyc;
