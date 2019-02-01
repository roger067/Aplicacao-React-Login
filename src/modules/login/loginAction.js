import api from '../../services/api';

import { 
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from './consts'

const baseUrl = '/Users';

export const authenticate = data => {
	return async dispatch => {
		dispatch({ type: LOGIN_PENDING })
		try {
			const response = await api.post(`${baseUrl}/authenticate`, data);
			
			dispatch({ type: LOGIN_SUCCESS, payload: response.data.data });

			return true;
		} catch (e) {
			fetchError(dispatch, e);
			return false;
		}
	}
}

const fetchError = (dispatch, error) => {
    let message;
	console.log(error)
	if (error && error.data && error.data.errors) {
		message = error.data.errors.join('\n');
	} else {
		message = 'Ocorreu um erro... Tente novamente.';
    }
    
    dispatch({ type: LOGIN_ERROR, payload: message });
}

