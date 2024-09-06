import ShoppingCartButton from '@/components/TopNavbar/ShoppingCartButton'
import { ShopContext } from '@/context/shop-context'
import { Cart, CartModifier } from '@/shared/types'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('ShoppingCartButton', () => {
  let handleOpenCart = vi.fn();
  let mockCartModifier: CartModifier = {
    cartItems: {},
    addToCart: vi.fn(),
    removeFromCart: vi.fn(),
    deleteFromCart: vi.fn()
  };

  afterEach(() => {
    vi.clearAllMocks();
  });


  it('should reflect the correct 0 items in the cart', () => {

    render(
      <ShopContext.Provider value={mockCartModifier}>
        <ShoppingCartButton handleOpenCart={handleOpenCart}/>
      </ShopContext.Provider>
      )

    const cartNumber = screen.getByTestId("cartNumber");
    expect(cartNumber).toHaveTextContent("0")
  })

  it('should reflect the correct 3 items in the cart', () => {
    mockCartModifier.cartItems = {
      1: 2,
      3: 4,
      5: 9
    }

    render(
      <ShopContext.Provider value={mockCartModifier}>
        <ShoppingCartButton handleOpenCart={handleOpenCart}/>
      </ShopContext.Provider>
      )

    const cartNumber = screen.getByTestId("cartNumber");
    expect(cartNumber).toHaveTextContent("3")
  })

  it('should reflect the correct 99 items in the cart', () => {
    let testCart: Cart = {};

    for (let i = 1; i < 100; i++) {
      testCart[i] = i;
    }

    mockCartModifier.cartItems = testCart;

    render(
      <ShopContext.Provider value={mockCartModifier}>
        <ShoppingCartButton handleOpenCart={handleOpenCart}/>
      </ShopContext.Provider>
      )

    const cartNumber = screen.getByTestId("cartNumber");
    expect(cartNumber).toHaveTextContent("99")
  })
})