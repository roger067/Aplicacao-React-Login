import {
    FETCH_START,
    FETCH_FAIL,
    PRODUCT_FETCHED,
    PRODUCT_SAVED,
    PRODUCT_DELETED,
    PRODUCTS_LIST_FETCHED
} from './consts';

const initialState = {
    list: [],
    products: null,
    message: null,
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return { ...state, loading: true };
        case FETCH_FAIL:
            return { ...state, loading: false, message: action.payload };
        case PRODUCT_FETCHED:
            return { ...state, loading: false, message: null, products: action.payload };
        case PRODUCT_SAVED:
            return { ...state, loading: false, message: action.payload };
        case PRODUCT_DELETED:
            return { ...state, loading: false, message: action.payload };
        case PRODUCTS_LIST_FETCHED:
            return { ...state, loading: false, message: null, list: action.payload };
        default:
            return { ...state };
    }
} 

