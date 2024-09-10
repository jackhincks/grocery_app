import { Grocery } from '@/shared/types'
import Add2cart from './add2cart'

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  });

const imagePath = '../../src/assets/groceryImages'

type Props = {
  groceries: Grocery[]
}

const GroceryTable = ({ groceries }: Props) => {
  return (
    <>
      {/* CONTAINERS FOR INDIVIDUAL PRODUCTS */}
      {groceries.map(grocery => (
        <div
          className="relative rounded-lg h-46 w-46 m-2 border-2 bg-white"
        >
          {/* ADD TO CART BUTTON */}
          <div className="absolute top-0 right-0 mr-3 mt-2">
            <Add2cart 
              groceryID={grocery.id}
            />
          </div>
          {/* IMAGE */}
          <div className="mx-auto my-2 h-32 w-32">
            <img alt={grocery.image} src={`${imagePath}/${grocery.image}`} />
          </div>
          {/* PRICE */}
          <div className="px-2 text-lg font-bold text-black">
            {`${USDollar.format(grocery.price)}`}
          </div>
          {/* NAME */}
          <div className="px-2 text-black">
            {grocery.name}
          </div>
        </div>
      ))}
    </>
  )
}

export default GroceryTable