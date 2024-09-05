import TopNavbar from '@/components/topNavbar'
import { render, screen } from '@testing-library/react'
import { useState } from 'react';

describe('TopNavbar', () => {
  it('should open cart when icon clicked', async () => {
    const [ query, setQuery ] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);  
    }

    render(<TopNavbar handleInputChange={handleInputChange}/>)

    const shoppingCart = 

    const 
  })
})

