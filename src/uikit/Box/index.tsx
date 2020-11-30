import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


type BoxProps = {
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>

const Box = (
    {
        className,
        children,
        ...props
    }: BoxProps,
    ref?: React.Ref<HTMLDivElement>,
) => (
    <div
        className={classnames(styles.grid, className)}
        ref={ref}

        {...props}
    >
        {children}
    </div>
);


export default React.forwardRef(Box);
