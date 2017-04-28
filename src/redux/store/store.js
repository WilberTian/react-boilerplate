import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const logger = createLogger();

export default function configureStore(history, initialState = {}) {
    const middlewares = [
        thunkMiddleware,
        logger,
        routerMiddleware(history)
    ];

    const enhancer = compose(
        applyMiddleware(...middlewares)
    );

    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    );


    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const createNextReducer = require('../reducers');
            const nextReducer = createNextReducer();

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
