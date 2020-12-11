import React from 'react';


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
