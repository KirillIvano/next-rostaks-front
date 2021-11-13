import React from 'react';
import cn from 'classnames';

import {Box} from '@/uikit';
import type {ObjectStaticProps} from '@/pages/objects';

import {WithObjectStaticData} from './hooks/useObjectStaticData';
import styles from './styles.module.scss';
import ObjectsList from './components/ObjectsList';
import {ErrorPage} from '@/components';

type ObjectsPageProps = {
    pageProps: ObjectStaticProps
}

const ObjectsPage = ({pageProps}: ObjectsPageProps) => {
    if (pageProps.error) return <ErrorPage />;

    return (
        <WithObjectStaticData value={pageProps}>
            <Box className={cn(styles.objectsPage, 'container')}>
                <h1
                    className={styles.pageHeadline}
                >
                    Наши объекты
                </h1>

                <ObjectsList />
            </Box>
        </WithObjectStaticData>
    );
};

export default ObjectsPage;
