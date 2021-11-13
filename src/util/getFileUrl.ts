import {IMAGES_ORIGIN} from '@/settings';


export const getFileUrl = (path: string) =>
    `${IMAGES_ORIGIN}/static/${path}`;
