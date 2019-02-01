import api from '../../services/api';

import { 
	FETCH_START, 
	FETCH_FAIL, 
	PRODUCT_FETCHED, 
	PRODUCT_SAVED, 
	PRODUCTS_LIST_FETCHED, 
	PRODUCT_DELETED
} from './consts'

const baseUrl = '/products';

export const getById = id => {
	return async dispatch => {
		dispatch({ type: FETCH_START });

		try {
			const response = await api.get(`${baseUrl}/${id}`);
			
			dispatch({ type: PRODUCT_FETCHED, payload: response.data.data });

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

			dispatch({ type: PRODUCTS_LIST_FETCHED, payload: response.data.data });

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
			
			dispatch({ type: PRODUCT_SAVED, payload: response.data.data });

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
			
			dispatch({ type: PRODUCT_DELETED });

			return true;
		} catch(error) {
			fetchError(dispatch, error);
			return false;
		}
	}
}

const fetchError = (dispatch, error) => {
    let message;

	if (error && error.data && error.data.msg) {
		message = error.data.msg;
	} else {
		message = 'Ocorreu um erro... Tente novamente.';
    }
    
    dispatch({ type: FETCH_FAIL, payload: message });
}
