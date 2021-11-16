import { Divider, Menu } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../styles/components/Profile-Left.module.scss';
import { BellFilled, SafetyCertificateFilled, SettingFilled } from '@ant-design/icons';
import {UserOutlined} from '@ant-design/icons'
import cx from 'classnames';
import Image from 'next/image';
import { AddCircle } from '@material-ui/icons';

const ProfileLeft = () =>{

    const router = useRouter();
    const handleClick = (e : any) => router.push(e.key);

    const [image, setImage] = useState("/halais.jpg")

    const onImageChange = (event:any) => {

        console.log(event);
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e :any) => {
            setImage(e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }


    return(
        <div className={styles['main-container-left']}>
            <div className={styles['mclt']}>
                <div>
                    <Image layout="fill" src={image}></Image>
                    <input type="file" id="img" name="img" accept="image/*" hidden={true} onChange={onImageChange}/>
                    <label htmlFor="img">
                        <AddCircle className={styles['add-profile-pic']} fontSize={"large"}></AddCircle>
                    </label>
                </div>
            </div>
            
            <div className={styles['mclb']}>
{/* { cx(styles['icon'], "mr-8") } */}
                <div className={styles['mclb-2']}>
                    <div className={cx(styles['menu'],"mclb-2-setting-list-menus")}>
                        
                    <Menu mode="inline" defaultSelectedKeys={[router.pathname]}>
                        <Menu.Item key="/profile" onClick={handleClick} icon={<UserOutlined style={{ fontSize: '16px', color: 'var(--light-neutral-2)' }} />}><h6 className="txt weight400 fz-16">Profile</h6></Menu.Item>
                        {/* <Menu.Item key="/settings" onClick={handleClick} icon={<SettingFilled style={{ fontSize: '16px', color: 'var(--light-neutral-2)' }}/>}><h6 className="txt weight400 fz-16">Account Settings</h6></Menu.Item> */}
                        <Menu.Item key="/notifications" onClick={handleClick} icon={<BellFilled style={{ fontSize: '16px', color: 'var(--light-neutral-2)' }}/>}><h6 className="txt weight400 fz-16">Notification</h6></Menu.Item>
                        {/* <Menu.Item key="/kyc-application" onClick={handleClick} icon={<SafetyCertificateFilled style={{ fontSize: '16px', color: 'var(--light-neutral-2)' }}/>}><h6 className="txt weight400 fz-16">KYC</h6></Menu.Item> */}
                    </Menu>

                    </div>
                
                </div>

            </div>
        </div>
    )
}

export default ProfileLeft;