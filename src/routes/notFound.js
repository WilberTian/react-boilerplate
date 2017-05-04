import React, { Component } from 'react';

export default class NotFound extends Component {
    render() {
        const {
            params,
            location
        } = this.props;

        return (
            <div>
                Invalid URL path, page not found! <br />
                {JSON.stringify(params)}
                {JSON.stringify(location)}
            </div>
        );
    }
}
