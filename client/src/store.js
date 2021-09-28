import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'

const productsInLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []

const initialState = {
    cart:{
        cartNr: productsInLocalStorage
    }
}

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;