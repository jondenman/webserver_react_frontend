import { Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { SmileOutlined } from '@ant-design/icons';

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
            // items={menuItems.map((item, index) => {
            //     const key = index + 1;
            //     return {
            //     key,
            //     label: `${item}`,
            //     };
            // })} 
            >
                <MenuItem key='Home'>Home</MenuItem>
                <MenuItem key='About'>About</MenuItem>
                <MenuItem key='Profile' style={{ marginLeft: 'auto' }}>
                    <SmileOutlined />
                </MenuItem>
            </Menu>
            
        </div>
    )
}

export default NavBar;