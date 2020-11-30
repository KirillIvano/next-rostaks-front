import React from 'react';

import styles from './styles.scss';


type StandartTextContainerProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const StandartTextContainer = ({
    children,
    ...props
}: StandartTextContainerProps) => (
    <div {...props}>
        {children}
    </div>
);

export default StandartTextContainer;
