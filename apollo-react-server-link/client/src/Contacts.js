import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Contacts = ({ data: { loading, error, contacts} }) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <ul>
      { contacts.map(item => {
        return (
        <div key={item.id}>
          <li>{item.firstName} {item.lastName}</li>
        </div>
        );
      })}
    </ul>
  );
}

export const contactsListQuery = gql`
  query ContactsQuery {
    contacts {
      id
      firstName
      lastName
    }
  }
`;

export default graphql(contactsListQuery)(Contacts);