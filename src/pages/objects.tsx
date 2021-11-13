import {GetStaticProps} from 'next';

import Object from '@/pages-impl/Objects';
import {getObjects} from '@/services/objects';
import {ObjectType} from '@/domain/objects/types';


const enhanceStaticPropsRes = (props: ObjectStaticProps) => ({
    props,
    revalidate: 5,
});

export type ObjectStaticProps = {
    objects: ObjectType[];
    error: false;
} | {error: true};
export const getStaticProps: GetStaticProps = async () => {
    const objectsRes = await getObjects();

    if (!objectsRes.ok) {
        return enhanceStaticPropsRes({error: true});
    }

    const {data: {objects}} = objectsRes;

    return enhanceStaticPropsRes({objects, error: false});
};

export default Object;
