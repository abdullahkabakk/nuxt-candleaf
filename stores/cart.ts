import type CartInfo from '~/types/cartInfo';

interface State {
  cart: CartInfo[];
}

export const useCartStore = defineStore('cart', {
  state: (): State => {
    const cart: CartInfo[] = [];
    return {
      cart: cart
    };
  },
  persist: true,
  getters: {
    getCart: (state) => state.cart,
    getCartLength: (state) => state.cart.length,
    getCartItemsCount: (state) => state.cart.reduce((acc, item) => acc + item.count, 0),
    getCartItemById: (state) => (id: number) => state.cart.find((item) => item.id === id),
  },
  actions: {
    addToCart(item: CartInfo): void {
      const existingItemIndex = this.cart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        // If item already exists in cart, update its quantity
        this.cart[existingItemIndex] = item;
      } else {
        // Otherwise, push the new item to cart
        this.cart.push(item);
      }
    },
    updateCart(id: number, quantity: number): void {
      const itemIndex = this.cart.findIndex((cartItem) => cartItem.id === id);
      if (itemIndex !== -1) {
        this.cart[itemIndex].count = quantity;
      }
    },
    removeFromCart(id: number): void {
      const itemIndex = this.cart.findIndex((cartItem) => cartItem.id === id);
      if (itemIndex !== -1) {
        this.cart.splice(itemIndex, 1);
      }
    }
  }
});
