import React from 'react';
import classnames from 'classnames';

import {ContactsMap, ContactsInfo} from './components';
import styles from './styles.module.scss';


const ContactsPage = () => {
    return (
        <div className={styles.contactsPage}>
            <h1
                className={classnames(styles.pageHeadline, 'container')}
            >
                Контакты
            </h1>

            <ContactsMap className={styles.contactsMap} />

            <ContactsInfo />
        </div>
    );
};

export default ContactsPage;
