import React, {useCallback, useEffect, useState} from 'react';
import classnames from 'classnames';
import {useRouter} from 'next/router';

import {CategoryPreview} from '@/components';

import styles from './styles.module.scss';

import {getObjects} from '@/services/objects';
import {useObjectId} from '../../hooks/useObjectId';

import Link from 'next/link';


type CatalogCategoriesProps = {
    className?: string;
}

const ObjectsList = ({className}: CatalogCategoriesProps) => {
    const [data, setData] = useState(null);
    const objectId = useObjectId();

    useEffect(() => {
        const getData = async () => {
            const res = await getObjects();
            const {data: {data: {objects}}} = res;

            objects && setData(objects);
        };
        getData();
    }, []);

    if (data === null) return <div>Loading...</div>;
    // setError 

    return (
        <div
            className={classnames(
                className,
                'row',
            )}
        >
            <div
                className="col-md-3 col-xs-6"
            >
                <CategoryPreview
                    name="Все"
                    image="https://a.d-cd.net/2ef6706s-960.jpg"

                    className={styles.categoryPreview}
                    onSelect={() => handleSelect(null)}
                    selected={objectId === null}
                />
            </div>

            {data?.map(
                object => (
                    <div
                        className="col-md-3 col-xs-6"
                        key={object.id}
                    >
                        {object.name}
                        {/* <CategoryPreview
                            {...object}

                            // className={styles.categoryPreview}
                            onSelect={() => handleSelect(object.id)}
                            selected={objectId === object.id}
                        /> */}
                    </div>
                ),
            )}
        </div>
    );
};

export default ObjectsList;
