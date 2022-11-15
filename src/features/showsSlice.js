import { createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../app/store';

const initialState = [

]

export const showsSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addShow: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const { addShow } = showsSlice.actions;

export const selectShows = (state) => state.list;

export default showsSlice.reducer;
