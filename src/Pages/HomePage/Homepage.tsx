import { Col, Row, Space, Statistic, Typography } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { SearchOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';


export const Homepage = () => {


  const [listCoins, setCoins ] = useState([]);

  const [search, setSearch] = useState("");

    const getCoins = async () => {

      const responseCoins = await fetch(import.meta.env.VITE_CRYPTOAPI_URL);
            
      const responseBodyCoins = await responseCoins.json();
      
      setCoins(responseBodyCoins);
    } 

    useEffect( () => {
        getCoins();
    }, [])




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


       <Dashboard coins = { listCoins } search = { search } />
      </div>
    </div>


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
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
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
  </>  
  )
}

export default Homepage


