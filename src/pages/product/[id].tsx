import {GetStaticPaths} from 'next';

import {getCategoryById, getProductById, getProductsPreviews} from '@/services/products';
import ProductPage from '@/pages-impl/Product';
import {ProductType} from '@/domain/products/types';
import {ProductCategoryType} from '@/domain/productsCategories/types';
import {GetStaticProps} from '@/types';


const getProductsIds = async () => {
    const productsPreviewsRes = await getProductsPreviews();

    if (!productsPreviewsRes.ok) throw new Error(productsPreviewsRes.error);

    const productsPreviews = productsPreviewsRes.data.products;
    const productsIds = productsPreviews.map(({id}) => id);

    return productsIds;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const productIds = await getProductsIds();

    return {
        paths: productIds.map(id => ({params: {id: String(id)}})),
        fallback: false,
    };
};


export type ProductPageStaticProps = {
    product: ProductType,
    category: ProductCategoryType
};

export const getStaticProps: GetStaticProps<ProductPageStaticProps> = async ({params}) => {
    const productId = (params as {id: string}).id;

    const productRes = await getProductById(+productId);
    if (!productRes.ok) {
        throw new Error(productRes.error);
    }

    const {product} = productRes.data;
    const {categoryId} = product;

    const categoryRes = await getCategoryById(categoryId);
    if (!categoryRes.ok) {
        throw new Error(categoryRes.error);
    }

    const {category} = categoryRes.data;

    return {
        props: {product, category},
        revalidate: 5,
    };
};


export default ProductPage;
