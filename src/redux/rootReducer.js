import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import drawerReducer from "./Drawer/drawerReducer";

export default combineReducers({
    users: userReducer,
    drawer: drawerReducer,
});