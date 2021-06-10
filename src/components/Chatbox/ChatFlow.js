import React, {useEffect, useContext} from 'react';
import {Context} from '../../context/ContextProvider';
import {ChatFlow, Message, Sender, MessageText} from './styles';
const Chat = () => {
    const {messages, currentUser,playSound} = useContext(Context);

    //keeps scroll at bottom
    useEffect(() => {
        var element = document.getElementById('chat-flow');
        element.scrollTop = element.scrollHeight;
        playSound()
    }, [messages, playSound]);

    return (
        <ChatFlow id="chat-flow">
            {messages &&
                messages.map((mes, i) => (
                    <Message
                        key={i}
                        flex={
                            mes.clientId !== currentUser.clientId
                                ? 'flex-start'
                                : 'flex-end'
                        }
                    >
                        <Sender
                            clr={
                                mes.clientId !== currentUser.clientId
                                    ? '#00b4fd'
                                    : '#f96368'
                            }
                        >
                            {' '}
                            {mes.username}
                        </Sender>
                        <MessageText
                            bgClr={
                                mes.clientId !== currentUser.clientId
                                    ? '#00b4fd'
                                    : '#f96368'
                            }
                        >
                            {mes.message}{' '}
                        </MessageText>
                    </Message>
                ))}
        </ChatFlow>
    );
};

export default Chat;
