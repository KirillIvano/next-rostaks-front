import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';

import {ROUTES_NAMES} from '@/routes';

import styles from './styles.module.scss';


type DesktopNavItemProps = {
    path: string;
    name: string;
    isSelected: boolean;
}

export const DesktopNavItem = ({
    path,
    name,
    isSelected,
}: DesktopNavItemProps) => (
    <Link href={path}>
        <a
            className={classnames(
                styles.navItem,
                {[styles.selected]: isSelected},
            )}
        >
            {name}
        </a>
    </Link>
);


type DesktopNavProps = {
    className?: string;
}

const DesktopNav = ({className}: DesktopNavProps) => {
    const {route} = useRouter();

    return (
        <ul
            className={classnames(
                styles.nav,
                className,
            )}
        >
            {Object.entries(ROUTES_NAMES).map(
                ([path, name]) => (
                    <DesktopNavItem
                        key={path}
                        name={name}
                        path={path}
                        isSelected={route.startsWith(path)}
                    />
                ),
            )}
        </ul>
    );
};

export default React.memo(DesktopNav);
