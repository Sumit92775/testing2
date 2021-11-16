import { Menu, Dropdown } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './TopMenubar.module.scss';
import cx from 'classnames';

const { SubMenu } = Menu;

const menuItems = [
	{
		name: 'Beauty Saloon',
		link: '',
		children: [
			{ name: 'Beauty Saloon', link: '' },
			{ name: 'Barbershop', link: '' },
			{ name: 'Bodycare', link: '' }
		]
	},
	{
		name: 'Clinics',
		link: '',
		children: [
			{ name: 'Beauty Saloon', link: '' },
			{ name: 'Barbershop', link: '' },
			{ name: 'Bodycare', link: '' }
		]
	},
	{
		name: 'Driving Training',
		link: '',
		children: [
			{ name: 'Beauty Saloon', link: '' },
			{ name: 'Barbershop', link: '' },
			{ name: 'Bodycare', link: '' }
		]
	},
	{
		name: 'Restaurants',
		link: '',
		children: [
			{ name: 'Beauty Saloon', link: '' },
			{ name: 'Barbershop', link: '' },
			{ name: 'Bodycare', link: '' }
		]
	},
	{
		name: 'Beverages',
		link: '',
		children: [
			{ name: 'Beauty Saloon', link: '' },
			{ name: 'Barbershop', link: '' },
			{ name: 'Bodycare', link: '' }
		]
	},
	{
		name: 'Bakery And Desserts',
		link: '',
		children: [
			{ name: 'Beauty Saloon', link: '' },
			{ name: 'Barbershop', link: '' },
			{ name: 'Bodycare', link: '' }
		]
	},
	{
		name: 'Venue',
		link: '',
		multiColumns: true,
		children: [
			{ 
				name: 'Business Venues',
				link: '',
				children: [
					{ name: '5 Start Hotel', link: '' },
					{ name: '4 Start Hotel', link: '' },
					{ name: '3 Start Hotel', link: '' },
					{ name: 'Business Center', link: '' },
				]
			},
			{ 
				name: 'Entertainment Venues',
				link: '',
				children: [
					{ name: 'Bachelor', link: '' },
					{ name: 'Chalet', link: '' },
					{ name: `Kid's Entertainment`, link: '' },
					{ name: 'Resort', link: '' },
				]
			},
			{ 
				name: 'Wedding & Engagement',
				link: '',
				children: [
					{ name: '5 Start Hotel', link: '' },
					{ name: '4 Start Hotel', link: '' },
					{ name: '3 Start Hotel', link: '' },
					{ name: 'Wedding Palace', link: '' },
					{ name: 'Wedding Hall', link: '' },
				]
			}
		]
	},
	{
		name: 'Sports Club',
		link: '',
		children: [
			{ name: 'Beauty Saloon', link: '' },
			{ name: 'Barbershop', link: '' },
			{ name: 'Bodycare', link: '' }
		]
	},
	{
		name: 'Gift Shop',
		link: '',
		children: [
			{ name: 'Beauty Saloon', link: '' },
			{ name: 'Barbershop', link: '' },
			{ name: 'Bodycare', link: '' }
		]
	}
]

const renderMenuItem = item => <Menu.Item key={ item.name }>{ item.name }</Menu.Item>;

const renderMegaMenu = items => {
	let multiColumn = Boolean(items.filter(a => a.hasOwnProperty('children') && a.children.length).length)
	if(multiColumn) {
		return <div className={ cx('mega-menu grid-view colgap-50',  `grid-${items.length}`) }>
			{
				items.map((item, i) => {
					return <div key={i} className="menu-group">
							<strong>{ item.name }</strong>
							<Menu>
									{ 
										item.children.map((childItem, j) => {
											return renderMenuItem(childItem)
										})
									}
							</Menu>
						</div>
				})
			}
		</div>
	}
	return (
		<div className="mega-menu grid-view">
				<div className="menu-group">
					<Menu>
							{ 
								items.map((item, i) => {
									return renderMenuItem(item)
								})
							}
					</Menu>
				</div>
		</div>
	)
}

const renderSubMenu = (item) => {
	return <Menu.Item key={ item.name }>
		<Dropdown arrow={true} overlay={ renderMegaMenu( item.children ) }>
			<a className="ant-dropdown-link">
				{ item.name }
			</a>
		</Dropdown>
	</Menu.Item>
}

const TopMenubar = () => {
	return (
		<Menu mode="horizontal">
			{
				menuItems.map((item, i) => {
					if(item.hasOwnProperty('children')) {
						return renderSubMenu(item);
					} else {
						return renderMenuItem(item);
					}
				})
			}
		</Menu>
	)
}

export default TopMenubar
