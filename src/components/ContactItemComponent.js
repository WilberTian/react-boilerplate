import React, { Component } from 'react';


export default class ContactItemComponent extends Component {
    render() {
        let { id, name, phone } = this.props.contactItem;

        return (
            <div>
            	{id} - {name} - {phone}
            </div>
        );
    }
}