import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../redux/store/store';
import Root from '../containers/common/Root';

const store = configureStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

export default (routes) => {
    return render(
        <AppContainer>
            <Root store={store} history={history} routes={routes} />
        </AppContainer>,
        document.getElementById('root')
    );
};
