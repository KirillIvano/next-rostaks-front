import React from 'react';
import classnames from 'classnames';

import {MessageType} from '@/domain/messages/types';

import styles from './styles.module.scss';
import {useMessages} from '@/domain/messages/hooks';


export type MessageProps = {
    id: number;
    text: string;
    style: MessageType;

    className?: string;
}

const Message = ({
    id,
    text,
    style,

    className,
}: MessageProps) => {
    const messagesStore = useMessages();

    return (
        <div
            className={classnames(
                className,
                styles.message,
                styles[`message_${style}`],
            )}
            onClick={() => messagesStore.removeMessage(id)}
        >
            <p className={styles.messageText}>
                {text}
            </p>
        </div>
    );
};

export default Message;
