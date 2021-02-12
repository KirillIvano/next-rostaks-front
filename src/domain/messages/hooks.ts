import {createContext, useContext} from 'react';

import {MessagesStore} from '@/store/messages';

import {IMessagesStore} from './types';


const messagesStore = new MessagesStore();

const MessagesContext = createContext<IMessagesStore>(messagesStore);

export const useMessages = (): IMessagesStore =>
    useContext(MessagesContext);
