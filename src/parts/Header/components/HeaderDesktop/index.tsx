import React from 'react';

import styles from './styles.module.scss';
import {
    DesktopNav,
    Logo,
    HeaderContacts,
} from '..';


const HeaderDesktop = () => (
    <div className={styles.header}>
        <Logo size={60} />
        <DesktopNav />
        <HeaderContacts />
    </div>
);

export default HeaderDesktop;
