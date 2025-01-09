import "../App/App.module.css";
import initialContacts from "../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect, useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContactData = JSON.parse(localStorage.getItem("key-saveContact"));
    if (saveContactData != null) {
      return saveContactData;
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("key-saveContact", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(newContact) {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  }

  function deleteContact(contactId) {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  }

  const visibleFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleFilter} onDelete={deleteContact} />
    </div>
  );
}
