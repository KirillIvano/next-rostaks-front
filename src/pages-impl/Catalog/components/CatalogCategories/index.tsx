import React, {useCallback} from 'react';
import useSWR from 'swr';
import classnames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import {useRouter} from 'next/router';

import {CategoryPreview} from '@/components';
import {ProductCategoryType} from '@/domain/productsCategories/types';
import {getApiUrl} from '@/services/util/getApiUrl';

import {useCategoryId} from '../../hooks/useCategoryId';
import styles from './styles.module.scss';


const fetchJson = (url: string, options?: RequestInit) => fetch(url, options).then(res => res.json());

type CatalogCategoriesProps = {
    className?: string;
}

const CatalogCategories = ({className}: CatalogCategoriesProps) => {
    const {error, data} = useSWR<{categories: ProductCategoryType[]}, Error>(
        getApiUrl('/products/categories'),
        fetchJson,
    );

    const categoryId = useCategoryId();

    const router = useRouter();
    const handleSelect = useCallback(
        (id: number | null) =>
            router.push('/catalog' + (id ? `?categoryId=${id}` : '')),
        [router],
    );

    if (error) return <p>{error.message}</p>;
    if (!data) return <Skeleton height={100} />;

    return (
        <div
            className={classnames(
                className,
                'row',
            )}
        >
            <div
                className="col-md-3 col-xs-6"
            >
                <CategoryPreview
                    name="Все"
                    image="https://a.d-cd.net/2ef6706s-960.jpg"

                    className={styles.categoryPreview}
                    onSelect={() => handleSelect(null)}
                    selected={categoryId === null}
                />
            </div>


            {data.categories.map(
                category => (
                    <div
                        className="col-md-3 col-xs-6"
                        key={category.id}
                    >
                        <CategoryPreview
                            {...category}

                            className={styles.categoryPreview}
                            onSelect={() => handleSelect(category.id)}
                            selected={categoryId === category.id}
                        />
                    </div>
                ),
            )}
        </div>
    );
};

export default CatalogCategories;
