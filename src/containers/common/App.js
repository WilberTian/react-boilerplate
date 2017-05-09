import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const { children } = this.props;

        return (
            <div>
                { children }
            </div>
        );
    }

}

export default App;
