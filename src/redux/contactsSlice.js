import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    createContact(state, action) {
      const existContact = state.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (existContact) {
        alert('Contact with the same name already exists!');
        return;
      }
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});



export const { createContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
