import React from 'react';
import Reviews from '../../Common/Reviews';
import ProfileInformation from './ProfileInformation';
import TransactionHistory from '../service-provider/TransactionHistory';
import { useRouter } from 'next/router';
import { Tabs } from 'antd';

const ProfilePreview = () => {
    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[2] ? slug[2] : 'profile-information',
    
    onTabClick = (key, event) => {
        if(slug) {
            router.push(`${process.env.base_url}users/${slug[0]}/${slug[1]}/${key}`)
        }
    };
    console.log('new', selected_tab)


    return (
        <div>
             <h3 className="mb-24">Users</h3>
                <Tabs activeKey={selected_tab} onTabClick={ onTabClick }>
                    <Tabs.TabPane tab="Profile Information" key="profile-information">
                        <ProfileInformation />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Transaction History" key="transaction-history">
                        <TransactionHistory showTransactionTypeFilter={false}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Reviews" key="Reviews">
                        <Reviews />
                    </Tabs.TabPane>
                </Tabs>
        </div>
    )
}

export default ProfilePreview
