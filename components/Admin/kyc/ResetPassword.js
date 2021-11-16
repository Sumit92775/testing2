import React,{useEffect, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import styles from './../../../styles/components/Reset-Password.module.scss'

import {Input} from 'antd';

const ResetPassword = (props) => {

    
      const [oldPassword, setOldPassword] = useState("")
      const [newPassword, setNewPassword] = useState("");
      const [retypePassword, setRetypePassword] = useState("");
      const [errorMsg , setErrorMsg] = useState("");


      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      // update

    return ( 
        <div className={styles['container']}>

            <h6 style={{color : "var(--dark-neutral-4)"}}>Old Password</h6>
            <Input.Password className={styles['password-input']} value={oldPassword} onChange={(event) => props?.old(event.target.value)}></Input.Password>

            <h6 style={{color : "var(--dark-neutral-4)"}}>New Password</h6>
            <Input.Password className={styles['password-input']} value={newPassword} onChange={(event) => props?.newPassword(event.target.value)}></Input.Password>

            <h6 style={{color : "var(--dark-neutral-4)"}}>Re-type Password</h6>
            <Input.Password className={styles['password-input']} value={retypePassword} onChange={(event) => props?.retypePassword(event.target.value)}></Input.Password>

        </div>
     );
}

 
export default ResetPassword;
