import React, {createContext, useEffect, useState} from 'react';

import {useDebouncer} from '@/hooks/useDebouncer';
import {DeviceType} from '@/domain/ui/types';


const getDeviceTypeFromWidth = (width: number) =>
    width > 768 ? DeviceType.DESKTOP : DeviceType.MOBILE;

export const DeviceContext = createContext<DeviceType>(DeviceType.DESKTOP);


type WithDeviceContextProps = {
    children: React.ReactNode,
}

export const WithDeviceContext = ({children}: WithDeviceContextProps) => {
    const [deviceType, setDeviceType] = useState(DeviceType.DESKTOP);
    const debouncer = useDebouncer();

    useEffect(() => {
        const getDeviceWidth = () => window.document.documentElement.clientWidth;

        const handleResize = () => {
            const deviceWidth = getDeviceWidth();
            const updatedDeviceType = getDeviceTypeFromWidth(deviceWidth);
            setDeviceType(updatedDeviceType);
        };
        const debouncedResizeHandler = () => debouncer.fire(handleResize);

        window.addEventListener('resize', debouncedResizeHandler);
        return () => window.removeEventListener('resize', debouncedResizeHandler);
    }, [debouncer]);

    return (
        <DeviceContext.Provider value={deviceType}>
            {children}
        </DeviceContext.Provider>
    );
};
