import {combineReducers} from "redux";
import { registration } from './registration';
import { authentication } from './authentication';
import {alert }from './alert';
export default combineReducers({
    registration, authentication,alert

});