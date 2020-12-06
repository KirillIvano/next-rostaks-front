import React, {createContext, useContext} from 'react';

import {ProductPageStaticProps} from '@/pages/product/[id]';


const DEFAULT_STATE: ProductPageStaticProps = {
    product: null,
    category: null,
} as unknown as ProductPageStaticProps;

const StaticProductPageContext = createContext<ProductPageStaticProps>(DEFAULT_STATE);


type WrapperProps = {
    children: React.ReactNode;
    value: ProductPageStaticProps;
}

export const WithProductStaticData = ({
    children,
    value,
}: WrapperProps) => (
    <StaticProductPageContext.Provider value={value}>
        {children}
    </StaticProductPageContext.Provider>
);


export const usePageStaticData = () => useContext(StaticProductPageContext);
