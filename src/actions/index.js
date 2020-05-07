import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const GET_EVENT = 'GET_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const PUT_EVENT = 'PUT_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
    dispatch({type: READ_EVENTS, response});
};

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
    dispatch({type: GET_EVENT, response});
};

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
    dispatch({type: CREATE_EVENT, response});
};

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
    dispatch({type: DELETE_EVENT, id});
};

export const putEvent = id => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
    dispatch({type: PUT_EVENT, response});
};