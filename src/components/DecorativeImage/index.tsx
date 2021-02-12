import React from 'react';
import classnames from 'classnames';

import {getProportionsRatio} from './utils/getPaddingFromRatio';
import styles from './styles.module.scss';


type DecorativeImageProps = {
    src: string;

    className?: string;
    proportions?: string;
};

const DecorativeImage = ({
    src,

    proportions = '1x1',
    className,

    ...props
}: DecorativeImageProps) => {
    const ratio =  getProportionsRatio(proportions);

    return (
        <div
            {...props}

            aria-hidden="true"

            className={
                classnames(
                    className,
                    styles.image,
                )
            }
            style={{'paddingBottom': ratio, 'backgroundImage': `url(${src})`}}
        />
    );
};

export default DecorativeImage;
