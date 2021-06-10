import React, {createContext, useState, useCallback, useRef} from 'react';
import socket from 'socket.io-client';
import {
    JoinSound,
    DisconnectSound,
    NewMessageSound,
    ConnectSound,
} from '../assests/sounds';
import useSound from 'use-sound';
const ContextProvider = (props) => {
    const [username, setUsername] = useState('');
    const usernameRef = useRef('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const [toggleContact, setToggleContact] = useState(false);
    const socketRef = useRef();
    const [newMessage, setNewMessage] = useState('');
    const [joinSound] = useSound(JoinSound, {volume: 0.4});
    const [disconnectSound] = useSound(DisconnectSound, {volume: 0.4});
    const [newMessageSound] = useSound(NewMessageSound, {volume: 0.4});
    const [connectSound] = useSound(ConnectSound, {volume: 0.4});

    const connectServer = useCallback(() => {
        socketRef.current = socket.connect('https://schude-react-chat-app.herokuapp.com/');
        socketRef.current.emit('join', {username});
        connectSound();
    }, [connectSound, username]);

    const listenServer = useCallback(() => {
        socketRef.current.on('message', (data) => {
            setMessages((prev) => [...prev, data]);
        });
        socketRef.current.on('currentUser', (currentUser) => {
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

    const getSound = useCallback(
        (lastMes) => {
            if (lastMes.message === `${lastMes.username} has joined chat!`) {
                return joinSound();
            } else if (
                lastMes.message === `${lastMes.username} has left chat!`
            ) {
                return disconnectSound();
            } else {
                return newMessageSound();
            }
        },
        [disconnectSound, joinSound, newMessageSound]
    );
    const playSound = useCallback(() => {
        if (messages.length > 0) {
            let lastMes = messages[messages.length - 1];
            if (lastMes.clientId !== currentUser.clientId) {
                getSound(lastMes);
            }
        }
    }, [currentUser, getSound, messages]);

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
                playSound,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export const Context = createContext();
export default ContextProvider;
