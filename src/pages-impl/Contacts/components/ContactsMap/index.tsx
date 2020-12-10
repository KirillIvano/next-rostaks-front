import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


const OFFICE_MAP_LINK = 'https://yandex.ru/map-widget/v1/' +
    '?um=constructor%3A38095a66b7c3457254f20f95b548192ef1ac73fb92b5ce2bfe375946e2ff233d&amp;source=constructor';

type ContactsMapProps = {
    className?: string;
}

const ContactsMap = ({
    className,
}: ContactsMapProps) => (
    <div
        className={classnames(
            styles.mapWrapper,
            className,
        )}
    >
        <iframe
            src={OFFICE_MAP_LINK}
            className={styles.contactsMap}
            frameBorder="0"
        />
    </div>
);


export default ContactsMap;
