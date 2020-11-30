import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


type ButtonProps = {
    className?: string;

    type?: 'primary' | 'secondary';
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const Button = ({
    className,
    htmlType,
    type='primary',

    ...props
}: ButtonProps) => (
    <button
        {...props}

        type={htmlType}
        className={classnames(
            className,
            styles.button,
            styles[type],
        )}
    />
);

export default Button;
