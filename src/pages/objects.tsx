import {GetStaticProps} from 'next';

import Object from '@/pages-impl/Objects';
import {getObjects} from '@/services/objects';
import {ObjectImageType} from '@/domain/objectImages/types';


export type ObjectStaticProps = {
    objects: ObjectImageType[];
}


export const getStaticProps: GetStaticProps = async () => {
    const objectsRes = await getObjects();

    if (!objectsRes.ok) {
        throw new Error(`Ошибка при загрузке категорий: ${objectsRes.error}`);
    }

    const {data: {data: {objects}}} = objectsRes;

    return {
        props: {
            objects: objects,
        },
        revalidate: 5,
    };
};

export default Object;
