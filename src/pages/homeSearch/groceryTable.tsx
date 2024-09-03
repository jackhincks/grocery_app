import { Grocery } from '@/shared/types'
import Add2cart from './add2cart'

type Props = {
  groceries: Array<Grocery>
}

const GroceryTable = ({ groceries }: Props) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

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
            <img alt={grocery.image} src={grocery.image} />
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