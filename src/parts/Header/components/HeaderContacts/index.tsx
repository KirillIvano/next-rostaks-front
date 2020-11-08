import React from 'react';

import {MAIN_MAIL, MAIN_PHONE} from '@/consts';

import styles from './styles.module.scss';


const HeaderContacts = () => (
    <div className={styles.headerContacts}>
        <p className={styles.phone}>{MAIN_PHONE}</p>
        <p className={styles.mail}>{MAIN_MAIL}</p>
    </div>
);

export default HeaderContacts;
