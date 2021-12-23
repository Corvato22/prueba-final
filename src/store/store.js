import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { dataReducer } from '../reducers/dataReducer';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { totalReducer } from '../reducers/totalReducer';

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    product: dataReducer,
    total: totalReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)