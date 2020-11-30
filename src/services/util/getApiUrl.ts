import qs, {Stringifiable} from 'query-string';

import {SERVER_ORIGIN} from '@/settings';


export const getApiUrl = (path: string, params?: Record<string, Stringifiable>): string =>
    `${SERVER_ORIGIN}${path}?${params ? qs.stringify(params) : ''}`;

