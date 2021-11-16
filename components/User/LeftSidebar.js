import { Layout, Menu } from "antd";
import Image from 'next/image'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';
import { useRouter } from 'next/router';

import StarsIcon from '@material-ui/icons/Stars';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import RedeemRoundedIcon from '@material-ui/icons/RedeemRounded';
import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';

const { Sider } = Layout;

const LeftSidebar = () => {
    const router = useRouter();
    const handleClick = (e) => router.push(e.key);

    return (
        <div className="left-sidebar">
            <div className="logo">
                <Image width={174} height={30} src="/full-logo.svg" alt="logo" />
            </div>
            <Menu mode="inline" defaultSelectedKeys={router.pathname}>
                <Menu.Item key="/1" onClick={handleClick} icon={<ShoppingBasketIcon />}>Bookings</Menu.Item>
                <Menu.Item key="/2" onClick={handleClick} icon={<SettingsApplicationsIcon />}>Services</Menu.Item>
                <Menu.Item key="/" onClick={handleClick} icon={<GroupSharpIcon />}>Staff</Menu.Item>
                <Menu.Item key="/admin/gift-cards" onClick={handleClick} icon={<RedeemRoundedIcon />}>Gift Cards</Menu.Item>
                <Menu.Item key="/5" onClick={handleClick} icon={<StarsIcon />}>Reviews</Menu.Item>
                <Menu.Item key="/6" onClick={handleClick} icon={<StoreMallDirectoryRoundedIcon />}>Branches</Menu.Item>
                <Menu.Item key="/7" onClick={handleClick} icon={<PieChartRoundedIcon />}>Reports</Menu.Item>
                <Menu.Item key="/8" onClick={handleClick} icon={<MonetizationOnRoundedIcon />}>Payments</Menu.Item>
                <Menu.Item key="/9" onClick={handleClick} icon={<DescriptionRoundedIcon />}>Store Policies</Menu.Item>
                <Menu.Item key="/0" onClick={handleClick} icon={<NotificationsSharpIcon />}>Sponsored Promotion</Menu.Item>
            </Menu>
        </div>
    )
}

export default LeftSidebar;
