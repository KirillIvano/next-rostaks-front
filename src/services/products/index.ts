import {request} from '@/services/util/request';
import {getApiUrl} from '@/services/util/getApiUrl';

import {ProductCategoryDto, ProductDto, ProductPreviewDto} from './dto';


export const getProductById = (productId: number) =>
    request<{product: ProductDto}>(getApiUrl(`/product/${productId}`));

export const getProductsPreviews = () =>
    request<{products: ProductPreviewDto[]}>(getApiUrl('/product/all'));

export const getCategoriesPreviews = () =>
    request<{categories: ProductCategoryDto[]}>(getApiUrl('/category/all'));

export const getCategoryById = (categoryId: number) =>
    request<{category: ProductCategoryDto}>(getApiUrl(`/category/${categoryId}`));
