const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    activFilter : false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case "DELET_CHAR":
            return{
                ...state,
                heroes: action.heroesr
            }
        case "NEW_CHAR":
            return{
                ...state,
                heroes: [...state.heroes,action.heroesr[0]]
            }
        case "FLITER_CHAR":
            return{
                ...state,
                filters: action.heroesrFilt,
                activFilter: action.activFilter
            }
        default: return state
    }
}

export default reducer;