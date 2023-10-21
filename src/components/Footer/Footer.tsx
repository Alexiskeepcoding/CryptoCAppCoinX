import { Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { footerStyle } from './styles/FooterStyles'

export const FooterContainer = () => {
  return (
    <div style={footerStyle}>
      <footer>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
              <Link to="/"> CryptoCAppX <br />
              </Link>
              Home page for practice
            </Typography.Title> 
            <Space >
                <Link to = '/'>Home</Link>
                <Link to = '/cryptocurrencies'>Cryptocurrencies</Link>
                <Link to = '/news'>News</Link>
                <Link to = '/login'>Login</Link>
            </Space>
      </footer>
    </div>
  )
}

export default FooterContainer;