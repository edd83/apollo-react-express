import React, { Component } from 'react';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Contacts from './Contacts';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import AddContact from './AddContact';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <h2>CRM</h2>
          </div>
          <AddContact />
          <Contacts />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
