import LeftSidebar from '../SidebarMenu'
import Header from '../User/Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from '../User/Layout.module.scss';

const Layout = ({children}) => {
    const menuItems = [
        {
            path: '/admin/dashboard',
            label: 'Dashboard',
            icon: 'dashboard'
        },
        {
            path: '/admin/service-provider',
            label: 'Service Provider',
            icon: 'store_mall_directory'
        },
        {
            path: '/admin/customers',
            label: 'Customers',
            icon: 'people'
        },
        {
            path: '/admin/gift-cards',
            label: 'Booking Data',
            icon: 'shopping_basket'
        },
        {
            path: '/admin/revenue',
            label: 'Revenue',
            icon: 'monetization_on'
        },
        {
            path: '/admin/manage-reported-s-ps',
            label: 'Manage Reported SPs',
            icon: 'store_mall_directory'
        },
        {
            path: '/admin/reports',
            label: 'Reports',
            icon: 'pie_chart'
        },
        {
            path: '/admin/requests',
            label: 'Requests',
            icon: 'notifications_paused'
        },
        {
            path: '/admin/policies',
            label: 'Policies',
            icon: 'description'
        },
        {
            path: '/admin/subscription-tiers',
            label: 'Subscription Tiers',
            icon: 'table_chart'
        },
        {
            path: '/admin/sponsored-results',
            label: 'Sponsored Results',
            icon: ' '
        }
    ]

    return (
        <div className={styles['main-layout']}>
            <LeftSidebar menu_items={menuItems}></LeftSidebar>
            <Header></Header>
            <main className={styles['main-content']}>
                {children}
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
