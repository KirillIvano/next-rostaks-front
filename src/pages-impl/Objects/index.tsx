import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';
import ObjectsList from './components/ObjectsList';


const ObjectsPage = () => {
    return (
        <div className={classnames(styles.objectsPage, 'container')}>
            <h1
                className={classnames(styles.pageHeadline)}
            >
                Наши объекты
            </h1>

            <ObjectsList />
        </div>
    );
};

export default ObjectsPage;
