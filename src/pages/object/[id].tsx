import {GetStaticPaths} from 'next';

import {getObjectById, getObjectImageById, getObjectImages} from '@/services/objects';
import ProductPage from '@/pages-impl/Product';
import {ObjectImageType} from '@/domain/objectImages/types';
import {ObjectType} from '@/domain/objects/types';
import {GetStaticProps} from '@/types';


const getObjectImagesIds = async () => {
    const objectImagesPreviewsRes = await getObjectImages();

    if (!objectImagesPreviewsRes.ok) throw new Error(objectImagesPreviewsRes.error);

    const objectImagesPreviews = objectImagesPreviewsRes.data.data.objectImages;
    const objectImagesIds = objectImagesPreviews.map(({id}) => id);

    return objectImagesIds;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const objectImageIds = await getObjectImagesIds();

    return {
        paths: objectImageIds.map(id => ({params: {id: String(id)}})),
        fallback: false,
    };
};


export type ObjectPageStaticProps = {
    objectImage: ObjectImageType,
    object: ObjectType
};

export const getStaticProps: GetStaticProps<ObjectPageStaticProps> = async ({params}) => {
    const objectImageId = (params as {id: string}).id;

    const objectImageRes = await getObjectImageById(+objectImageId);
    if (!objectImageRes.ok) {
        throw new Error(objectImageRes.error);
    }

    const {data: {data: {objectImage}}} = objectImageRes;

    const {objectId} = objectImage;

    const objectRes = await getObjectById(objectId);
    if (!objectRes.ok) {
        throw new Error(objectRes.error);
    }

    const {data: {data: {object}}} = objectRes;

    return {
        props: {objectImage, object},
        revalidate: 5,
    };
};


export default ProductPage;
