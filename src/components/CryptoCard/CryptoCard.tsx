import { ICryptoAPIResponseGecko } from '../../services/Interfaces/CryptoAPI.interfaces'

function CryptoCard(listOfCryptos: ICryptoAPIResponseGecko[]) {
  
  return (
    <>
      {listOfCryptos.map((crypto) => (
        <div key={crypto.id}>
          <h2>{crypto.name}</h2>
          <p>{crypto.symbol}</p>
        </div>
      ))}
    </>  
  )
}

export default CryptoCard