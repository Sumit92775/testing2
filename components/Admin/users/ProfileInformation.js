import React from 'react';
import { Avatar, Timeline, Rate } from 'antd';
import KYCInfo from '../kyc/KycInfo';


const ProfileInformation = () => {
    return (
        <>
            <div className="card compact">
                <h5 className="card-title">General Details</h5>
                <div className="card-details data-card">
                    <div className="center-content">
                        <div className="">
                            <Avatar className="profile-thumb-img" shape="square" size={120} />
                            <br />
                            <span className="inline-block mt-10 no-wrap"><Rate className="mr-10 fz-10 custom-color txt grey1" value={ 5 } /> ({ '5.0' })</span>
                        </div>
                    </div>
                    <div className="data-card" style={{ gridColumnStart: '2', gridColumnEnd: '-1' }}>
                        <div>
                            <strong>First Name</strong>
                            <p>Ehsaan</p>
                        </div>
                        <div>
                            <strong>Last Name</strong>
                            <p>H</p>
                        </div>
                        <div>
                            <strong>Gender</strong>
                            <p>Male</p>
                        </div>
                        <div>
                            <strong>Date of Birth</strong>
                            <p>Oct 12, 1990 </p>
                        </div>
                        <div>
                            <strong>Username</strong>
                            <p>Ehsaan90</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card compact mt-40">
                <h5 className="card-title">Contact Details</h5>
                <div className="card-details data-card">
                    <div>
                        <strong>Building Number</strong>
                        <p>8228</p>
                    </div>
                    <div>
                        <strong>Building Number / Address</strong>
                        <p>2121</p>
                    </div>
                    <div>
                        <strong>Street</strong>
                        <p>King Abdul Aziz Road</p>
                    </div>
                    <div>
                        <strong>City/Square</strong>
                        <p>Riyadh</p>
                    </div>
                    <div>
                        <strong>Postal/Zip Code</strong>
                        <p>11231</p>
                    </div>
                    <div>
                        <strong>Additional Code</strong>
                        <p>11231</p>
                    </div>
                    <div>
                        <strong>State/Region</strong>
                        <p>Riyadh</p>
                    </div>
                    <div>
                        <strong>Country</strong>
                        <p>Arabia</p>
                    </div>
                    <div>
                        <strong>Email</strong>
                        <p>Ehsaan90@gmail.com</p>
                    </div>
                    <div>
                        <strong>Mobile</strong>
                        <p>+966-505-5515-86</p>
                    </div>
                </div>
            </div>

            <div className="card compact mt-40">
                <h5 className="card-title">Usage Data</h5>
                <div className="card-details data-card">
                    <div>
                        <strong>Date Joined</strong>
                        <p>15 Nov, 2020</p>
                    </div>
                    <div>
                        <strong>Status</strong>
                        <p>Active</p>
                    </div>
                    <div>
                        <strong>Last Booking</strong>
                        <p>15 Nov, 2020</p>
                    </div>
                    <div>
                        <strong>Total Bookings</strong>
                        <p>05</p>
                    </div>
                    <div>
                        <strong>Total Spending</strong>
                        <p>$50.00</p>
                    </div>
                    <div>
                        <strong>No Show Count</strong>
                        <p className="txt danger">02</p>
                    </div>
                    <div>
                        <strong>Penalty</strong>
                        <p className="txt danger">01</p>
                    </div>
                </div>
            </div>

            <div className="card compact mt-40">
                <h5 className="card-title">Saved Payment Info</h5>
                <div className="card-details">
                    <div className="payment-cards-grid pt-25">
                        <div className="card compact">
                            <h5 className="card-title pr-15">Saved Card <span className="material-icons pull right fz-38 mtn-4 mbn-4 txt primary">check_circle</span></h5>
                            <div className="card-details">
                                <div>
                                    <p className="tag">Cardholder Name</p>
                                    <strong>Ehsaan</strong>
                                </div>
                                <div>
                                    <p className="tag">Card Type</p>
                                    <strong>Visa - Debit Card</strong>
                                </div>
                                <div>
                                    <p className="tag">Card Number </p>
                                    <strong>xxxx   xxxx   xxxx  2214</strong>
                                </div>
                                <div>
                                    <p className="tag">Valid Thru</p>
                                    <strong>12/25</strong>
                                </div>
                            </div>
                        </div>
                        <div className="card compact">
                            <h5 className="card-title">Saved Card</h5>
                            <div className="card-details">
                                <div>
                                    <p className="tag">Cardholder Name</p>
                                    <strong>Ehsaan</strong>
                                </div>
                                <div>
                                    <p className="tag">Card Type</p>
                                    <strong>Visa - Debit Card</strong>
                                </div>
                                <div>
                                    <p className="tag">Card Number </p>
                                    <strong>xxxx   xxxx   xxxx  2214</strong>
                                </div>
                                <div>
                                    <p className="tag">Valid Thru</p>
                                    <strong>12/25</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card compact mt-40">
                <h5 className="card-title">KYC Info</h5>
                <div className="card-details pt-25">
                    <KYCInfo />
                </div>
            </div>
        </>
    )
}

export default ProfileInformation
