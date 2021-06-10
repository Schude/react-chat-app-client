import Chatbox from '../Chatbox/index';
import {useEffect, useRef, useCallback, useState} from 'react';
import socket from 'socket.io-client';
import {DashboardWrapper} from './stlyes';
import {ResponsiveContactButton} from '../Contact/styles';
import Contact from '../Contact';
import Responsive from '../Contact/Responsive';
const Dashboard = ({username}) => {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const [toggleContact, setToggleContact] = useState(false);
    const socketRef = useRef();
    // https://schude-react-chat-app.herokuapp.com/
    useEffect(() => {
        socketRef.current = socket.connect('http://localhost:5000');
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

    useEffect(() => {
        listenServer();
    }, [listenServer]);

    const sendMessageToServer = (message) => {
        let messageBody = {...currentUser, message};
        socketRef.current.emit('message', messageBody);
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
                currentUser={currentUser}
            ></Chatbox>
            <Contact users={users} />
        </DashboardWrapper>
    );
};

export default Dashboard;
