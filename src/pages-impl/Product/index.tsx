import React from 'react';
import classnames from 'classnames';

import {ProductPageStaticProps} from '@/pages/product/[id]';

import {WithProductStaticData} from './hooks/usePageStaticData';
import {ProductInfo, ProductView} from './components';
import styles from './styles.module.scss';
import {useScrollTop} from '@/hooks/useScrollTop';


type ProductPageProps = {
    pageProps: ProductPageStaticProps
}

const Product = ({
    pageProps,
}: ProductPageProps) => {
    useScrollTop();

    return (
        <WithProductStaticData value={pageProps}>
            <div className={classnames('container', styles.productPage)}>
                <div className="row">
                    <div className="col-md-6">
                        <ProductView  />
                    </div>

                    <div className="col-md-6">
                        <ProductInfo />
                    </div>
                </div>
            </div>
        </WithProductStaticData>
    );
};

export default Product;
