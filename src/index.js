import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware , compose } from "redux";
import reducers from './store/reducers/index'
import thunk from "redux-thunk";
import App from "./App";
import { reactReduxFirebase , getFirebase} from 'react-redux-firebase'
import fbConfig from './store/fbConfig'

 
const store = createStore(reducers,
    compose (applyMiddleware(thunk.withExtraArgument({getFirebase})),
    reactReduxFirebase(fbConfig , { attachAuthIsReady: false })
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))






// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { createStore , applyMiddleware , compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import reducers from './store/reducers/reducers'
// import { reactReduxFirebase , getFirebase} from 'react-redux-firebase'
// import fbConfig from './store/fbConfig'

// import * as serviceWorker from './serviceWorker';


// // CREATING THE STORE WITH REDUX
// const store = createStore(
//     reducers,
//     applyMiddleware(thunk),
//     reactReduxFirebase(fbConfig , { attachAuthIsReady: true })
// )

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();
