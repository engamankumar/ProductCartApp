
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import LoadState from './SaveStore'
import rootReducer from './reducer'

const initalState = {

}

const middleware = [thunk]

const stateLoader = new LoadState();

const store = createStore(rootReducer, stateLoader.loadState(), composeWithDevTools(applyMiddleware(...middleware)))
store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

export default store;