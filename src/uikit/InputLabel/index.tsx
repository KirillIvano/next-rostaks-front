import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


type InputLabelProps = {
    id: string;
    children: React.ReactNode | string;

    className?: string;
}

const InputLabel = ({
    id,
    children,
    className,
}: InputLabelProps) => (
    <label
        className={classnames(
            className,
            styles.label,
        )}
        htmlFor={id}
    >
        {children}
    </label>
);

export default InputLabel;


