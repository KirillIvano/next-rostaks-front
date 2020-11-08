import React from 'react';

import {DesktopContent, MobileContent} from '@/uikit';

import styles from './styles.module.scss';
import {HeaderDesktop, HeaderMobile} from './components';


const Header = () => (
    <header className={styles.header}>
        <MobileContent>
            <HeaderMobile />
        </MobileContent>
        <DesktopContent>
            <HeaderDesktop />
        </DesktopContent>
    </header>
);

export default Header;
