import React from 'react'
import { ICryptoAPIResponseGecko } from '../../services/Interfaces/CryptoAPI.interfaces';

type CryptoTableProps = {
  coin: ICryptoAPIResponseGecko; 
  index: number;
};


export const CryptoDetailTable: React.FC<CryptoTableProps> = ({coin, index}) => {
  
  return (
    <tr>
        <td className = "text-white">{index}</td>
        <td>
          <img src={coin.image} alt={coin.name} style={{width: '6%'}} className ='img-fluid me-4'/>
          <span>{coin.name}</span>
          <span className="ms-3 text-white">{coin.symbol}</span>
        </td>
        <td>${coin.current_price.toLocaleString()}</td>
        <td className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>{coin.price_change_percentage_24h}</td>
        <td>${coin.total_volume.toLocaleString()}</td>
        <td>{
            
          }</td>
    </tr>
  )
}

export default CryptoDetailTable