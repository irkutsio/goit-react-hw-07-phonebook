import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items.unshift(payload);
      state.error = null;
    },
    [addContact.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state,{payload}) {
      console.log(payload)
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload.id);
;
    },


    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

//===========================================================
// reducers: {
//   createContact(state, action) {
//     const existContact = state.find(
//       contact =>
//         contact.name.toLowerCase() === action.payload.name.toLowerCase()
//     );
//     if (existContact) {
//       alert('Contact with the same name already exists!');
//       return;
//     }
//     state.push(action.payload);
//   },
//   deleteContact(state, action) {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// },

// export const { createContact, deleteContact } = contactsSlice.actions;
//
// reducers: {
//   fetchingInProgress(state) {
//     state.isLoading = true;
//   },
//   fetchingSuccess(state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   fetchingError(state, action) {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
// },
