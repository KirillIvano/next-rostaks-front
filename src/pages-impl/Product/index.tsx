import React from 'react';

import {ProductPageStaticProps} from '@/pages/product/[id]';
import {Box} from '@/uikit';

// import styles from './styles.scss';


type ProductPageProps = {
    pageProps: ProductPageStaticProps
}

const Product = ({
    pageProps: {
        name,
    },
}: ProductPageProps) => {
    return (
        <Box>
            <p>{name}</p>
        </Box>
    );
};


export default Product;
