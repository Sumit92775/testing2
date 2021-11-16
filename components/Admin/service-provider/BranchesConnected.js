import React from 'react';
import { useRouter } from 'next/router';
import BranchDetails from './BranchDetails';
import styles from './GeneralDetails.module.scss';
import cx from 'classnames';

const BranchesConnected = () => {
    const router = useRouter(),
    { slug } = router.query;
    let branch_id = slug && slug[2] ? slug[2] : null;
    
    if(branch_id) {
        return <BranchDetails />
    }

    const branches = [],
    onPreview = (branch) => {
        console.log(branch)
        router.push(`${process.env.base_url}service-providers/${slug[0]}/${slug[1]}/${branch.id}`);
    }

    for(let i = 1; i <= 5; i++) {
        branches.push(
            {
                id: i,
                name: `Halais ${i}`,
                store_id: `@halais12${i}`,
                store_email: `Halais${i}@gmail.com`,
                store_mobile_number: '+966-585-5592-84',
                store_manager: 'Henry',
                store_manager_mobile_number: '+966-585-5592-24'
            }
        )
    }

    return (
        <>
            <h5 className="mb-28">Branches For Halais</h5>
            <div className={ styles["branch-cards"] }>
                { branches.map(branch => (
                    <div key={branch} className={ cx("card", styles["card"]) }>
                        <h5 className={ cx("card-title", styles["card-title"]) }>{ branch.name } <span className="fz-14 txt weight300 light1">{ branch.store_id }</span></h5>
                        <div className={ cx(styles["card-details"], styles["branch-meta"]) }>
                            <div>
                                <strong>Store Email</strong>
                                <p>{ branch.store_email}</p>
                            </div>
                            <div>
                                <strong>Store Mobile Number</strong>
                                <p>{ branch.store_mobile_number }</p>
                            </div>
                            <div>
                                <strong>Store Manager</strong>
                                <p>{ branch.store_manager }</p>
                            </div>
                            <div>
                                <strong>Manager Mobile Number</strong>
                                <p>{ branch.store_manager_mobile_number }</p>
                            </div>
                        </div>
                        <div className={ cx("card-actions", styles["card-actions"]) }>
                            <a className="txt primary" onClick={ () => onPreview(branch) }>
                                <span className="material-icons pull left bordered mr-8">remove_red_eye</span>
                                <span className="pull left lh-20">Preview</span>
                            </a>
                        </div>
                    </div>
                )) }
            </div>
        </ >
    )
}

export default BranchesConnected
