import React, { ChangeEvent } from 'react'
import { ICryptoAPIResponsGecko } from '../../services/Interfaces/CryptoAPI.interfaces';

export interface ICryptoContainerProp {
    listCriptos: ICryptoAPIResponsGecko[];
}


export const CryptoContainer = ({ listCriptos }: ICryptoContainerProp) => {
  return (
    <>
        <div>Esta en actualizacion...</div>
    </>
  )
}

export default CryptoContainer