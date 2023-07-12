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
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload.id);
    },

    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => (state.isLoading = true))
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items = payload;
//         state.error = null;
//       })
//       .addCase(fetchContacts.rejected, (state, { payload }) => {
//         state.error = payload;
//         state.isLoading = false;
//       })
//       ////////////
//       .addCase(addContact.pending, state => (state.isLoading = true))
//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items.unshift(payload);
//         state.error = null;
//       })
//       .addCase(addContact.rejected, (state, { payload }) => {
//         state.error = payload;
//         state.isLoading = false;
//       })
//       ///////////
//       .addCase(deleteContact.pending, state => (state.isLoading = true))
//       .addCase(deleteContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(item => item.id !== payload.id);
//       })
//       .addCase(deleteContact.rejected, (state, { payload }) => {
//         state.error = payload;
//         state.isLoading = false;
//       });
//   },
// });
