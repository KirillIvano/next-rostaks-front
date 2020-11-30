import React from 'react';
import classnames from 'classnames';

import {useUniqueId} from '@/hooks/useUniqueId';

import styles from './styles.module.scss';
import { InputLabel } from '..';


type TextInputProps = {
    labelText: React.ReactNode | string;

    wrapperClass?: string;
    labelClass?: string;
    type?: 'text' | 'email' | 'phone' | 'number';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

const TextInput = ({
    labelText,

    wrapperClass,
    labelClass,
    type='text',
    id,

    ...props
}: TextInputProps) => {
    const artificialId = useUniqueId();

    const resultingId = id ?? artificialId;

    return (
        <div className={classnames(
            wrapperClass,
            styles.inputWrapper,
        )}>
            <InputLabel id={resultingId}>
                {labelText}
            </InputLabel>

            <input
                {...props}

                className={classnames(
                    labelClass,
                    styles.input,
                )}

                id={resultingId}
                type={type}
            />
        </div>
    );
};

export default TextInput;

