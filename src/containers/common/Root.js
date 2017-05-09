import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';


export default class Root extends PureComponent {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        routes: PropTypes.object.isRequired,
    };

    render() {
        const { store, history, routes } = this.props;

        return (
            <Provider store={store}>
                <Router history={history} routes={routes} key={Math.random()} />
            </Provider>
        );
    }
}
