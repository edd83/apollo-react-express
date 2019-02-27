const { ApolloServer, gql } = require('apollo-server-express');

const contacts = [
  {
    id: 1,
    firstName: 'Emilie',
    lastName: 'Lol'
  },
  {
    id: 2,
    firstName: 'Gabriel',
    lastName: 'Josh'
  },
  {
    id: 3,
    firstName: 'Denise',
    lastName: 'Manda'
  },
];

const TYPEDEFS = gql`
    type Contact {
        id: ID!
        firstName: String
        lastName: String
    }

    type Query {
        contacts: [Contact]
    }

    type Mutation {
      addContact(id: String!, firstName: String!, lastName: String!): Contact
    }
`;

const resolvers = {
  Query: {
    contacts: () => contacts
  },
  Mutation : {
    addContact: (root, args) => {
      const newContact = { id: args.id, firstName: args.firstName, lastName: args.lastName};
      contacts.push(newContact);
      return newContact;
    },
  }
};

const server = new ApolloServer({
    typeDefs: TYPEDEFS,
    resolvers: resolvers,
    playground: {
      endpoint: `http://localhost:4000/graphql`,
      settings: {
        'editor.theme': 'light'
      }
    }
  });

export default server;