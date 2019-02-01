import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from '../modules/users/userReducer';
import productsReducer from '../modules/products/productsReducer';
import loginReducer from '../modules/login/loginReducer';

const reducers = combineReducers({
    form: formReducer,
    users: userReducer,
    products: productsReducer,
    login: loginReducer
})

export default reducers