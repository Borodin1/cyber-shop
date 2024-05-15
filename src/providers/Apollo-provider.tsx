'use client'
import React from 'react'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
    const httplink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_SERVER_URL
    })
    
    const authLink = setContext((_, { headers }) => {
        const token = window.localStorage.getItem('Bearer')
        return {
            headers: {
                ...headers,
                Authorization: token ? token : null,
            }
        }
    });
    const client = new ApolloClient({
        link: authLink.concat(httplink),
        cache: new InMemoryCache(),
        credentials: 'include',

    });
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ApolloClientProvider