import { groceries } from "@/data/groceries";
import { GroceryCategory } from "@/shared/types";
import Add2cart from "./add2cart";

type Props = {}

const SearchResults = (props: Props) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

  return (
    <section className="bg-inherit">
        {/* CONTAINER FOR ALL SEARCH RESULTS */}
        <div
          className="mx-auto grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg: max-w-[80%] align-middle justify-center"
        >
          {/* CONTAINERS FOR INDIVIDUAL PRODUCTS */}
          {groceries.map(grocery => (
            <div
              className="relative rounded-lg h-46 w-46 m-2 border-2 bg-white"
            >
              {/* ADD TO CART BUTTON */}
              <div className="absolute top-0 right-0 mr-3 mt-2">
                <Add2cart />
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
        </div>
    </section>
  )
};


export default SearchResults