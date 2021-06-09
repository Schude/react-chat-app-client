import React from 'react';
import List from './List';
import {ResponsiveContact, Title} from './styles';
const Contact = ({users}) => {
    return (
        <div>
            <ResponsiveContact>
                <Title> Users </Title>
                <List  users = {users} />
            </ResponsiveContact>
        </div>
    );
};

export default Contact;
