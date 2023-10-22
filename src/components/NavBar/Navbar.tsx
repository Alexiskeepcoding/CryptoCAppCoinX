import { Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, FundOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import icon from '../cryptocurrency.png';


export const NavBar = () => {
  return (
    <nav>
        <div className = "nav-container" style={{ width: '100%',top: '0', left: 0}}>
            <div className = "nav-log" style={{backgroundColor: '#001529', display: 'flex', flexDirection: 'column',}} >
                <Avatar src ={icon} size = "large"/>
                <Typography.Title level = {2} className = "logo">
                    <Link to = "/"> CryptoCAppCoinX</Link>
                </Typography.Title>
                
                    <Menu theme = "dark" mode ='horizontal'>
                        <Menu.Item icon = {<HomeOutlined />} key= "Home">
                            <Link to = "/">Home</Link>
                        </Menu.Item>  
                        <Menu.Item icon = {<FundOutlined />} key= "cryptocurrencies">
                            <Link to = "/cryptocurrencies">Cryptocurrencies</Link>
                        </Menu.Item>  
                        <Menu.Item icon = {<UserAddOutlined />} key= "register">
                            <Link to = "/register">Register</Link>
                        </Menu.Item>
                        <Menu.Item icon = {<UserOutlined />} key= "login">
                            <Link to = "/login">Login</Link>
                        </Menu.Item>
                    </Menu> 
            </div>
        </div>
    </nav>
  );
}

export default NavBar;