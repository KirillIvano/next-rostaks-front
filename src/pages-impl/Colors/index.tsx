import React from 'react';
import classnames from 'classnames';

import {DownloadButton, IntroImage} from '@/components';

import styles from './styles.module.scss';


const Colors = () => {
    return (
        <div className={classnames(
            styles.colorsPage,
        )}>
            <h1 className={classnames(styles.pageHeadline, 'container')}>
                Колеровка
            </h1>

            <IntroImage
                className={styles.introImage}
                imageUrl="/colors_intro.jpg"
            />

            <section className={classnames(styles.colorsInfo, 'container')}>
                <p className={styles.colorsInfoItem}>
                    {
                        'Мы производим колеровку красок по каталогам ' +
                        '«RAL», «Monicolor», «Московская палитра» и по образцам клиентов.'
                    }
                </p>
                <p className={styles.colorsInfoItem}>
                    Мы производим колеровку краски от 90 кг.
                </p>
                <p className={styles.colorsInfoItem}>
                    Индивидуальные заказы на цветные материалы принимаются после 100% предоплаты.
                </p>

                <div className={styles.btnContainer}>
                    <DownloadButton
                        fileName="Колеровка.jpg"
                        url="/colors.jpg"
                        className={styles.downloadColors}
                    >
                        Наша колерная карта
                    </DownloadButton>
                </div>
            </section>
        </div>
    );
};

export default Colors;
