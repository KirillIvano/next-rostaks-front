import {IMAGES_ORIGIN} from '@/settings';

const isLink = (src: string) => src.startsWith('http');

const getImageUrlForApi = (name: string) => `${IMAGES_ORIGIN}/static/${name}`;


// Если src - не ссылка, то это имя картинки, пришедшее с API
export const getImageUrl = (src: string) =>
    isLink(src) ? src : getImageUrlForApi(src);
