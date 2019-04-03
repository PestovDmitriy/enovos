import { statusDateGET, statusGET} from '../api';

export const loadData = (payload) => async (dispatch) => {
    let data;
    if (payload.date) {
        data = await statusDateGET(payload.date);
    } else {
        data = await statusGET();
    }
    if (!data.data) {
        dispatch({type: 'ERROR', payload: {error: data.message}});
    } else {
        dispatch({type: 'LOADED', payload: {...data, error: null} });
    }
}