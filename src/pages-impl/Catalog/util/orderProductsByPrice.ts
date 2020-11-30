import {ProductPreviewDto} from '@/services/products/dto';

export type PriceOrder = 'dec' | 'asc' | 'default';


const ascSorter = (a: ProductPreviewDto, b: ProductPreviewDto) => a.price - b.price;
const decSorter = (a: ProductPreviewDto, b: ProductPreviewDto) => b.price - a.price;

export const orderProductsByPrice = (products: ProductPreviewDto[], order: PriceOrder) => {
    if (order === 'default') return products;

    return [...products].sort(
        order === 'asc' ?
            ascSorter :
            decSorter,
    );
};
