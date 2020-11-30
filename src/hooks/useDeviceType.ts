import {useContext} from 'react';

import {DeviceContext} from '@/contexts/DeviceContext';


export const useDeviceType = () => useContext(DeviceContext);
