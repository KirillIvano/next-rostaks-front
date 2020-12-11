import React, {useCallback} from 'react';
import classnames from 'classnames';

import {Button} from '@/uikit';

import styles from './styles.module.scss';


type DownloadButtonProps = {
    children: string;
    url: string;
    fileName: string;

    className?: string;
};

const DownloadButton = ({
    children,
    url,
    fileName,

    className,
}: DownloadButtonProps) => {
    const handleClick = useCallback(() => {
        const linkEl = document.createElement('a');

        linkEl.download = fileName;
        linkEl.href = url;

        linkEl.click();
    }, [url, fileName]);

    return (
        <Button
            onClick={handleClick}
            className={classnames(
                styles.donwloadButton,
                className,
            )}
        >
            <img
                className={styles.downloadImage}
                src="/downloadIcon.svg"
                aria-hidden="true"
                alt=""
            />

            <span
                className={styles.buttonContent}
            >
                {children}
            </span>
        </Button>
    );
};

export default DownloadButton;
