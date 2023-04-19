import { Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const menuItems = new Array();
    menuItems.push(`Home`, `About`);
    return (
        <div>
            <div className="logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['Home']}
            >
                <MenuItem key='Home'>
                    <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem key='About'>
                    <Link to="/about">About</Link>
                </MenuItem>
                <MenuItem key='Profile' style={{ marginLeft: 'auto' }}>
                    <Link to="/products/add">
                        <PlusCircleOutlined />
                    </Link>
                </MenuItem>
            </Menu>
            
        </div>
    )
}

export default NavBar;