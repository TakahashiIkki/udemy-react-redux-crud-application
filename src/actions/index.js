import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
export const POST_EVENT = 'POST_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
    dispatch({type: READ_EVENTS, response});
};

export const postEvent = () => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/event`, { title: 'hogehoge', body: 'bodybody'});
    dispatch({type: POST_EVENT, response});
};