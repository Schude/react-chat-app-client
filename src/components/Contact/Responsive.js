import React from 'react';
import List from './List';
import {ResponsiveContact, Title} from './styles';
const Contact = () => {
    return (
        <div>
            <ResponsiveContact>
                <Title> Users </Title>
                <List />
            </ResponsiveContact>
        </div>
    );
};

export default Contact;
