// 全reducerを1つのreducerに結合する責務を持つ

import {combineReducers} from "redux";
import {reducer as form} from 'redux-form';
import events from './events'

export default combineReducers({events, form})