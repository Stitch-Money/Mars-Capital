import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Apollo Client chains together ApolloLinks to add our token to every request

export const stitchClient = (token: string) => {
    const httpLink = createHttpLink({
        uri: 'https://api.stitch.money/graphql'
    });
    const authLink = setContext((_, { headers }) => {
        if (token === null) {
            throw new Error('Token was undefined. Failed to create ApolloClient auth link.');
        }

        return {
            headers: {
                ...headers,
                authorization: `Bearer ${token}`
            }
        };
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
};