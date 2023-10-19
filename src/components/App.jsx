import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts.jsx';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  return (
    <section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactFilter />
        <Contacts />
      </div>
    </section>
  );
};
