import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';

import {
    getAboutPath,
    getCatalogPath,
    getColorsPath,
    getContactsPath,
    getDeliveryPath,
} from '@/routes';

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
            <DesktopNavItem
                name={'Каталог'}
                path={getCatalogPath()}
                isSelected={getCatalogPath() === route}
            />

            <DesktopNavItem
                name={'Колеровка'}
                path={getColorsPath()}
                isSelected={getColorsPath() === route}
            />

            <DesktopNavItem
                name={'Доставка'}
                path={getDeliveryPath()}
                isSelected={getDeliveryPath() === route}
            />

            <DesktopNavItem
                name={'О нас'}
                path={getAboutPath()}
                isSelected={getAboutPath() === route}
            />

            <DesktopNavItem
                name={'Контакты'}
                path={getContactsPath()}
                isSelected={getContactsPath() === route}
            />
        </ul>
    );
};

export default React.memo(DesktopNav);
