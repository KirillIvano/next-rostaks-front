import {GetStaticPropsResult, GetStaticPropsContext} from 'next';
import {ParsedUrlQuery} from 'querystring';

import {AppStore} from './store/types';


export type EnhancedGetStaticPropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> =
    GetStaticPropsContext<Q> & {store: AppStore};

export type GetStaticProps<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    P extends { [key: string]: any } = { [key: string]: any },
    Q extends ParsedUrlQuery = ParsedUrlQuery
  > = (context: EnhancedGetStaticPropsContext<Q>) => Promise<GetStaticPropsResult<P>>
