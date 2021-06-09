import React, {useEffect} from 'react';
import {ChatFlow, Message, Sender, MessageText} from './styles';
const Chat = ({user, messages}) => {
    //keeps scroll at bottom
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
                            mes.user.id !== user.id ? 'flex-start' : 'flex-end'
                        }
                    >
                        <Sender
                            clr={
                                mes.user.id !== user.id ? '#00b4fd' : '#f96368'
                            }
                        >
                            {' '}
                            {mes.user.username}
                        </Sender>
                        <MessageText
                            bgClr={
                                mes.user.id !== user.id ? '#00b4fd' : '#f96368'
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
