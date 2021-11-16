import LeftSidebar from './LeftSidebar'
import Header from './Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from './Layout.module.scss';

const Layout = ({children, base_url}) => {
    return (
        <div className={styles['main-layout']}>
            <LeftSidebar></LeftSidebar>
            <Header base_url={base_url} data={{
                cartCount: 1, notificationCount: 2
            }}></Header>
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