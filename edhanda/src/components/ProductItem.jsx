import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id,name,image,price}) => {
      const {currency} = useContext(ShopContext);
  return (
    <>
        <div className="overflow-hidden">
            <img src={image[0]} className="transition ease hover:scale-110" />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">{currency}{price}</p>
   </>
  )
}

export default ProductItem