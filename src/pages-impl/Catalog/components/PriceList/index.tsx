import React from 'react';

import {PriceListDownloadButton} from '@/components';

import styles from './styles.module.scss';


const PriceList = () => (
    <div>
        <p className={styles.priceListDescription}>
            {'Вы можете сразу скачать полный прайс лист или посмотреть наш каталог выше.'}
        </p>

        <PriceListDownloadButton className={styles.priceListDownload}>
            Скачать прайс лист
        </PriceListDownloadButton>
    </div>
);


export default PriceList;
