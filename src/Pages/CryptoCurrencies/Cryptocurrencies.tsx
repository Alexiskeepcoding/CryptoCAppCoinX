import React from 'react';
import { useCryptoResponseGecko } from '../../services/state/useCryptoResponse'
import CryptoContainer from '../../components/CryptoContainer/CryptoContainer';

function Cryptocurrencies() {

  const { listCriptos } = useCryptoResponseGecko();

  return (
    <>
      <h1>List of Cryptocurrencies </h1>

      <CryptoContainer listCriptos={listCriptos} />
    </>
  )
}

export default Cryptocurrencies