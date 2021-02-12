import React, {useEffect} from 'react';
import classnames from 'classnames';
import {observer} from 'mobx-react-lite';

import {CatalogStaticProps} from '@/pages/catalog';

import {
    CatalogCategories,
    Products,
    SearchInput,
    PriceSort,
    PriceList,
} from './components';
import {useCategoryId} from './hooks/useCategoryId';
import {useCatalogStore, withCatalogStore} from './hooks/useCatalogStore';
import {WithCatalogStaticData} from './hooks/useCatalogStaticData';
import styles from './styles.module.scss';
import {LazyLoadProvider} from '@/contexts/LazyLoad';


type CatalogProps = {
    pageProps: CatalogStaticProps
}

const Catalog = observer(({pageProps}: CatalogProps) => {
    const categoryId = useCategoryId();
    const catalogStore = useCatalogStore();

    useEffect(() => {
        catalogStore.getProducts();
    }, [catalogStore]);

    useEffect(() => {
        catalogStore.setCategoryId(categoryId);
    }, [categoryId, catalogStore]);

    return (
        <LazyLoadProvider>
            <WithCatalogStaticData value={pageProps}>
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

                    <section className={styles.contentRow}>
                        <div className="row">
                            <div className={'col-md-offset-3 col-md-9'}>
                                <h1 className={styles.sectionHeadline}>
                                    {'Прайс лист'}
                                </h1>

                                <PriceList />
                            </div>
                        </div>
                    </section>
                </div>
            </WithCatalogStaticData>
        </LazyLoadProvider>
    );
});


export const CatalogBase = Catalog;

export default withCatalogStore(Catalog);
