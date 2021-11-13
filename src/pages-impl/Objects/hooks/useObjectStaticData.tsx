import React, {createContext, useContext} from 'react';

import type {ObjectType} from '@/domain/objects/types';

type ObjectStaticContextType = {
    objects: ObjectType[];
}

const DEFAULT_VALUE = {
    objects: [],
};

const ObjectStaticContext = createContext<ObjectStaticContextType>(DEFAULT_VALUE);

export const WithObjectStaticData = ({children, value}: {children: React.ReactNode, value: ObjectStaticContextType}) =>
    <ObjectStaticContext.Provider value={value}>{children}</ObjectStaticContext.Provider>;

export const useObjectStaticData = () => useContext(ObjectStaticContext);
