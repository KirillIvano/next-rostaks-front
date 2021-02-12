export type MessageType = 'success' | 'error';

export type Message = {
    id: number;
    text: string;
    style: MessageType;
}

export interface IMessagesStore {
    pushMessage: (text: string, messageType: MessageType) => void;
    popMessage: () => void;
    removeMessage: (messageId: number) => void;

    messages: Message[];
}
