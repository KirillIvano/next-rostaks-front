import {request, ResponseType} from '@/services/util/request';
import {getApiUrl} from '@/services/util/getApiUrl';

import {ProductCategoryDto, ProductDto, ProductPreviewDto} from './dto';


export const getProductById = (productId: number): Promise<ResponseType<ProductDto>> =>
    request<ProductDto>(getApiUrl(`/products/${productId}`));

export const getProductsPreviews = () =>
    request<{products: ProductPreviewDto[]}>(getApiUrl('/products'));

export const getCategoriesPreviews = () =>
    request<{categories: ProductCategoryDto[]}>(getApiUrl('/products/categories'));
