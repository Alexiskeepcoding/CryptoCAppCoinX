import { ICryptoAPIResponseGecko } from '../../services/Interfaces/CryptoAPI.interfaces';
import { ContainerCardsStyle, ContentStyle, CryptoCardStyle, HeaderStyle, ImageStyle } from './styles/CryptoContainer.styles';
// import { ContainerCardsStyle, ContentStyle, CryptoCardStyle, HeaderStyle, ImageStyle } from './styles/CryptoContainer.styles';

export interface ICryptoContainerProp {
    listCryptos: ICryptoAPIResponseGecko[];
}


export const CryptoContainer = ({ listCryptos }: ICryptoContainerProp) => {

  return (
    <>
      <div>
      <div className ='tarjeta'
          style={ContainerCardsStyle}>
            {listCryptos.map((crypto) => (<div 
                style={CryptoCardStyle}>
                <h1 style={HeaderStyle}>{crypto.name}</h1>

                <img src={crypto.image} alt= {crypto.name} 
                style={ImageStyle}
                />
                <div style={ContentStyle}>
                  <p>Current price: $ {crypto.current_price}</p>
                  <p>Market cap: $ {crypto.market_cap}</p>
                  <p>Total Volume: ${crypto.total_volume}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default CryptoContainer