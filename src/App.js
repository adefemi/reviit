import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";

/*----------------------------- Local import go below these bar ------------------------------*/

import Router from "./router";
import { GraphqlClientURL } from "./utils/urls";

import "./App.css";

const client = new ApolloClient({
  uri: GraphqlClientURL,
  cache: new InMemoryCache({
    addTypename: false
  })
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    );
  }
}

export default App;
