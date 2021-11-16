import { red } from '@material-ui/core/colors';
import { Button, Divider } from 'antd';
import React from 'react';
import styles from '../../styles/components/Subscription-Tier-Modal.module.scss';

const SubscriptionTiersModal = () =>{
    return(
        <div className={styles['main-modal-container']}>
            <div className={styles['mmc-l']}>
                <div className={styles['active-plan-features-container']}>
                    <h5 className="mt-20 auto-width">Basic</h5>
                    <div className={styles['active-plan-price']}>
                        <div className={styles['app-text']}>
                            <h3>$</h3>
                            <h1 className="fz-70">60</h1>
                        </div>
                    </div>
                    <h5 className="fz-40 auto-width" style={{borderRadius : "0px"}}>Month</h5>

                    <div className={styles['act-pln-mc']}>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Upcoming booking visibility</h6>
                            <strong> 7 Days</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Past Booking visibility</h6>
                            <strong> 7 Days</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Branches</h6>
                            <strong> Upto 5</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Category</h6>
                            <strong> 2</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Sub-Category</h6>
                            <strong> 2</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Category</h6>
                            <strong> 1</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Menu</h6>
                            <strong> 3 Titles</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Staff Management</h6>
                            <strong> No</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Gift Card Creation</h6>
                            <strong> No</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Reports</h6>
                            <strong> 7 Days</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Staff Management</h6>
                            <strong> No</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">SP Policy</h6>
                            <strong> Regular Season</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content']}>
                            <h6 className="fz-13">Other related functionality</h6>
                            <strong> No</strong>
                        </div>

                    </div>

                    <Button className="primary mt-20">Upgrade Plan</Button>
                </div>
           
            </div>
            <div className={styles['mmc-r']}>
                <div className={styles['active-plan-features-container-r']}>
                    <h5 className="mt-20 auto-width">Basic</h5>
                    <div className={styles['active-plan-price-r']}>
                        <div className={styles['app-text-r']}>
                            <h3></h3>
                            <h1 className="fz-70"></h1>
                        </div>
                    </div>
                    <h5 className="fz-40 auto-width" style={{borderRadius : "0px"}}>Plan Usage</h5>

                    <div className={styles['act-pln-mc-r']}>
                    <div className={styles['act-pln-mc-content-r']}>
                            <h6 className="fz-13">Remaining Bookings</h6>
                            <strong> 30</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content-r']}>
                            <h6 className="fz-13">Validity Remaining</h6>
                            <strong> 7 Days</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content-r']}>
                            <h6 className="fz-13">Branches</h6>
                            <strong> Upto 5</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content-r']}>
                            <h6 className="fz-13">Category</h6>
                            <strong> 2</strong>
                        </div>
                        <Divider className="mt-5 mb-5"></Divider>
                        <div className={styles['act-pln-mc-content-r']}>
                            <h6 className="fz-13">Next Billing Date</h6>
                            <strong style={{color : "red"}}> 15 March 2022</strong>
                        </div>
                    </div>

                    {/* <Button className="primary mt-20">Upgrade Plan</Button> */}
                </div>
           
            </div>
        </div>
    )
}

export default SubscriptionTiersModal;