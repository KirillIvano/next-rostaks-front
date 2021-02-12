import React, {createContext, useContext} from 'react';

import {CatalogStore} from '../localStore';
import {useConstant} from '@/hooks/useConstant';
import {useCategoryId} from './useCategoryId';


export const CatalogStoreContext = createContext(new CatalogStore());
export const useCatalogStore = () => useContext(CatalogStoreContext);


export const withCatalogStore = <TProps extends Record<string, unknown>,>(
    Comp: React.ComponentType<TProps>,
) => {
    const MemoComp = React.memo(Comp);

    const WithCatalogStore = (props: TProps) => {
        const id = useCategoryId();
        const store = useConstant(() => new CatalogStore(), [id]);

        return (
            <CatalogStoreContext.Provider value={store}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <MemoComp {...props as any} />
            </CatalogStoreContext.Provider>
        );
    };

    return WithCatalogStore;
};

