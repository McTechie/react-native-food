// zustand store for menu 

import { create } from 'zustand'

export const useMenuStore = create((set) => ({
  // search bar
  searchBarText: '',
  setSearchBarText: (text) => set(() => ({ searchBarText: text })),

  // featured categories
  activeCategories: [],
  addCategory: (category) => set((state) => ({ activeCategories: [...state.activeCategories, category] })),
  removeCategory: (category) => set((state) => ({ activeCategories: state.activeCategories.filter((cat) => cat !== category) })),

  // cart
  cart: [],
  addToCart: (item) => set((state) => {
    const itemInCart = state.cart.find((cartItem) => cartItem.title === item.title);

    if (itemInCart) {
      return {
        cart: state.cart.map((cartItem) => {
          if (cartItem.title === item.title) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        }),
      };
    } else {
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }
  }),
  removeFromCart: (item) => set((state) => {
    const itemInCart = state.cart.find((cartItem) => cartItem.title === item.title);

    if (itemInCart.quantity === 1) {
      return {
        cart: state.cart.filter((cartItem) => cartItem.title !== item.title),
      };
    } else {
      return {
        cart: state.cart.map((cartItem) => {
          if (cartItem.title === item.title) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        }),
      };
    }
  }),
  clearCart: () => set(() => ({ cart: [] })),
}));
