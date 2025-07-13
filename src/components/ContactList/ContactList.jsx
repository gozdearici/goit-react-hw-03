import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

const ContactList = ({ searchValue, contacts, setContacts }) => {
    const handleDelete = (idToDelete) => {
        setContacts((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== idToDelete)
        );
    };

    const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(searchValue);
    });

    return (
        <div className={css.contactsContainer}>
            {filteredContacts.map((contact) => {
                return (
                    <Contact
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        phone={contact.number}
                        onDelete={handleDelete}
                    />
                );
            })}
        </div>
    );
};

export default ContactList;
