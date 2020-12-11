import React from 'react';

import {MAIN_MAIL, MAIN_PHONE} from '@/consts';
import {PhoneWrapper} from '@/components';

import styles from './styles.module.scss';


const HeaderContacts = () => (
    <div className={styles.headerContacts}>
        <PhoneWrapper className={styles.phone} phone={MAIN_PHONE} />

        <p className={styles.mail}>{MAIN_MAIL}</p>
    </div>
);


export default HeaderContacts;
