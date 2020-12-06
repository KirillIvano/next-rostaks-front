import {ProductsStore} from './products';
import {CategoriesStore} from './categories';


export type AppStore = {
    product: ProductsStore,
    productCategories: CategoriesStore,
};
