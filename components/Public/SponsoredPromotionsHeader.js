// import styles from  './SponsoredPromotionsHeader.module.scss'
// import logo from './../../public/full-logo.svg'

import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SponsoredPromotionsHeader.module.scss';
import { SearchOutlined } from '@ant-design/icons';


const SponsoredPromotionsHeader = () =>{
    return(
        <div className={styles.head}>
            <div className="relative">
                <Link className={styles.logo} href="/" passHref={true}>
                    {/* <span>test</span> */}
                    <Image layout="fill" src="/full-logo.svg" alt="logo" />
                </Link>
            </div>
            <div className="header-search">
                <SearchOutlined></SearchOutlined>
                <input placeholder="search"></input>
            </div>
            <div style={{columnGap : "33.75px"}}>
                    <div className="language" style={{display : "flex", justifyContent : "space-evenly", alignItems : "center", columnGap : "0px"}}>
                        <span className="material-icons languageicon" style={{color : "var(--light-neutral-1)"}}>language</span>
                        <span className="language_text"><u>English</u></span>
                    </div>
                        {/* <span className="primary-txt mr-22">Provider Subscription Tiers</span> */}
                        <span className="material-icons" style={{color : "var(--light-neutral-1)"}}>notifications</span>
                        <span className="material-icons" style={{color : "var(--light-neutral-1)"}}>settings</span>

                        <div className="lastitems" style={{display : "flex", justifyContent : "space-evenly", alignItems : "center"}}>
                            <Image width="26.11" height="26.11" src="https://st3.depositphotos.com/3867453/13387/v/600/depositphotos_133874164-stock-illustration-letter-h-logo-icon-design.jpg" style={{borderRadius : "30px", backgroundColor : "var(--light-neutral-3)"}} alt="logo" />

                            <span>Halais</span>
                            <span className="material-icons" style={{color : "var(--light-neutral-1)"}}>arrow_drop_down</span>
                        </div>
                    </div>
       
        </div>
   )
}



export default SponsoredPromotionsHeader;