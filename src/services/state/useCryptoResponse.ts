
import { useEffect, useState } from 'react';
import { ICryptoAPIResponseGecko } from '../Interfaces/CryptoAPI.interfaces';


export const useCryptoResponseGecko = () =>{

    const [ listCriptos , setCryptos ] = useState<ICryptoAPIResponseGecko[]>([]);

    useEffect(() => {
        const getCryptos = async () => {
            
            try{
            const responseCoins = await fetch(import.meta.env.VITE_CRYPTOAPI_URL);
            const responseBodyCoins = await responseCoins.json();
            setCryptos(responseBodyCoins );
            }
            catch(error){
                console.log(error);
                setCryptos([]);
            }
        };

        getCryptos();
    }, []);

    return {
      listCriptos,
    };
}
