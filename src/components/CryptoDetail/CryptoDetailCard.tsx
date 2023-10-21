import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ICryptoAPIResponsGecko } from "../../services/Interfaces/CryptoAPI.interfaces";

export const CryptoDetail = () => {

  const [cryptoCoin, setCrypto] = useState<ICryptoAPIResponsGecko | null>(null);

  const params = useParams();

  useEffect(() => {
    const getSinglePokemon = async () => {

    //   const response = await fetch(
    //     `${import.meta.env.VITE_POKE_API_BASE_PATH}/pokemon/${params.id}`,
    //   );

    //   const responseBody = await response.json();

    //   setPokemon(responseBody);
    };

    getSinglePokemon();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
          </li>
        </ul>
      </nav>
      <h1>Detail of crypto {params.id}</h1>
      {cryptoCoin !== null ? (
        <>
          <h2>{cryptoCoin.name}</h2>

        </>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};