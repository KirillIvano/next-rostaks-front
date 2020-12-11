import React from 'react';
import classnames from 'classnames';

import {PAINT_MEASURE} from '@/consts';
import {getImageUrl} from '@/util/getImageUrl';
import {DownloadButton} from '@/components';

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
        certificate,
    } = product;

    return (
        <section
            className={classnames(className, styles.infoContainer)}
        >
            <h1 className={styles.productName}>
                {name}
            </h1>

            <p className={styles.productPrice}>
                Цена: {price} ₽/{PAINT_MEASURE} *
            </p>
            <p className={styles.productPriceInfo}>
                Подробнее уточняйте у менеджера *<br />
            </p>

            {certificate && <DownloadButton
                className={styles.productCertificate}
                fileName={name}
                url={getImageUrl(certificate)}
            >
                Сертификат
            </DownloadButton>}

            <DescriptionContainer content={description} />
        </section>
    );
};

export default ProductDescription;
