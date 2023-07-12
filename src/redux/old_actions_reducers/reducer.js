// import { createContact, deleteContact, setFilter } from './actions';
// import { createReducer } from '@reduxjs/toolkit';

//=====================================================================================



// export const rootReducer = createReducer(contactsInitialState, {
//   [createContact](state, action) {
//     const existContact = state.contacts.find(
//       contact =>
//         contact.name.toLowerCase() === action.payload.name.toLowerCase()
//     );
//     if (existContact) {
//       alert('Contact with the same name already exists!');
//       return;
//     }
//     state.contacts.push(action.payload);
//   },

//   [deleteContact](state, action) {
//     state.contacts = state.contacts.filter(
//       contact => contact.id !== action.payload
//     );
//   },
//   [setFilter](state, action) {
//     return {
//       ...state,
//       contacts: state.contacts.filter(contact =>
//         contact.name.toLowerCase().includes(action.payload)
//       ),
//     };
//   },
// });

//===========================================================================================

// export const rootReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case createContact.type: {
//       const existContact = state.contacts.find(
//         contact =>
//           contact.name.toLowerCase() === action.payload.name.toLowerCase()
//       );
//       if (existContact) {
//         alert('Contact with the same name already exists!');
//         return;
//       } else {
//         return {
//           ...state,
//           contacts: [...state.contacts, action.payload],
//         };
//       }
//     }
//     case deleteContact.type: {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case setFilter.type: {
//       console.log(action.payload);
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact =>
//           contact.name.toLowerCase().includes(action.payload)
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };
