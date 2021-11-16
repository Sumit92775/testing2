import { Tabs, Input, Select } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import {Form} from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import ResetPassword from '../Common/ResetPassword';
// import styles from '../styles/components/Add-Payout-Method-modal.module.scss';
import OutsideKsa from './outside-ksa';
import WithinKsa from './within-ksa';

const { TabPane } = Tabs;


const AddPayoutMethod = () =>{

    function callback(key) {
      console.log(key);
    }

    return(
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Within KSA" key="1">
                    <WithinKsa></WithinKsa>
                </TabPane>
                <TabPane tab="Outside KSA" key="2">
                    <OutsideKsa></OutsideKsa>
                </TabPane>
            </Tabs>
        </div>
    )
}
export default AddPayoutMethod;
