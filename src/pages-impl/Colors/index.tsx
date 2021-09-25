import React from 'react';
import classnames from 'classnames';

import {DecorativeImage, DownloadButton} from '@/components';

import styles from './styles.module.scss';


const Colors = () => {
    return (
        <div className={classnames(
            styles.colorsPage,
        )}>
            <h1 className={classnames(styles.pageHeadline, 'container')}>
                Колеровка
            </h1>

            <section className={classnames(styles.colorsInfo, 'container')}>
                <p className={styles.colorsInfoItem}>
                    Мы производим колеровку красок по каталогам
                    «RAL», «Monicolor», «Московская палитра» и по образцам клиентов<br />
                    (минимальный объём для колеровки 90кг).
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

            <div className={classnames(styles.gallery, 'container')}>
                <div className="row">
                    <div className={classnames(styles.galleryItem, 'col-xs-12 col-md-6')}>
                        <DecorativeImage
                            src='/colors/intro.jpg'
                            proportions='5x2'
                        />
                    </div>

                    <div className={classnames(styles.galleryItem, 'col-xs-12 col-md-6')}>
                        <DecorativeImage
                            src='/colors/colors1.jpg'
                            proportions='5x2'
                        />
                    </div>

                    <div className={classnames(styles.galleryItem, 'col-xs-12 col-md-6')}>
                        <DecorativeImage
                            src='/colors/colors2.jpg'
                            proportions='5x2'
                        />
                    </div>

                    <div className={classnames(styles.galleryItem, 'col-xs-12 col-md-6')}>
                        <DecorativeImage
                            src='/colors/colors3.jpg'
                            proportions='5x2'
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Colors;
