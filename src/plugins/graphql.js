import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
// import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

Vue.use({
    install(Vue) {
        // ApolloLink

        // ApolloLink
        // const authLink = setContext((_, { headers }) => {
        //     const token = localStorage.getItem('token')
        //     return {
        //         headers: {
        //             ...headers,
        //             authorization: token ? `Bearer ${token}` : ''
        //         }
        //     }
        // })

        Vue.prototype.$api = client;
    },
});

export default client;
