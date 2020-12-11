import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


type IntroImageProps = {
    imageUrl: string;

    className?: string;
}

const IntroImage = ({
    imageUrl,
    className,
}: IntroImageProps) => (
    <div
        aria-hidden="true"
        className={classnames(
            styles.wrapper,
            className,
        )}
    >
        <img
            src={imageUrl}
            className={styles.image}
            alt=""
        />
    </div>
);

export default IntroImage;
