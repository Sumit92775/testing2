import React from 'react';
import styles from './GeneralDetails.module.scss';
import cx from 'classnames';
import { useRouter } from 'next/router';

const BranchDetails = () => {
    const router = useRouter(),
    { slug } = router.query,
    branch_id = slug && slug[2] ? slug[2] : null,
    
    goToAllBranches = () => {
        if(slug) {
            router.push(`${process.env.base_url}service-providers/${slug[0]}/${slug[1]}`);
        }
    };

    return (
        <>
            <div className="mtn-16 mb-26">
                <a onClick={goToAllBranches}>
                    <span className="material-icons pull-left">arrow_back_ios</span>
                    <span className="tag pull-left">All Branches</span>
                </a>
            </div>
            <div className={ cx("card", styles["card"] ) }>
                <h5 className={ cx("card-title", styles["card-title"] ) }>Halais 2 <span className="fz-16 txt weight300">Branch</span></h5>
                <div className={ cx(styles["card-details"], styles["address-details"]) }>
                    <div>
                        <strong>Store Email</strong>
                        <p>Halais2@gmail.com</p>
                    </div>
                    <div>
                        <strong>Store Mobile Number</strong>
                        <p>+966-585-5592-84</p>
                    </div>
                    <div>
                        <strong>Landline Phone Number</strong>
                        <p>+966-585-5592-24 </p>
                    </div>
                    <div>
                        <strong>Unit Number</strong>
                        <p>King abdul aziz south road</p>
                    </div>
                    <div>
                        <strong>Street</strong>
                        <p>2121</p>
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
                        <p>2100</p>
                    </div>
                    <div>
                        <strong>Additional Number</strong>
                        <p>2314</p>
                    </div>
                    <div>
                        <strong>State/Region</strong>
                        <p>Najd</p>
                    </div>
                    <div>
                        <strong>Country</strong>
                        <p>Arabia</p>
                    </div>
                    <div>
                        <strong>Store Manager Name</strong>
                        <p>Henry</p>
                    </div>
                    <div>
                        <strong>Manager Mobile Number</strong>
                        <p>+966-585-5592-55</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BranchDetails
