import React from "react";
import { Button } from "../Login/styles";
import { ChatForm, InputField } from "./styles";
const Send = ({ newMessage, handleChange, handleSubmit }) => {
    return (
        <ChatForm onSubmit={handleSubmit}>
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
