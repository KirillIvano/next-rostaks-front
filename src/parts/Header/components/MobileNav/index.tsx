import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import classnames from 'classnames';

import {ROUTES_NAMES} from '@/routes';

import styles from './styles.module.scss';


type MobileNavItemProps = {
    name: string;
    path: string;
    isSelected: boolean;
}

export const MobileNavItem = ({
    name,
    path,
    isSelected,
}: MobileNavItemProps) => (
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

const MobileNav = () => {
    const {route} = useRouter();

    return (
        <ul className={styles.nav}>
            {Object.entries(ROUTES_NAMES).map(([path, name]) => (
                <MobileNavItem
                    key={path}
                    name={name}
                    path={path}
                    isSelected={route.startsWith(path)}
                />
            ))}
        </ul>
    );
};

export default React.memo(MobileNav);
