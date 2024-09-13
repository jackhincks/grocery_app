import NavBarLogo from '@/components/TopNavbar/NavBarLogo'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";


describe('NavBarLogo', () => {
  // Test requires mock of window.matchMedia as JSDOM does not have implementation of this as of v25.
  // useMediaQuery sets "matches" to true if the window size is >= the query
  it('should render "Brand.png" if matchMedia.matches == true', () => {
    
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }))
    });

    render(
      <Router>
        <NavBarLogo />
      </Router>
    );

    let image = screen.getByAltText(/brand/i)
    expect(image).toBeInTheDocument(); 
  })
  
  it('should render "Logo2.png" if matchMedia.matches == false', () => {
    
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }))
    });

    render(
      <Router>
        <NavBarLogo />
      </Router>
    );

    let image = screen.getByAltText(/logo/i)
    expect(image).toBeInTheDocument(); 
  })
})

