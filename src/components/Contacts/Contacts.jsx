import React from "react";
import {Form} from  './Form'

export class Contacts extends React.Component { 

    state = {
        contacts: [],
        name: '',
        number: ''
    }
    
    dataHandleSubmit = data => {
        console.log(data);
    }
    

    render() {
        
        return (
            <>
                <Form dataSubmit={this.dataHandleSubmit}></Form>
                {!this.state.contacts.length === 0 &&
                    <div>
                        <h1>Phonebook</h1>
                        <div />
                            <h2>Contacts</h2>
                            <input/>
                        <div/>
                    </div>}
            </>
            
        )
    }

}
