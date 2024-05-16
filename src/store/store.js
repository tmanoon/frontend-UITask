import {
    combineReducers,
    compose,
    legacy_createStore as createStore
} from 'redux'

import { directorReducer } from "./reducers/director.reducer.js"

const rootReducer = combineReducers({
    directorModule: directorReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
