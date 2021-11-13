import {GetStaticProps} from 'next';

import Catalog from '@/pages-impl/Catalog';
import {getCategoriesPreviews} from '@/services/products';
import {ProductCategoryType} from '@/domain/productsCategories/types';


export type CatalogStaticProps = {
    categories: ProductCategoryType[];
}


export const getStaticProps: GetStaticProps = async () => {
    const categoriesRes = await getCategoriesPreviews();

    if (!categoriesRes.ok) {
        throw new Error(`Ошибка при загрузке категорий: ${categoriesRes.error}`);
    }

    const {data: {data: {categories}}} = categoriesRes;

    return {
        props: {
            categories: categories,
        },
        revalidate: 5,
    };
};

export default Catalog;
