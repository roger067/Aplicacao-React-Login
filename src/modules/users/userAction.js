import api from '../../services/api';

import { 
	FETCH_START, 
	FETCH_FAIL, 
	USER_FETCHED, 
	USER_SAVED, 
	USERS_LIST_FETCHED, 
	USER_DELETED
} from './consts'

const baseUrl = '/Users';

export const getById = id => {
	return async dispatch => {
		dispatch({ type: FETCH_START });

		try {
			const response = await api.get(`${baseUrl}/${id}`);
			
			dispatch({ type: USER_FETCHED, payload: response.data.data });

			return true;
		} catch (e) {
			fetchError(dispatch, e);
			return false;
		}
	}
}

export const get = () => {
	return async dispatch => {
		dispatch({ type: FETCH_START })
        
		try {
			const response = await api.get(baseUrl);

			dispatch({ type: USERS_LIST_FETCHED, payload: response.data.data });

			return response;
		} catch (e) {
			fetchError(dispatch, e);
			return false;
		}
	}
}

export const save = data => {
	return async dispatch => {
		dispatch({ type: FETCH_START })
		try {
			const response = await api({method: data._id ? 'put' : 'post', url: baseUrl, data });
			
			dispatch({ type: USER_SAVED, payload: response.data.data });

			return true;
		} catch (e) {
			fetchError(dispatch, e);
			return false;
		}
	}
}

export const deleteItem = id => {
	return async dispatch => {
		dispatch({ type: FETCH_START })
		try {
			await api.delete(`${baseUrl}/${id}`);
			
			dispatch({ type: USER_DELETED });

			return true;
		} catch(error) {
			fetchError(dispatch, error);
			return false;
		}
	}
}

const fetchError = (dispatch, error) => {
    let message;

	if (error && error.data && error.data.errors) {
		message = error.data.errors.join('\n');
	} else {
		message = 'Ocorreu um erro... Tente novamente.';
    }
    
    dispatch({ type: FETCH_FAIL, payload: message });
}
