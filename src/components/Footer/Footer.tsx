import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom'

export const FooterContainer = () => {
  return (
    <footer
    style = {{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        marginTop: '0',
        marginBottom: '0',
        marginLeft: '0',
        padding: '20px',
        fontSize: '1.2rem',
        fontFamily: 'Arial, Helvetica, sans-serif'
    }}>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
          <Link to="/"> CryptoCAppX <br />
          </Link>
          Home page for practice | Alexis Sotomayor
        </Typography.Title> 
        <Space >
            <Link to = '/'>Home</Link>
            <Link to = '/cryptocurrencies'>Cryptocurrencies</Link>
            <Link to = '/news'>News</Link>
            <Link to = '/login'>Login</Link>
        </Space>
    </footer>
  )
}

export default FooterContainer;