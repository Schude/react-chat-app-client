import React from 'react'
import { ContactList,ContactItem } from './styles'
const List = ( {users}) => {
    return (
        <ContactList>
                    {users &&
                        users.map((user) => (
                            <ContactItem key={user.clientId}>
                                {user.username}
                            </ContactItem>
                        ))}
                </ContactList>
    )
}

export default List
