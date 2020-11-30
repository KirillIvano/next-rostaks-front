import {createContext, useContext} from 'react';

import {ProductPreviewType} from '@/domain/products/types';

import {CatalogStore} from '../localStore';


export interface ICatalogStore {
    digestedProducts: ProductPreviewType[];
}

export const CatalogStoreContext = createContext(new CatalogStore());
export const useCatalogStore = () => useContext(CatalogStoreContext);
