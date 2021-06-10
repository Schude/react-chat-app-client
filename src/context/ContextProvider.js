import React, {createContext, useState, useCallback, useRef} from 'react';
import socket from 'socket.io-client';
const ContextProvider = (props) => {
    const [username, setUsername] = useState('');
    const usernameRef = useRef('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const [toggleContact, setToggleContact] = useState(false);
    const socketRef = useRef();
    const [newMessage, setNewMessage] = useState('');

    const connectServer = useCallback(() => {
        socketRef.current = socket.connect('https://schude-react-chat-app.herokuapp.com');
        socketRef.current.emit('join', {username});
    }, [username]);

    const listenServer = useCallback(() => {
        socketRef.current.on('message', (data) => {
            setMessages((prev) => [...prev, data]);
        });
        socketRef.current.on('currentUser', (currentUser) => {
            console.log(currentUser);
            setCurrentUser(currentUser);
        });
        socketRef.current.on('updateUsers', (users) => {
            setUsers([...users]);
        });
    }, [socketRef]);

    const sendMessageToServer = (message) => {
        let messageBody = {...currentUser, message};
        socketRef.current.emit('message', messageBody);
    };

    return (
        <Context.Provider
            value={{
                username,
                setUsername,
                usernameRef,
                messages,
                setMessages,
                users,
                setUsers,
                currentUser,
                setCurrentUser,
                toggleContact,
                setToggleContact,
                socketRef,
                listenServer,
                sendMessageToServer,
                newMessage,
                setNewMessage,
                connectServer,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export const Context = createContext();
export default ContextProvider;
