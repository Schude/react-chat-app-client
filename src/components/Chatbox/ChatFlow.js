import React, {useEffect} from 'react';
import {ChatFlow, Message, Sender, MessageText} from './styles';
const Chat = ({currentUser, messages}) => {
    //keeps scroll at bottom
    console.log(currentUser,messages)
    useEffect(() => {
        var element = document.getElementById('chat-flow');
        element.scrollTop = element.scrollHeight;
    }, [messages]);
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
