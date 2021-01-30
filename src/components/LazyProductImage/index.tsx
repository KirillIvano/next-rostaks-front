import React, {useEffect, useRef, useState} from 'react';
import cn from 'classnames';

import {useLazyLoadContext} from '@/contexts/LazyLoad';

import styles from './styles.module.scss';


type ProductImageProps = {
    wrapperClass?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const ProductImage = ({
    src,
    className,
    wrapperClass,

    ...props
}: ProductImageProps) => {
    const {position} = useLazyLoadContext();
    const [isVisible, setVisible] = useState(false);

    const wrapperRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (!isVisible && wrapperRef.current) {
            const elementPosition = wrapperRef.current.getBoundingClientRect().top;

            if (elementPosition < document.documentElement.clientHeight) {
                setVisible(true);
            }
        }
    }, [position, isVisible]);

    return (
        <div
            className={cn(styles.imageWrapper, wrapperClass)}
            ref={wrapperRef}
        >
            {
                isVisible ? (
                    <img
                        {...props}
                        className={cn(styles.productImage, className)}
                        src={src}
                    />
                ) : (
                    <div className={styles.imagePlaceholder}></div>
                )
            }
        </div>
    );
};

export default ProductImage;
