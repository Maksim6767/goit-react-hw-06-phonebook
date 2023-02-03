import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.unshift(action.payload);
    },
    removeContact: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
    },
  },
})
export const { addContact, removeContact } = contactSlice.actions;
export const contactsReduser = contactSlice.reducer;