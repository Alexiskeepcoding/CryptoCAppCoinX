
import { useEffect, useState } from 'react';
import { ICryptoAPIResponsGecko } from '../Interfaces/CryptoAPI.interfaces';


export const useCryptoResponseGecko = () =>{

    const [ listCriptos , setCryptos ] = useState<ICryptoAPIResponsGecko[]>([]);

    
    useEffect(() => {
        const getCryptos = async () => {
          try{
            const responseCoins = await fetch(import.meta.env.VITE_CRYPTOAPI_URL);
            
            const responseBodyCoins = await responseCoins.json();
    
            // const arrayResponse = await Promise.all(
            //   (
            //     await Promise.all(responseBodyCoins)
            //   ).map(async (response) => await response.json())
            // );

            setCryptos(responseBodyCoins);

          }catch(error){
            console.log(error);
          }
        };

        getCryptos();
    }, []);

    return {
      listCriptos,
    };
}
