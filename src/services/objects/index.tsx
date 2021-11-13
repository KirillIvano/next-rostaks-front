import {request} from '@/services/util/request';
import {getApiUrl} from '@/services/util/getApiUrl';

import {ObjectDto, ObjectImageDto} from './dto';

export const getObjectImages = () =>
    request<{images: ObjectImageDto[]}>(getApiUrl('/objectImages/all'));

export const getObjectImageById = (objectImageId: number) =>
    request<{images: ObjectImageDto[]}>(getApiUrl(`/objectImages/${objectImageId}`));

export const getObjects = () =>
    request<{objects: ObjectDto[]}>(getApiUrl('/object/all'));

export const getObjectById = (objectId: number) =>
    request<{object: ObjectDto}>(getApiUrl(`/object/${objectId}`));
