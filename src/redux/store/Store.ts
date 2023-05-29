import {createStore} from "redux";
import CombineReducer from "../reducer/CombineReducer";


const Store = createStore(CombineReducer);


export default Store;