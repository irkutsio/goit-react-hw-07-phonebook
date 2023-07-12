

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterInput } from './FilterInput/FilterInput';

export const App = () => {


  return (
    <div style={{ padding: '36px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterInput />
      <ContactList />
    </div>
  );
};
