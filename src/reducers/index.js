// 全reducerを1つのreducerに結合する責務を持つ

import {combineReducers} from "redux";
import count from './count'

export default combineReducers({count})