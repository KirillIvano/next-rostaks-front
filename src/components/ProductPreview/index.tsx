import React from 'react';
import classnames from 'classnames';
import {useRouter} from 'next/router';

import {getImageUrl} from '@/util/getImageUrl';
import {Button} from '@/uikit';
import {getProductPagePath} from '@/routes';
import {PAINT_MEASURE} from '@/consts';

import styles from './styles.module.scss';
import {LazyProductImage} from './..';


type ProductPreviewProps = {
    productId: number;
    price: number;
    name: string;
    shortDescription: string;

    image?: string;
    className?: string;
}

const ProductPreview = ({
    productId,
    price,
    name,
    image,
    shortDescription,

    className,
}: ProductPreviewProps) => {
    const router = useRouter();

    const redirectToProduct = () =>
        router.push(getProductPagePath(productId));

    return (
        <div
            className={classnames(
                className,
                styles.productPreview,
            )}
        >
            <div className={styles.cardContent}>
                <div
                    className={styles.imageWrapper}
                >
                    <LazyProductImage
                        src={image ? getImageUrl(image) : '/product_placeholder.png'}
                        className={styles.productImage}
                        alt=""
                    />
                </div>

                <div className={styles.productInfo}>
                    <p className={styles.productName}>
                        {name}
                    </p>

                    <p className={styles.productDescription}>
                        {shortDescription}
                    </p>

                    <p className={styles.productPrice}>
                        {
                            Boolean(price) && `~ ${price} ₽/${PAINT_MEASURE}`
                        }
                    </p>
                </div>
            </div>

            <Button
                onClick={redirectToProduct}
            >
                Подробнее
            </Button>
        </div>
    );
};
export default React.memo(ProductPreview);
