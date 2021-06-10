import React, {useContext} from 'react';
import {Button} from '../Login/styles';
import {ChatForm, InputField} from './styles';
import {Context} from '../../context/ContextProvider';
const Send = () => {
    const {newMessage, setNewMessage, sendMessageToServer} =
        useContext(Context);

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessageToServer(newMessage);
        setNewMessage('');
    };
    const handleChange = (event) => {
        setNewMessage(event.target.value);
    };

    return (
        <ChatForm onSubmit={handleSendMessage}>
            <InputField
                required
                value={newMessage}
                onChange={handleChange}
                placeholder="Write message..."
            />
            <Button> Send</Button>
        </ChatForm>
    );
};

export default Send;
