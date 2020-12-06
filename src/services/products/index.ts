import {request} from '@/services/util/request';
import {getApiUrl} from '@/services/util/getApiUrl';

import {ProductCategoryDto, ProductDto, ProductPreviewDto} from './dto';


export const getProductById = (productId: number) =>
    request<{product: ProductDto}>(getApiUrl(`/products/${productId}`));

export const getProductsPreviews = () =>
    request<{products: ProductPreviewDto[]}>(getApiUrl('/products'));

export const getCategoriesPreviews = () =>
    request<{categories: ProductCategoryDto[]}>(getApiUrl('/products/categories'));

export const getCategoryById = (categoryId: number) =>
    request<{category: ProductCategoryDto}>(getApiUrl(`/products/categories/${categoryId}`));
