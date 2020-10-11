import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { onError } from "apollo-link-error";
import gql from "graphql-tag";
Vue.use(VueApollo);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists

  const token = localStorage.getItem("admin_toke ");

  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    };
  }
});

const httpLink = createUploadLink({
  uri: "http://localhost:1337/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log("na here oo", graphQLErrors, networkError);
  if (graphQLErrors) {
    let error;
    graphQLErrors.map(({ message, locations, path }) => (error = message));
    throw error;
  }
  if (networkError) {
    throw networkError;
  }
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
