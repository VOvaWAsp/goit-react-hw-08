import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  // reducers: {
  //   addContacts: (state, action) => {
  //     return [...state, action.payload];
  //     // state.push(state, action.payload)
  //   },
  //   prepare(contacts) {
  //     return {
  //       payload: {
  //         contacts,
  //       },
  //     };
  //   },
  //   deleteContacts: (state, action) => {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const index = state.items.filter(contact => contact.id !== action.payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { addContacts, deleteContacts } = contactsSlice.actions;

// const persistContacts = {
//   key: 'contacts',
//   storage,
// };

// export const contactsReducer = persistReducer(persistContacts, contactsSlice.reducer);

export const contactsReducer = contactsSlice.reducer;
