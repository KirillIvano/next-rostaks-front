import React from 'react';
import {observer} from 'mobx-react-lite';

import {useMessages} from '@/domain/messages/hooks';

import {Message} from './components';
import styles from './styles.module.scss';


const MessagesBox = observer(() => {
    const {messages} = useMessages();

    return (
        <div className={styles.messagesBox}>
            {messages.map(({id, text, style}) => (
                <Message
                    key={id}
                    id={id}
                    text={text}
                    style={style}
                />
            ))}
        </div>
    );
});

export default MessagesBox;
