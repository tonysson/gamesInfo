

const initialState = {
    game:{},
    screen: {},
    isLoading: true
}

const detailsReducer = (state=initialState , action) =>{

    switch(action.type){
        case "FETCH_DETAILS":
            return {
                ...state,
                game: action.payload.game,
                screen : action.payload.screen,
                isLoading: false
            }
        case "LOADING_DETAILS" : 
            return {
                ...state,
                isLoading: true
            }    
       default:
             return {...state}   
    }
}

export default detailsReducer