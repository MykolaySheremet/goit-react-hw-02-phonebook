export const ContactList = ({ datacontacts, deleteContacts }) => {
    return (
        <ul>
            {datacontacts.map(item => (
                <li key={item.id}>
                    <p>{item.name} : {item.number}
                    </p>
                    <button
                        type="button"
                        onClick={()=>deleteContacts(item.id)}
                        >Delete</button>
                </li>
            ))}
        </ul>
    )
    
}