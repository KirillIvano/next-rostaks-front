import React, {createContext, useContext} from 'react';

import {CatalogStaticProps} from '@/pages/catalog';


const DEFAULT_VALUE: CatalogStaticProps = {
    categories: [],
};

const CategoryStaticContext = createContext(DEFAULT_VALUE);

export const WithCatalogStaticData = ({children, value}: {children: React.ReactNode, value: CatalogStaticProps}) =>
    <CategoryStaticContext.Provider value={value}>{children}</CategoryStaticContext.Provider>;

export const useCatalogStaticData = () => useContext(CategoryStaticContext);
