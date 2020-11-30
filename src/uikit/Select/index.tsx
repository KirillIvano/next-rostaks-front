import React from 'react';
import classnames from 'classnames';

import {useUniqueId} from '@/hooks/useUniqueId';

import styles from './styles.module.scss';
import {InputLabel} from '..';


type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>

const Option = (props: SelectOptionProps) => <option {...props} />;


type SelectProps = {
    labelText: React.ReactNode | string;

    wrapperClass?: string;
    labelClass?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
    labelText,
    wrapperClass,
    labelClass,
    className,

    id,
    children,

    ...props
}: SelectProps) => {
    const artificialId = useUniqueId();

    const resultingId = id ?? artificialId;

    return (
        <div className={classnames(styles.selectWrapper, wrapperClass)}>
            <InputLabel
                id={resultingId}
                className={labelClass}
            >
                {labelText}
            </InputLabel>

            <select
                className={classnames(
                    styles.select,
                    className,
                )}

                {...props}
            >
                {children}
            </select>
        </div>
    );
};


Select.Option = Option;

export default Select;
