import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectedContacts, selectedFilter } from 'redux/selectors';

export const ContactList = () => {


  const contacts = useSelector(selectedContacts);
  const filterValue = useSelector(selectedFilter);



  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  
  );

  return (
    <ul>
      {visibleContact.map(({ id, name, number }) => {
        return <Contact name={name} number={number} id={id} key={id} />;
      })}
    </ul>
  );
};
