import React from 'react';
import styles from './GeneralDetails.module.scss';
import cx from 'classnames';
import { Tabs } from 'antd';

const Categories = () => {
    const categories = [
        {
            name: 'Restaurant',
            services: [
                {
                    name: 'Fine Dining',
                    packages: [
                        {
                            name: 'Appetizer',
                            services: [
                                'Arabic Coffee',
                                'Barbeque',
                                'Burger'
                            ]
                        },
                        {
                            name: 'Entrees',
                            services: [
                                'Espresso'
                            ]
                        }
                    ]
                },
                {
                    name: 'Casual Dining',
                    packages: [
                        {
                            name: 'Entrees',
                            services: [
                                'Espresso'
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    selected_tab = categories[0].name,
    
    onTabClick = (key, event) => {
        // router.push(`${process.env.base_url}service-providers/${slug ? slug[0] : '0'}/${key}`)
    };

    return (
        <div className={ cx("card pb-0", styles["card"] ) }>
            <h5 className={ cx("card-title", styles["card-title"] ) }>Service Categories</h5>
            <div className={ cx(styles["card-details"], styles['categories']) }>
                <Tabs activeKey={ selected_tab } onTabClick={ onTabClick }>
                    { categories.map(category => (
                        <Tabs.TabPane tab={ category.name } key={ category.name }>
                            {/* <Customers /> */}
                            { category.services.map(service => (
                                <div key={ service.name } className={ styles['service'] }>
                                    <h6 className="mb-20">{ service.name }</h6>
                                    <div className={ styles['packages-wrap'] }>
                                        { service.packages.map(service_package => (
                                            <div key={ service_package.name } className={ styles['package'] }>
                                                <h6 className="regular">{ service_package.name }</h6>
                                                <ul>
                                                    { service_package.services.map(package_service => (
                                                        <li className="ti-5" key={ package_service }>{ package_service }</li>
                                                    )) }
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )) }
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>
        </div>
    )
}

export default Categories
