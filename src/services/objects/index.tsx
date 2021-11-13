import {request} from '@/services/util/request';
import {getApiUrl} from '@/services/util/getApiUrl';

import {ObjectDto, ObjectImageDto} from './dto';



export const getObjectImages = () =>
    request<{products: ObjectImageDto[]}>(getApiUrl('/objectImages/all'));

export const getObjectImageById = (objectImageId: number) =>
    request<{products: ObjectImageDto[]}>(getApiUrl(`/objectImages/${objectImageId}`));

export const getObjects = () =>
    request<{categories: ObjectDto[]}>(getApiUrl('/object/all'));

export const getObjectById = (categoryId: number) =>
    request<{category: ObjectDto}>(getApiUrl(`/object/${categoryId}`));
