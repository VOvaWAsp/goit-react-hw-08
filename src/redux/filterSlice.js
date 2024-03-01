import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterFiltration: (state, action) => {
      return state, action.payload;
      //   return state.filter(filter =>
      //     filter.name.toLowerCase().includes(action.payload.toLowerCase())
      //   );
    },
  },
});

export const { filterFiltration } = filterSlice.actions;

// const persistFilters = {
//   key: 'filters',
//   storage,
// };

// export const filterReducer = persistReducer(persistFilters, filterSlice.reducer);

export const filterReducer = filterSlice.reducer;

// const filterSlice = createSlice({
//   name: 'filters',
//   initialState: '',
//   reducers: {
//     filterFiltration: (state, action) => {
//       return state.filter(filter =>
//         filter.action.payload.toLowerCase().includes(action.payload.toLowerCase)
//       );
//     },
//     prepare(text) {
//       return {
//         payload: {
//           text,
//         },
//       };
//     },
//   },
// });

// export const { filterFiltration } = filterSlice.actions;

// export const filterReducer = filterSlice.reducer;
