import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware , compose } from "redux";
import { fetchAllGists } from './app/store/actions/apiCalls';
import rootReducer from './app/store/reducers'
import reduxThunk from "redux-thunk";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import { reactReduxFirebase , getFirebase} from 'react-redux-firebase'
import fbConfig from './app/config/fbConfig'

const store = createStore(rootReducer,
    compose (applyMiddleware(reduxThunk.withExtraArgument({getFirebase})),
    reactReduxFirebase(fbConfig , { attachAuthIsReady: true })
    )
);
store.dispatch(fetchAllGists());
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
})

registerServiceWorker();

