import { useCryptoResponseGecko } from '../../services/state/useCryptoResponse'
import CryptoContainer from '../../components/CryptoContainer/CryptoContainer';
import Footer from '../../components/Footer/Footer';

function Cryptocurrencies() {

  const { listCriptos } = useCryptoResponseGecko();

  if(listCriptos.length === 0){
    return <p style={{color: 'red', }}>API request is loading please wait a few minutes...It is recommended to restart the page.</p>
  }


  return (
    <div style={{backgroundColor: '#212121'}}>
      <h1 style={{color: '#14FFEC'}}>List of Cryptocurrencies </h1>
{/* 
      <CryptoContainer listCryptos={listCriptos} /> */}
      <Footer />
    </div>
  )
}

export default Cryptocurrencies