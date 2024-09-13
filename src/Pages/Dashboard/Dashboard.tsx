import React from 'react'
import CryptoDetailTable from '../../components/CyptoDetailTable/CryptoDetailTable'
import { SyncOutlined } from '@ant-design/icons';
import { ICryptoAPIResponseGecko } from '../../services/Interfaces/CryptoAPI.interfaces';




type DashboardProps = {
    coins: ICryptoAPIResponseGecko[]; // Reemplaza 'YourCoinType' con el tipo de datos adecuado para las monedas
    search: string;
};

export const Dashboard: React.FC<DashboardProps>  = ({coins, search}) => {
  
    const titles = ['#ranked', 'coin', 'Price', 'Price Change', ' 24h volume'];

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );



    if(Object.keys(coins).length === 0) {
        return (
            <div className = 'text-center'>
                    <img src = 'https://media.giphy.com/media/3o6x0000000000000/giphy.gif' alt = 'loading' className = 'img-fluid'/>
                <h1>Problem with API Loading... <SyncOutlined spin /> </h1>
            </div>
        )
    }
    

    return (
        <>
    <table className ='table table-dark mt-4 table-hover'>
        <thead>
            <tr>
                { titles.map((title, i) => (
                    <th key = {i}>{title}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            { filteredCoins.length !== 0 ? 
            filteredCoins.map((coin, index) => 
                <CryptoDetailTable key = {coin.id} coin = {coin} index ={index}/>
            ) : <div style={{color: 'red'}}> Bitcoins no encontrados</div> }
        </tbody>
    </table>
    
    

    
    </>
    
  )
}

export default Dashboard