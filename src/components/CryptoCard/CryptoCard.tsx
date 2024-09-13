import { useParams } from "react-router-dom"

export const CryptoCard = () => {
  const params = useParams();

  return (
    <>
      <div> Detalle de la crypto {params.id}</div>
    </>  
  )
}

export default CryptoCard