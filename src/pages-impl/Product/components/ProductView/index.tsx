import React from 'react';

import {getImageUrl} from '@/util/getImageUrl';

import {usePageStaticData} from '../../hooks/usePageStaticData';
import styles from './styles.module.scss';


const ProductView = () => {
    const {product} = usePageStaticData();
    const {image} = product;

    return (
        <img
            aria-hidden="true"
            alt="Картинка продукта"
            src={getImageUrl(image)}

            className={styles.productView}
        />
    );
};

export default ProductView;
