import SearchBar from '@/components/TopNavbar/SearchBar'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

describe('SearchBar', async () => {
  // tests that the input handler is updated with each character typed into the search box
  it('should call inputHandleChange when text is entered into search bar', async () => {
    // mock of the handleInputChange function
    const handleInputChange = vi.fn();

    render(<SearchBar handleInputChange={handleInputChange}/>)

    const search = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(search, "test search input");

    expect(handleInputChange).toHaveBeenCalledTimes("test search input".length);

  })
})