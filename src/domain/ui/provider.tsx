import React, {createContext, useContext} from 'react';

import {UIStore} from './store';


interface UIStateInterface {
    isNavOpened: boolean;
    setNavVisibility: (isOpen: boolean) => void;
}

export const UIContext = createContext<UIStateInterface>(new UIStore());

export const WithUIContext = ({children, value}: {children: React.ReactNode, value: UIStateInterface}) => (
    <UIContext.Provider value={value}>
        {children}
    </UIContext.Provider>
);

export const useUIStore = (): UIStateInterface => useContext(UIContext);
