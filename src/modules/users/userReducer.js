import {
    FETCH_START,
    FETCH_FAIL,
    USER_FETCHED,
    USER_SAVED,
    USER_DELETED,
    USERS_LIST_FETCHED
} from './consts';

const initialState = {
    list: [],
    user: null,
    message: null,
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return { ...state, loading: true };
        case FETCH_FAIL:
            return { ...state, loading: false, message: action.payload };
        case USER_FETCHED:
            return { ...state, loading: false, message: null, user: action.payload };
        case USER_SAVED:
            return { ...state, loading: false, message: action.payload };
        case USER_DELETED:
            return { ...state, loading: false, message: action.payload };
        case USERS_LIST_FETCHED:
            return { ...state, loading: false, message: null, list: action.payload, user: null };
        default:
            return { ...state };
    }
} 

