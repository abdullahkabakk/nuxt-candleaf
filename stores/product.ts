import type { Product } from '~/types/product';
import products from '~/utils/products';

interface State {
  product: Product[];
}

export const useProductStore = defineStore('product', {
  state: (): State => {
    const product: Product[] = products;
    return {
      product: product
    };
  },
  persist: true,
  getters: {
    getProducts: (state) => state.product,
    getProduct: (state) => {
      return (id: number) => state.product.find((product) => product.id == id);
    }
  },
  actions: {}
});
