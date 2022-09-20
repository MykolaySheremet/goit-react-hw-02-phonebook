import { ItemContacts,ListContacts } from './ContactList.styled';

export const ContactList = ({ datacontacts, deleteContacts }) => {
    return (
        <ListContacts>
            {datacontacts.map(item => (
                <ItemContacts key={item.id}>
                    <p>{item.name} : {item.number}
                    </p>
                    <button
                        type="button"
                        onClick={()=>deleteContacts(item.id)}
                        >Delete</button>
                </ItemContacts>
            ))}
        </ListContacts>
    )
    
}