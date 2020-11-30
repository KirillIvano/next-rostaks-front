import {ProductPreviewType} from '@/domain/products/types';


export const filterProductsBySearchString = (products: ProductPreviewType[], search: string) =>
    products.filter(({name}) => name.includes(search));
