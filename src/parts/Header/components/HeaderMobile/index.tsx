import React from 'react';

import styles from './styles.module.scss';
import {Logo, HeaderContacts, MobileNav} from '..';

const HeaderMobile = () => (
    <div className={styles.header}>
        <div className={styles.headerInfo}>
            <Logo size={50} />
            <HeaderContacts />
        </div>

        <MobileNav />
    </div>
);

export default HeaderMobile;
