import Chatbox from '../Chatbox/index';
import {useEffect, useRef, useCallback, useState} from 'react';
import socket from 'socket.io-client';
import {DashboardWrapper} from './stlyes';
import {ResponsiveContactButton} from '../Contact/styles';
import Contact from '../Contact';
import Responsive from '../Contact/Responsive';
const Dashboard = ({user}) => {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [toggleContact, setToggleContact] = useState(false);
    const socketRef = useRef();
    useEffect(() => {
        socketRef.current = socket.connect('https://schude-react-chat-app.herokuapp.com/');
        socketRef.current.emit('join', user);
        socketRef.current.emit('users', user);
    }, [user]);

    const listenServer = useCallback(() => {
        socketRef.current.on('message', (data) => {
            setMessages((prev) => [...prev, data]);
        });
        socketRef.current.on('users', (users) => {
            setUsers([...users]);
        });
    }, [socketRef]);

    useEffect(() => {
        listenServer();
    }, [listenServer]);

    const sendMessageToServer = (message) => {
        socketRef.current.emit('message', {user, message});
    };
    return (
        <DashboardWrapper>
            <ResponsiveContactButton
                onClick={() => setToggleContact((prev) => (prev = !prev))}
            >
                Contacts
            </ResponsiveContactButton>
            {toggleContact && <Responsive users={users} />}
            <Chatbox
                sendMessageToServer={sendMessageToServer}
                messages={messages}
                user={user}
            ></Chatbox>
            <Contact users={users} />
        </DashboardWrapper>
    );
};

export default Dashboard;
