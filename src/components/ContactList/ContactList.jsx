import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContact = items.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {isLoading && <b>Loading...</b>}
      {error && <b>error</b>}
      <ul>
        {visibleContact.map(({ id, name, number }) => {
          return <Contact name={name} number={number} id={id} key={id} />;
        })}
      </ul>
    </>

    // <ul>
    //   {visibleContact.map(({ id, name, number }) => {
    //     return <Contact name={name} number={number} id={id} key={id} />;
    //   })}
    // </ul>
  );
};
