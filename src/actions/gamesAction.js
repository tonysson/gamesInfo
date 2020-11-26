import axios from 'axios';
import { popularGamesURL, upComingGamesURL,newGamesURL, searchGameURL } from './../api';

//Action creator

export const loadGames = () => async (dispatch) =>  {

    const popularData = await axios.get(popularGamesURL())
    const newGamesData = await axios.get(newGamesURL())
    const upComingData = await axios.get(upComingGamesURL())

    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upComing : upComingData.data.results
        }
    })

}


export const fetchSearch = (game_name) => async (dispatch) => {

    const searchGames = await axios.get(searchGameURL(game_name))

    dispatch({
        type:"FETCH_SEARCHED",
        payload: {
            searched : searchGames.data.results
        }
    })

}