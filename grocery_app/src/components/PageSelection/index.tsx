import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid'
import { Grocery, GroceryCategory } from '@/shared/types';
import { fetchGroceries } from '@/API/fetchGroceries';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  totalPages: number
  query: string
  category: GroceryCategory
  setGroceryData: React.Dispatch<React.SetStateAction<Grocery[]>>
  setTotalPages: React.Dispatch<React.SetStateAction<number>>
}

const PageSelection = ({ setPage, page, totalPages, query, category, setGroceryData, setTotalPages }: Props) => {
  let over5Pages: boolean = totalPages >= 5;

  const pageContainerStyle = `flex items-center justify-center h-10 w-10 text-black hover:bg-primary-300 cursor-pointer`
  const selectedPageContainerStyle = 'flex items-center justify-center h-10 w-10 text-xl font-bold border-2 border-black'

  const fetchNewPage = (pageNumber: number) => {
    setPage(pageNumber)
    fetchGroceries(pageNumber, query, category, setGroceryData, setTotalPages)
  }

  return (
    <div className="flex w-full h-10 my-8">
      <div className="bg-primary-100 flex justify-center items-center mx-auto border-2 border-gray-400 rounded-md">
        {/* Left Arrow */}
        <div 
          className={`${pageContainerStyle} border-gray-400 border-r-2`}
          onClick={() => {page <= 1 ? '' : fetchNewPage(page - 1)}} 
        >
          <ArrowLeftIcon className="flex  text-black  h-6 w-6 mx-2" />
        </div>
        {Array.from({ length: totalPages }, (_, index) => (
          <div 
            className={`${page === index + 1 ? selectedPageContainerStyle : pageContainerStyle}`}
            onClick={() => page === index + 1 ? null : fetchNewPage(index + 1)}
            key={index}
          >
            {index + 1}
          </div>
        ))}
        {/* Right Arrow */}
        <div 
          className={`${pageContainerStyle} border-gray-400 border-l-2`}
          onClick={() => {page >= totalPages ? '' : fetchNewPage(page + 1)}}
        >
          <ArrowRightIcon className="flex  text-black  h-6 w-6 mx-2"/>
        </div>
      </div>
    </div>
  )
}

export default PageSelection