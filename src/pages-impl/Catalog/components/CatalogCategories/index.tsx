import React, {useCallback} from 'react';
import classnames from 'classnames';
import {useRouter} from 'next/router';

import {CategoryPreview} from '@/components';

import {useCategoryId} from '../../hooks/useCategoryId';
import {useCatalogStaticData} from '../../hooks/useCatalogStaticData';
import styles from './styles.module.scss';


type CatalogCategoriesProps = {
    className?: string;
}

const CatalogCategories = ({className}: CatalogCategoriesProps) => {
    const categoryId = useCategoryId();
    const {categories} = useCatalogStaticData();

    const router = useRouter();
    const handleSelect = useCallback(
        (id: number | null) =>
            router.push('/catalog' + (id ? `?categoryId=${id}` : '')),
        [router],
    );

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


            {categories.map(
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
