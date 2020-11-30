import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


type RenderForDeviceProps = React.HTMLAttributes<HTMLDivElement>;

export const MobileContent = ({
    className,
    children,
    ...props
}: RenderForDeviceProps) => (
    <div
        className={classnames(
            styles.mobileVisible,
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

export const DesktopContent = ({
    className,
    children,
    ...props
}: RenderForDeviceProps) => (
    <div
        className={classnames(
            styles.desktopVisible,
            className,
        )}
        {...props}
    >
        {children}
    </div>
);
