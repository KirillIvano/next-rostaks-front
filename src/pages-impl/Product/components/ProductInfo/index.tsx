import React from 'react';
import classnames from 'classnames';

import {MAIN_PHONE, PAINT_MEASURE} from '@/consts';

import {usePageStaticData} from '../../hooks/usePageStaticData';
import {DescriptionContainer} from './..';
import styles from './styles.module.scss';


type ProductDescriptionProps = {
    className?: string;
}

const ProductDescription = ({
    className,
}: ProductDescriptionProps) => {
    const {product} = usePageStaticData();
    const {
        name,
        description,
        price,
    } = product;

    return (
        <section
            className={classnames(className, styles.infoContainer)}
        >
            <h1 className={styles.productName}>
                {name}
            </h1>
            <p className={styles.productPrice}>
                Цена: {price} ₽/{PAINT_MEASURE}
            </p>
            <p className={styles.productPriceInfo}>
                Подробнее уточняйте по телефону: {MAIN_PHONE}
            </p>


            <DescriptionContainer content={description} />
        </section>
    );
};

export default ProductDescription;
