import React, { useState } from "react";
import { ChatboxWrapper } from "./styles";
import Chat from "./ChatFlow";
import Send from "./ChatForm";
const Chatbox = ({ sendMessageToServer, messages, user }) => {
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessageToServer(newMessage);
        setNewMessage("");
    };
    const handleChange = (event) => {
        setNewMessage(event.target.value);
    };
    return (
        <ChatboxWrapper>
            <Chat user={user} messages={messages} />
            <Send
                handleChange={handleChange}
                handleSubmit={handleSendMessage}
                newMessage={newMessage}
            />
        </ChatboxWrapper>
    );
};

export default Chatbox;
