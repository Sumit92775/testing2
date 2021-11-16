import { Menu } from 'antd'
import Link from 'next/link';
const { SubMenu } = Menu;

const FooterMenus = () => {
    return (
        <div className="footer-menus">
            <div className="menu-group">
                <strong className="menu-group-title">Categories</strong>
                <Menu>
                    <Menu.Item key="beauty-shops">Beauty Shops</Menu.Item>
                    <Menu.Item key="clinics">Clinics</Menu.Item>
                    <Menu.Item key="driving-training">Driving Training</Menu.Item>
                    <Menu.Item key="restaurants">Restaurants</Menu.Item>
                    <Menu.Item key="beverages">Beverages</Menu.Item>
                    <Menu.Item key="bakery-and-desserts">Bakery and Desserts</Menu.Item>
                    <Menu.Item key="sports-clubs">Sports Clubs</Menu.Item>
                    <Menu.Item key="venue">Venue</Menu.Item>
                    <Menu.Item key="gift-shop">Gift Shop</Menu.Item>
                </Menu>
            </div>
            <div className="menu-group">
                <strong className="menu-group-title">Company</strong>
                <Menu>
                    <Menu.Item key="about-us"> 
                        <Link href="/aboutus" passHref={true}>
                            About Us
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="provider-subscription"><Link href="/sp-subscription-tier" passHref={true}>Provider Subscription</Link></Menu.Item>
                    <Menu.Item key="freelancer-subscription"><Link href="/freelancer-subscription-tier" passHref={true}>Freelancer Subscription</Link></Menu.Item>
                    <Menu.Item key="partnership-programs">Partnership Programs</Menu.Item>
                </Menu>
            </div>
            <div className="menu-group">
                <strong className="menu-group-title">Support</strong>
                <Menu>
                    <Menu.Item key="faq">
                        <Link href="/faq" passHref={true}>
                          FAQ
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="contact-us">
                        <Link href="/contact-us" passHref={true}>
                            Contact Us
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
            <div className="menu-group">
                <strong className="menu-group-title">Affiliated Websites</strong>
                <Menu>
                    <Menu.Item key="example">Example</Menu.Item>
                    <Menu.Item key="example-2">Example 2</Menu.Item>
                </Menu>
            </div>
            <div className="menu-group">
                <strong className="menu-group-title">Sign Up For Updates</strong>
            </div>
        </div>
    )
}

export default FooterMenus
