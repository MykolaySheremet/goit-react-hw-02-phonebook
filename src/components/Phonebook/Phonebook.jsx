import React from "react";
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid'

export class Phonebook extends React.Component { 

    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
}

    
    dataHandleSubmit = data => {

        const newContact = {
            id: nanoid(),
            name: data.name,
            number: data.number
        }

        this.setState(prevState => ({
            contacts: [newContact, ...prevState.contacts]
        }))
    }

    changeFilter = e => {
        
        this.setState({ filter: e.currentTarget.value })
        
    }

    deleteContacts = idDeleteContacts => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(item =>item.id !== idDeleteContacts )

        }))
    }    

    render() {

        const normalizeFilter = this.state.filter.toLowerCase();

        const contactsFilter = this.state.contacts.filter(item => item.name.toLowerCase().includes(normalizeFilter))
        
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm dataSubmit={this.dataHandleSubmit}></ContactForm>
                <h2>Contacts</h2>
                <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
                <ContactList
                    datacontacts={contactsFilter}
                    deleteContacts={this.deleteContacts}
                ></ContactList>
            </div>
                

            
        )
    }

}
