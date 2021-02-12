import React from 'react';

import {DownloadButton} from '@/components';
import {getFileUrl} from '@/util/getFileUrl';

import styles from './styles.module.scss';


const PriceList = () => (
    <div>
        <p className={styles.priceListDescription}>
            {'Вы можете сразу скачать полный прайс лист или посмотреть наш каталог выше.'}
        </p>

        <DownloadButton
            className={styles.priceListDownload}

            fileName="rostaks_прайс.xlxs"
            url={getFileUrl('price.xlsx')}
        >
            Скачать прайс лист
        </DownloadButton>
    </div>
);


export default PriceList;
