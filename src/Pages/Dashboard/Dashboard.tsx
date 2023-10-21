import React from 'react'
import CryptoDetailTable from '../../components/CyptoDetailTable/CryptoDetailTable'
import { SyncOutlined } from '@ant-design/icons';


export const Dashboard = ({coins, search}) => {
  
    const titles = ['#', 'coin', 'Price', 'Price Change', ' 24h volume'];

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    if(Object.keys(coins).length === 0) {
        return (
            <div className = 'text-center'>
                    <img src = 'https://media.giphy.com/media/3o6x0000000000000/giphy.gif' alt = 'loading' className = 'img-fluid'/>
                <h1>Loading <SyncOutlined spin /> </h1>
            </div>
        )
    }
    


    return (
    <table className ='table table-dark mt-4 table-hover'>
        <thead>
            <tr>
                { 
                titles.map((title, i) => (
                    <th key = {i}>{title}</th>
                ))
                }
            </tr>
        </thead>
        <tbody>
            {filteredCoins.map((coin, index) => 
                <CryptoDetailTable key = {coin.id} coin = {coin} index ={index}/>
            )}
        </tbody>
    </table>


    
  )
}

export default Dashboard