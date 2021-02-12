import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import classnames from 'classnames';

import {
    getAboutPath,
    getCatalogPath,
    getColorsPath,
    getContactsPath,
    getDeliveryPath,
} from '@/routes';

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
        <>
            <ul className={styles.nav}>
                <MobileNavItem
                    name={'Каталог'}
                    path={getCatalogPath()}
                    isSelected={getCatalogPath() === route}
                />

                <MobileNavItem
                    name={'Контакты'}
                    path={getContactsPath()}
                    isSelected={getContactsPath() === route}
                />

                <MobileNavItem
                    name={'Доставка'}
                    path={getDeliveryPath()}
                    isSelected={getDeliveryPath() === route}
                />
            </ul>

            <ul className={styles.nav}>
                <MobileNavItem
                    name={'О нас'}
                    path={getAboutPath()}
                    isSelected={getAboutPath() === route}
                />

                <MobileNavItem
                    name={'Колеровка'}
                    path={getColorsPath()}
                    isSelected={getColorsPath() === route}
                />

                {/* dirty hack */}
                <div className={styles.navItem} />
            </ul>
        </>
    );
};

export default React.memo(MobileNav);
