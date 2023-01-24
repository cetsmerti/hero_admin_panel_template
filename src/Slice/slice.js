import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    activFilter : false
}
const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducer :{
        heroesFetching: state => {state.heroesLoadingStatus = 'loading'},
        heroesFetched: (state,action) =>{
            state.heroes = action.payload;
            state.heroesLoadingStatus= 'idle'},
        heroesFetchingError: (state)=>{
            state.heroesLoadingStatus= 'error'
        },
        deletCharState: (state, action)=>{ state.heroes= action.heroesr},
        newChar: (state, action)=>{ state.heroes = [...state.heroes,action.heroesr[0]]},
        filterChar: (state, action)=>{ 
            state.filters= action.heroesrFilt;
            state.activFilter= action.activFilter}
    }
})
const {actions, reducer} = heroesSlice;
export default reducer;
export const {
    filterChar,
    newChar,
    deletCharState,
    heroesFetchingError,
    heroesFetched,
    heroesFetching

} = actions