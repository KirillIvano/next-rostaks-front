import React from 'react';
import {observer} from 'mobx-react-lite';
import classnames from 'classnames';

import {ProductPreview} from '@/components';

import {useCatalogStore} from '../../hooks/useCatalogStore';
import styles from './styles.module.scss';


type ProductsProps = {
    wrapperClass?: string;
}

const Products = observer(({
    wrapperClass,
}: ProductsProps) => {
    const catalogStore = useCatalogStore();

    return (
        <section className={classnames(wrapperClass)}>
            <div
                className={classnames(
                    styles.productsRow,
                    'row',
                )}
            >
                {!catalogStore.digestedProducts.length && (
                    <div className={styles.emptyState}>
                        {'Ничего не найдено, попробуйте поменять категорию или фильтры!'}
                    </div>
                )}

                {catalogStore.digestedProducts.map(
                    ({id, ...product}) => (
                        <div
                            className={classnames(
                                styles.productWrapper,
                                'col-xs-6 col-md-4',
                            )}
                            key={id}
                        >
                            <ProductPreview
                                productId={id}
                                className={styles.product}

                                {...product}
                            />
                        </div>
                    ),
                )}
            </div>
        </section>
    );
});

export default Products;
