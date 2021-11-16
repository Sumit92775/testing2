import React,{useEffect, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import styles from '../../styles/components/Reset-Password.module.scss'

import {Button, Divider, Input, message} from 'antd';
import { changePassword } from '../../services/auth';

const ResetPassword = (props) => {

    
      const [oldPassword, setOldPassword] = useState("")
      const [newPassword, setNewPassword] = useState("");
      const [retypePassword, setRetypePassword] = useState("");
      const [errorMsg , setErrorMsg] = useState("");


      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const checkPassword = () =>{
        console.log("clicked");
        
        console.log("NewPassword: "+newPassword+" oldPassword: "+oldPassword);
  
        if(newPassword.length < 8 || retypePassword.length < 8 || (retypePassword !== newPassword)){
            message.config({
                duration: 5,
                top: 100,
            })
            message.error("Invalid Password");
            // setOldPassword("");
            // setNewPassword("");
            // setRetypePassword("");
        }else{
          try{
            changePassword({
                oldPassword: oldPassword,
                newPassword: newPassword
            }).then(res =>{
              console.log("Password Changed !!");
                  setOldPassword("");
                  setNewPassword("");
                  setRetypePassword("");
                  message.success("Password Changes");
                  props.handleCancel();
            })
          }catch(error){
            message.error(error)
          }
        }
        }
  
      // useEffect(() =>{
      //   setOldPassword("")
      //   setNewPassword("");
      //   setRetypePassword("")
      // })

      // const [oldPassword, setOldPassword] = useState("")
      // const [newPassword, setNewPassword] = useState("");
      // const [retypePassword, setRetypePassword] = useState("");
      // const [errorMsg , setErrorMsg] = useState("");


      // update

    return ( 
        <div className={styles['container']}>

            <h6 style={{color : "var(--dark-neutral-4)"}}>Old Password</h6>
            <Input.Password defaultValue={''} className={styles['password-input']} value={oldPassword} onChange={(event) => {setOldPassword(event.target.value);}}></Input.Password>

            <h6 style={{color : "var(--dark-neutral-4)"}}>New Password</h6>
            <Input.Password className={styles['password-input']} value={newPassword} onChange={(event) => {setNewPassword(event.target.value);}}></Input.Password>

            <h6 style={{color : "var(--dark-neutral-4)"}}>Re-type Password</h6>
            <Input.Password className={styles['password-input']} value={retypePassword} onChange={(event) => {setRetypePassword(event.target.value);}}></Input.Password>

            {/* <Divider className="mb-10" /> */}
            <div className="pull right mt-10">
              <Button className="mr-20" onClick={() =>props.handleCancel()}>Cancel</Button> 
              <Button className="ant-btn primary" onClick={() =>checkPassword()}>Save Chages</Button>
          </div>
        </div>
     );
}

 
export default ResetPassword;
