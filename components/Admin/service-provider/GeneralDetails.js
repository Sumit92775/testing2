import React from 'react';
import styles from './GeneralDetails.module.scss';
import { Rate, Avatar } from 'antd';
import cx from 'classnames';

const GeneralDetails = () => {
    return (
        <div className={ cx("card", styles['card'] ) }>
            <h5 className={ cx("card-title", styles["card-title"] ) }>General Details</h5>
            <div className={ styles['card-details'] }>
                <div className={ styles['user-info'] }>
                    <div>
                        <Avatar className="profile-thumb-img" shape="square" size={120} />
                        <div className={ styles['ratings'] }>
                            <span className="inline-block mt-10 mb-20 no-wrap"><Rate className="mr-10 fz-10 custom-color txt grey1" value={ 5 } /> ({ '5.0' })</span>
                        </div>
                    </div>
                    <div>
                        <p className="mt-13 txt primary">View Public Profile <span className="material-icons fz-14">north_east</span></p>
                        <p className="mt-12">Joined <strong>02 Nov, 2019</strong></p>
                    </div>
                </div>
                <div className={ styles['user-details'] }>
                    <div>
                        <strong>Store Name</strong>
                        <p>Halais</p>
                    </div>
                    <div>
                        <strong>Username</strong>
                        <p>Halais123</p>
                    </div>
                    <div>
                        <strong>Email</strong>
                        <p>Halais123@gmail.com</p>
                    </div>
                    <div>
                        <strong>Company registration number </strong>
                        <p>124587565778</p>
                    </div>
                    <div>
                        <strong>CRN (Expiry)</strong>
                        <p>21 Nov, 2021</p>
                    </div>
                    <div>
                        <strong>Store Mobile Number</strong>
                        <p>+966-505-5515-86</p>
                    </div>
                    <div>
                        <strong>Store Landline Number</strong>
                        <p>+966-505-5515-86</p>
                    </div>
                    <div>
                        <strong>Store Hours</strong>
                        <p>08:010am - 10:00 pm (Mon-Sun)</p>
                    </div>
                    <div>
                        <strong>Social Media Links</strong>
                        <p></p>
                    </div>
                    <div>
                        <strong>Store Manager Name</strong>
                        <p>Jonathan</p>
                    </div>
                    <div>
                        <strong>Store Manager Mobile</strong>
                        <p>+966-505-5515-87</p>
                    </div>
                    <div>
                        <strong>About Us</strong>
                        <p>Halis is a traditional restaurant.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralDetails
