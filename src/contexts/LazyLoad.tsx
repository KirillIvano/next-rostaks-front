import {Debouncer} from '@/util/debouncer';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';


type LazyLoadContextType = {
    position: number;
}

const LazyLoadContext = createContext<LazyLoadContextType>({position: 0});


type LazyLoadProviderProps = {
    children: React.ReactNode;
}
export const LazyLoadProvider = ({
    children,
}: LazyLoadProviderProps) => {
    const [currentScroll, setCurrentScroll] = useState(0);

    const value = useMemo<LazyLoadContextType>(
        () => ({position: currentScroll}),
        [currentScroll],
    );

    useEffect(() => {
        const debouncer = new Debouncer(100);
        const handleScroll = () => {
            debouncer.fire(() => setCurrentScroll(pageYOffset));
        };

        const intervalId = setInterval(handleScroll, 300);
        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('scroll', handleScroll);
            debouncer.cancel();
        };
    }, []);

    return (
        <LazyLoadContext.Provider
            value={value}
        >
            {children}
        </LazyLoadContext.Provider>
    );
};


export const useLazyLoadContext = () => useContext(LazyLoadContext);
