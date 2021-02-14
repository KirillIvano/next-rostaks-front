import React from 'react';
import {useRouter} from 'next/router';

import {Box, Button} from '@/uikit';
import {getCatalogPath} from '@/routes';

import styles from './styles.module.scss';


const Delivery = () => {
    const router = useRouter();

    return (
        <Box>
            <div className={styles.deliveryPageWrapper}>
                <h1 className={styles.deliveryPageHeading}>Доставка и оплата</h1>

                <h2 className={styles.deliverySectionHeading}>Оплата</h2>
                <p className={styles.deliveryParagraph}>
                    Мы производим оплату по безналичному расчёту.
                </p>

                <h2 className={styles.deliverySectionHeading}>Доставка</h2>
                <p className={styles.deliveryParagraph}>
                    Самовывоз по адресу: г. Реутов, ул. Никольская, д. 3.
                </p>
                <p className={styles.deliveryParagraph}>
                    Логистическими компаниями: ВАРЯГ ГРУПП, ПЭК, Деловые Линии, Кит, Экспресс и др.
                </p>
                <p className={styles.deliveryParagraph}>
                    Стоимость доставки рассчитывается отдельно.
                </p>

                <Button
                    className={styles.catalogButton}
                    onClick={() => router.push(getCatalogPath())}
                >
                    Перейти в каталог
                </Button>
            </div>
        </Box>
    );
};

export default Delivery;
