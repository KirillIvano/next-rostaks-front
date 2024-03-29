import React from 'react';

import {DownloadButton} from '@/components';
import {getFileUrl} from '@/util/getFileUrl';


type PriceListDownloadProps = {
    children: string;

    className?: string;
}

const PriceListDownload = ({
    children,
    className,
}: PriceListDownloadProps) => (
    <DownloadButton
        className={className}
        url={getFileUrl('/priceList')}
    >
        {children}
    </DownloadButton>
);


export default PriceListDownload;
