import ContactList from './ContactList';
import ContactBar from './ContactBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ContactBox() {

    const [contacts,setContacts] = useState([])

    const [filter, setFilter] = useState('');

    const filterContact = (keyword) => {
        setFilter(keyword);
    }

    useEffect(() => {
        axios.get('http://localhost:3000/api/phonebooks').then(({data}) => {
            setContacts(data.phonebooks)
        }).catch ((err) => console.log(err))
    }, [setContacts])

    return (
        <div className="App-header">
                <ContactBar find={filterContact} />
                <ContactList contacts={contacts} filter={filter} />
        </div>
    )
}