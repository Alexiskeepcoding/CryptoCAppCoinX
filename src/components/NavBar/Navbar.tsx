import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined, DollarCircleFilled } from '@ant-design/icons';



import icon from '../cryptocurrency.png';
import { NavContainerStyles, NavlogingStyles } from './styles/Navstyles';

export const Navbar = () => {
  return (
    <div className = "nav-container" style = {NavContainerStyles}>
        <div className = "nav-log" style = { NavlogingStyles }>
            <Avatar src ={icon} size = "large"/>
            <Typography.Title level = {2} className = "logo">
                <Link to = "/"> CryptoCAppCoinX</Link>
            </Typography.Title>
            <div>
            <Menu theme = "dark">
                <Menu.Item icon = {<HomeOutlined />}>
                    <Link to = "/">Home</Link>
                </Menu.Item>  
                <Menu.Item icon = {<FundOutlined />}>
                    <Link to = "/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>  
                <Menu.Item icon = {<DollarCircleFilled />}>
                    <Link to = "/exchanages">Exchanage platform</Link>
                </Menu.Item>  
                <Menu.Item icon = {<BulbOutlined />}>
                    <Link to = "/news">News</Link>
                </Menu.Item>  
                
              </Menu>  
            </div>
            {/* ,<button className ="menu-control-container">

            </button> */}
        </div>
    </div>
  );
}

export default Navbar;