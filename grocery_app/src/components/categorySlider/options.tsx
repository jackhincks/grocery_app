import { GroceryCategory } from "@/shared/types"

type Props = {
  image: string,
  description: string,
  category: GroceryCategory,
  handleCategoryClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Options = ({ image, description, category, handleCategoryClick }: Props) => {
  return (
    
      <li className="flex-none flex-col justify-center items-center h-20 w-20 mx-4">
        <button 
          className="flex mx-auto" 
          value={category}
          onClick={handleCategoryClick}
        >
          <img alt={`${image}`} src={image} className="h-[48px] w-[48px] mx-auto hover:-rotate-12 hover:cursor-pointer"/>
        </button>
        <div className="font-bold text-black text-center">{description}</div>
      </li>
    
  )
}

export default Options