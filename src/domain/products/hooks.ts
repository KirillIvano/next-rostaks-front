import {createContext, useContext} from 'react';

import {productsStore} from '@/store/products';

import {ProductPreviewType, ProductType} from './types';


interface IProductsStore {
    productsPreviews: ProductPreviewType[];
    products: ProductType[];

    getProductById: (id: number) => ProductType | undefined;
}

export const ProductsContext = createContext<IProductsStore>(productsStore);

export const useProductsStore = () => useContext(ProductsContext);
export const useProductById = (productId: number): ProductType | undefined =>
    useProductsStore().getProductById(productId);
