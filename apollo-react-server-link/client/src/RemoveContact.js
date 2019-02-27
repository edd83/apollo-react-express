import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { contactsListQuery } from './Contacts';

class RemoveContact extends Component {
    handleDelete = ({ mutate }) => {
        const { id } = this.props;
        console.log(id);
        this.props.mutate({
            variables: {id},
            update: (store, {data: {RemoveContact}}) => {
                const data = store.readQuery({ query: contactsListQuery });
                console.log(data.contacts.indexOf(id));
                data.contacts.splice(data.contacts.indexOf(id), 1);
                store.writeQuery({ query: contactsListQuery, data });
            }
        }).then(res => {
            console.log('ok');
        })
    };

    render() {
        return <button onClick={this.handleDelete}>Delete</button>;
    }
}

export const removeContact = gql`
  mutation removeContact($id: String!) {
    removeContact(id: $id) {
        id
    }
  }
`;

const RemoveContactWithMutation = graphql(removeContact)(RemoveContact);

export default RemoveContactWithMutation;


// mutation updateContact($id: String!, $firstName: String!, $lastName: String!) {
//     updateContact(id: $id, firstName: $firstName, lastName: $lastName) {
//         id
//         firstName
//         lastName
//     }
//   }