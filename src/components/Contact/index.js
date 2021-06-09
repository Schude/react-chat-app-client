import React from 'react';
import List from './List';
import {ContactWrapper, Title} from './styles';
const Contact = ({users}) => {
    return (
        <div>
            <ContactWrapper>
                <Title> Users </Title>
                <List  users = {users} />
            </ContactWrapper>
        </div>
    );
};

export default Contact;
