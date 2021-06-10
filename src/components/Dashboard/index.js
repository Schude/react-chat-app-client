import Chatbox from '../Chatbox/index';
import {useEffect, useContext} from 'react';
import {DashboardWrapper} from './stlyes';
import {ResponsiveContactButton} from '../Contact/styles';
import Contact from '../Contact';
import Responsive from '../Contact/Responsive';

import {Context} from '../../context/ContextProvider';
const Dashboard = () => {
    const {toggleContact, setToggleContact, listenServer, connectServer} =
        useContext(Context);

    useEffect(() => {
        connectServer();
    }, [connectServer]);

    useEffect(() => {
        listenServer();
    }, [listenServer]);

    return (
        <DashboardWrapper>
            <ResponsiveContactButton
                onClick={() => setToggleContact((prev) => (prev = !prev))}
            >
                Contacts
            </ResponsiveContactButton>
            {toggleContact && <Responsive />}

            <Chatbox></Chatbox>
            <Contact />
        </DashboardWrapper>
    );
};

export default Dashboard;
