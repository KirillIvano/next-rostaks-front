import React, {useEffect} from 'react';
import classnames from 'classnames';
import {observer} from 'mobx-react-lite';

import styles from './styles.module.scss';
import {CatalogCategories, Products, SearchInput, PriceSort} from './components';
import {useCategoryId} from './hooks/useCategoryId';
import {useCatalogStore} from './hooks/useCatalogStore';


export const Catalog = observer(() => {
    const categoryId = useCategoryId();
    const catalogStore = useCatalogStore();

    useEffect(() => {
        catalogStore.getProducts();
    }, [catalogStore]);

    useEffect(() => {
        catalogStore.setCategoryId(categoryId);
    }, [categoryId, catalogStore]);

    return (
        <div className={classnames(styles.catalog, 'container')}>

            <section>
                <h1 className={styles.sectionHeadline}>
                    Категории продуктов
                </h1>

                <CatalogCategories />
            </section>

            <section className={styles.contentRow}>
                <h1 className={styles.sectionHeadline}>
                    Продукция
                </h1>

                <div className="row">
                    <div
                        className={classnames(
                            styles.catalogMenu,
                            'col-md-3 col-xs-12',
                        )}
                    >
                        <SearchInput />
                        <PriceSort className={styles.priceSort} />
                    </div>

                    <div
                        className={classnames(
                            styles.catalogContent,
                            'col-md-9 col-xs-12',
                        )}
                    >
                        <Products
                            wrapperClass={styles.catalogProducts}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
});
