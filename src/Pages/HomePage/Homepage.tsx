import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { SearchOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { useCryptoResponseGecko } from '../../services/state/useCryptoResponse';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';


export const Homepage = () => {


  const { listCriptos } = useCryptoResponseGecko();

  const [search, setSearch] = useState("");



  return (
  <>
    <Typography.Title level={2}>Global Crypto Reference</Typography.Title>
    
      <div style = {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px'
      }}>
        <Title level={2} className = 'home-title'> Cryptocurrency list</Title>
        <Title level={3} className = 'show more'><Link to ='/cryptocurrencies'>Show all</Link></Title>
      </div>
    <div className = 'container'>
      <div className = 'row'>

      <Typography.Title level = {3}> Search your bitcoin <SearchOutlined /> </Typography.Title> 

      <input 
        type="text"
        placeholder= "Search crypto here!"
        className="form-control bg-dark text-light border-0 mt-4 text-center"
        autoFocus
        onChange={(e) => setSearch(e.target.value)}
      />
        <Dashboard coins = { listCriptos } search = { search } />
      </div>
    </div>

    <Footer />
  </>  
  )
}

export default Homepage


