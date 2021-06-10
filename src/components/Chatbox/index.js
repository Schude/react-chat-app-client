import React from 'react';
import {ChatboxWrapper} from './styles';
import Chat from './ChatFlow';
import Send from './ChatForm';

const Chatbox = () => {
    return (
        <ChatboxWrapper>
            <Chat />
            <Send />
        </ChatboxWrapper>
    );
};

export default Chatbox;
