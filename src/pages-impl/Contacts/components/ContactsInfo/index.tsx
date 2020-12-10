import React from 'react';
import classnames from 'classnames';

import {MAIN_MAIL, MAIN_PHONE, SECONDARY_PHONE} from '@/consts';

import styles from './styles.module.scss';
import {DownloadButton} from '@/components';


const ContactsInfo = () => (
    <div className="container">
        <div className="row">
            <div className={classnames(
                'col-xs-12 col-md-6',
                styles.descriptionBlock,
            )}>
                <h2 className={styles.descriptionHeadline}>
                    Контактная информация
                </h2>

                <p className={styles.descriptionItem}>
                    Работаем с 8-00 до 17-00.
                </p>
                <p className={styles.descriptionItem}>
                    Обед с 12-00 до 13-00
                </p>
                <p className={styles.descriptionItem}>
                    Телефон(основной): {MAIN_PHONE}
                </p>
                <p className={styles.descriptionItem}>
                    Телефон(запасной): {SECONDARY_PHONE}
                </p>
                <p className={styles.descriptionItem}>
                    Почта: {MAIN_MAIL}
                </p>
            </div>

            <div className={classnames(
                'col-xs-12 col-md-6',
                styles.descriptionBlock,
            )}>
                <h2 className={styles.descriptionHeadline}>
                    Юридическая информация
                </h2>

                <p className={styles.descriptionItem}>
                    Наименование: ООО «ПКФ «РОСТАКС»
                </p>
                <p className={styles.descriptionItem}>
                    ИНН: 7720087569
                </p>
                <p className={styles.descriptionItem}>
                    ОГРН: 1037700140400
                </p>
            </div>

            <div className={classnames(
                'col-xs-12 col-md-6',
                styles.descriptionBlock,
            )}>
                <h2 className={styles.descriptionHeadline}>
                    Банковская информация
                </h2>

                <p className={styles.descriptionItem}>
                    Расчётный счёт: 40702810538230101798
                </p>
                <p className={styles.descriptionItem}>
                    Кор./счёт: 30101810400000000225
                </p>
                <p className={styles.descriptionItem}>
                    БИК: 044525225
                </p>
            </div>
        </div>

        <DownloadButton
            url="/legalInfo.doc"
            fileName="юр.инф. Ростакс.doc"
            className={styles.downloadInfoBtn}
        >
            Полная инфорация
        </DownloadButton>
    </div>
);

export default React.memo(ContactsInfo);
