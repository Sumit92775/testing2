import React from 'react';
import styles from './GeneralDetails.module.scss';
import cx from 'classnames';

const Address = () => {
    return (
        <div className={ cx("card", styles["card"] ) }>
            <h5 className={ cx("card-title", styles["card-title"] ) }>Address</h5>
            <div className={ cx(styles["card-details"], styles["address-details"]) }>
                <div>
                    <strong>Building Number</strong>
                    <p>8228</p>
                </div>
                <div>
                    <strong>Unit Number</strong>
                    <p>King abdul aziz south road</p>
                </div>
                <div>
                    <strong>Street</strong>
                    <p>2145</p>
                </div>
                <div>
                    <strong>Disctrict/Square</strong>
                    <p>Riyadh</p>
                </div>
                <div>
                    <strong>City</strong>
                    <p>Yameni</p>
                </div>
                <div>
                    <strong>Postal/Zip Code</strong>
                    <p>2121</p>
                </div>
                <div>
                    <strong>Additional Number</strong>
                    <p>2312</p>
                </div>
                <div>
                    <strong>State/Region</strong>
                    <p>Saudi Arabia</p>
                </div>
                <div>
                    <strong>Country</strong>
                    <p>Saudi Arabia</p>
                </div>
            </div>
        </div>
    )
}

export default Address
