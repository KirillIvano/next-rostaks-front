import {observable, makeObservable, action, computed} from 'mobx';

import {IMessagesStore, Message, MessageType} from '@/domain/messages/types';


const DEFAULT_MESSAGE_ID = 1;

export class MessagesStore implements IMessagesStore {
    currentMessageId = DEFAULT_MESSAGE_ID;

    @observable.ref
    private _messages: Message[] = [];

    @computed
    get messages(): Message[] {
        return this._messages;
    }

    private getNextId(): number {
        return this.currentMessageId++;
    }

    @action
    pushMessage(text: string, messageType: MessageType) {
        const currentId = this.getNextId();
        const addedMessage: Message = {
            text,
            style: messageType,
            id: currentId,
        };

        this._messages = [...this._messages, addedMessage];

        setTimeout(() => {
            this.removeMessage(currentId);
        }, 10000);
    }

    @action
    popMessage() {
        this._messages = this._messages.slice(0, this._messages.length - 1);
    }

    @action
    removeMessage(messageId: number): void {
        this._messages = this._messages.filter(({id}) => id !== messageId);
    }

    constructor() {
        makeObservable(this);
    }
}
