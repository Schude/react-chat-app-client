import React from 'react';
import List from './List';
import {ResponsiveContact} from './styles';
const Contact = () => {
    return (
        <div>
            <ResponsiveContact>
                <List />
            </ResponsiveContact>
        </div>
    );
};

export default Contact;
