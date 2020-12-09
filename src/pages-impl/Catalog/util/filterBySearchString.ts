import {ProductPreviewType} from '@/domain/products/types';


export const filterProductsBySearchString = (products: ProductPreviewType[], search: string) => {
    const lowercaseSearch = search.toLowerCase();

    return products.filter(
        ({name}) => name.toLowerCase().includes(lowercaseSearch),
    );
};
