import { useState } from 'react';
import './App.css'
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactForm from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';


function App() {
  const contactList = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

  const [searchTerm, setSearchTerm] = useState("");

  const [contacts, setContacts] = useState(contactList);

  const handleAddContact = (newContact) => {
    setContacts(prev => [...prev, { ...newContact, id: nanoid() }]);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact}/>
      <SearchBox value={searchTerm} onChange={setSearchTerm}/>
      <ContactList searchValue={searchTerm} setContacts={setContacts} contacts={contacts}/>
    </>
  )
}

export default App
