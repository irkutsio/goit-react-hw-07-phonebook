// import { createAction } from '@reduxjs/toolkit';
// const { nanoid } = require('nanoid');

// export const createContact = createAction('contacts/createContact', contact => {
//   return {
//     payload: {
//       name: contact.name,
//       number: contact.number,
//       id: nanoid(),
//     },
//   };
// });

// export const deleteContact = createAction('contacts/deleteContact');

// export const setFilter = createAction('contacts/setFilter');

//==================================================================================

// export const createContact = contact => {
//   return {
//     type: 'contacts/createContact',
//     payload: {
//       id: nanoid(),
//       name: contact.name,
//       number: contact.number,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

// export const setFilter = value => {
//   return {
//     type: 'contacts/setFilter',
//     payload: value,
//   };
// };
