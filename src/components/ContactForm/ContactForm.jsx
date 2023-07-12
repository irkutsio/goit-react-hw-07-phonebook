
import { nanoid } from '@reduxjs/toolkit';
import { Fields } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { createContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    const form = {
      name: name.value,
      number: number.value,
      id:nanoid(),
    };

    e.target.reset();

    dispatch(createContact(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fields>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // value={name}
          // onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // value={number}
          // onChange={handleChange}
        />

        <button type="submit">Add Contact</button>
      </Fields>
    </form>
  );
};

