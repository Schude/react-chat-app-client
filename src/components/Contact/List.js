import React, {useContext} from 'react';
import {ContactList, ContactItem} from './styles';
import {Context} from '../../context/ContextProvider';
const List = () => {
    const {users} = useContext(Context);
    return (
        <ContactList>
            {users &&
                users.map((user) => (
                    <ContactItem key={user.clientId}>
                        {user.username}
                    </ContactItem>
                ))}
        </ContactList>
    );
};

export default List;
