import _ from 'lodash';
import {READ_EVENTS} from "../actions";

export default (events = {}, action) => {
    if (action.type === READ_EVENTS) {
        return _.mapKeys(action.response.data, 'id');
    } else {
        return events
    }
}
