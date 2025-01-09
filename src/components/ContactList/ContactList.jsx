import Contact from "../Contact/Contact";
import clsx from "clsx";
import s from "../ContactList/ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={clsx(s.contactList)}>
      {contacts.map((contact) => (
        <li key={contact.id} className={clsx(s.contactListItems)}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
