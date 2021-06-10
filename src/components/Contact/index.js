import React from 'react';
import List from './List';
import {ContactWrapper, Title} from './styles';
const Contact = () => {
    return (
        <div>
            <ContactWrapper>
                <Title> Users </Title>
                <List />
            </ContactWrapper>
        </div>
    );
};

export default Contact;
