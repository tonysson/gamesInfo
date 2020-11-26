import axios from 'axios';
import { gameDetailsURL , gameScreenshotURL} from '../api';



export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    })

    const detailData = await axios.get(gameDetailsURL(id))
    const screenData = await axios.get(gameScreenshotURL(id))

    dispatch({
        type: "FETCH_DETAILS",
        payload: {
            game: detailData.data,
            screen: screenData.data
        }
    })
}

