import React from 'react';
import classnames from 'classnames';

import {getImageUrl} from '@/util/getImageUrl';

import styles from './styles.module.scss';


export type CategoryPreviewProps = {
    name: string;
    image: string;

    className?: string;

    selected?: boolean;
    onSelect: () => void;
}

const CategoryPreview = ({
    name,
    image,

    className,

    selected,
    onSelect,
}: CategoryPreviewProps) => (
    <div
        className={classnames(
            className,
            styles.cardContainer,
            {[styles.selected]: selected},
        )}
        style={{backgroundImage: `url(${getImageUrl(image)})`}}
        tabIndex={0}

        onKeyDown={({key}) => (key === 'Enter' || key === 'space') && onSelect()}
        onClick={onSelect}
    >
        <p className={styles.cardContent}>
            {name}
        </p>
    </div>
);

export default CategoryPreview;
