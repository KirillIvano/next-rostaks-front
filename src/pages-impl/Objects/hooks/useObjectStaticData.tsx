import React, {createContext, useContext} from 'react';

import {ObjectStaticProps} from '@/pages/objects';


const DEFAULT_VALUE: ObjectStaticProps = {
    objects: [],
};

const ObjectStaticContext = createContext(DEFAULT_VALUE);

export const WithObjectStaticData = ({children, value}: {children: React.ReactNode, value: ObjectStaticProps}) =>
    <ObjectStaticContext.Provider value={value}>{children}</ObjectStaticContext.Provider>;

export const useObjectStaticData = () => useContext(ObjectStaticContext);
