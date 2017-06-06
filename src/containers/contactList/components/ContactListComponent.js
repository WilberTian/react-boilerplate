import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'antd';

import * as contactActions from '../../../redux/actions/contactActions';
import * as routeActions from '../../../redux/actions/routeActions';

import contactService from '../../../services/contactService';
import NotificationBox from '../../../components/NotificationBox';
import ConfirmModal from '../../../components/ConfirmModal';

class ContactListComponent extends PureComponent {

    componentDidMount() {
        this._getContactList();
    }

    async _getContactList() {
        const { getContactListAction } = this.props;
        const data = await contactService.getContactList();
        getContactListAction(data.list);

        NotificationBox({
            message: 'Success',
            description: 'Contact list loaded sucessfully!',
            duration: 2
        });
    }

    _showDetail(id) {
        const { pushAction } = this.props;
        pushAction(`contact-detail/${id}`);
    }

    _deleteItem(itemName) {
        ConfirmModal({
            content: `确认删除'${itemName}'?`
        });
    }

    render() {
        const { contactList } = this.props;
        const columns = [{
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        }, {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return (
                    <div>
                        <Button onClick={() => { this._showDetail(record.id); }}>Detail</Button>
                        <Button
                          type="danger"
                          icon="close"
                          onClick={() => { this._deleteItem(record.name); }}
                        >
                            Delete
                        </Button>
                    </div>
                );
            }
        }];

        return (
            <Table columns={columns} dataSource={contactList} />
        );
    }
}

const mapStateToProps = (state) => {
    return { contactList: state.contactReducer.contactList };
};

const mapDispatchToProps = {
    getContactListAction: contactActions.getContactList,
    pushAction: routeActions.push
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListComponent);
