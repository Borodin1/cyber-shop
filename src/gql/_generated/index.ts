import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type BasketRespopnse = {
  __typename?: 'BasketRespopnse';
  post: Post;
  postId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export enum Brand {
  Apple = 'APPLE',
  Samsung = 'SAMSUNG'
}

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['String']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  userId: Scalars['String']['output'];
};

export type LogInUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LogOut = {
  __typename?: 'LogOut';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  add: BasketRespopnse;
  createPost: Post;
  logOut: LogOut;
  signIn: User;
  signUp: User;
};


export type MutationAddArgs = {
  postId: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationSignInArgs = {
  input: LogInUserInput;
};


export type MutationSignUpArgs = {
  input: CreateUserInput;
};

export type Post = {
  __typename?: 'Post';
  Battery: Scalars['Int']['output'];
  CPU: Scalars['String']['output'];
  FrontCamera: Scalars['String']['output'];
  MainCamera: Scalars['String']['output'];
  brand: Brand;
  colors: Array<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logos: Array<Scalars['String']['output']>;
  memory: Array<Scalars['Int']['output']>;
  pixelDebcity: Scalars['String']['output'];
  prices: Array<Scalars['Int']['output']>;
  screenResolution: Scalars['String']['output'];
  screenSize: Scalars['String']['output'];
  screenType: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PostInput = {
  Battery: Scalars['Int']['input'];
  CPU: Scalars['String']['input'];
  FrontCamera: Scalars['String']['input'];
  MainCamera: Scalars['String']['input'];
  brand: Scalars['String']['input'];
  colors: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  logos: Array<Scalars['String']['input']>;
  memory: Array<Scalars['Int']['input']>;
  pixelDebcity: Scalars['String']['input'];
  prices: Array<Scalars['Int']['input']>;
  screenResolution: Scalars['String']['input'];
  screenSize: Scalars['String']['input'];
  screenType: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAll: Array<Post>;
  getOne: Post;
  getProfile: User;
  getUser: User;
};


export type QueryGetOneArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  accessToken: Scalars['String']['output'];
  cartItems?: Maybe<Array<Maybe<Item>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuery = { __typename?: 'Query', getAll: Array<{ __typename?: 'Post', id: string, title: string, prices: Array<number>, logos: Array<string> }> };

export type GetOneQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetOneQuery = { __typename?: 'Query', getOne: { __typename?: 'Post', Battery: number, CPU: string, FrontCamera: string, MainCamera: string, brand: Brand, colors: Array<string>, description: string, title: string, logos: Array<string>, screenType: string, memory: Array<number>, pixelDebcity: string, prices: Array<number>, screenResolution: string, screenSize: string } };

export type SignUpMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', accessToken: string, createdAt?: any | null, email: string, id: string, password: string, updateAt?: any | null, username?: string | null } };

export type SignInMutationVariables = Exact<{
  input: LogInUserInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'User', accessToken: string, createdAt?: any | null, email: string, id: string, password: string, updateAt?: any | null, username?: string | null } };


export const GetAllDocument = gql`
    query getAll {
  getAll {
    id
    title
    prices
    logos
  }
}
    `;
export type GetAllProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllQuery, GetAllQueryVariables>
    } & TChildProps;
export function withGetAll<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllQuery,
  GetAllQueryVariables,
  GetAllProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllQuery, GetAllQueryVariables, GetAllProps<TChildProps, TDataName>>(GetAllDocument, {
      alias: 'getAll',
      ...operationOptions
    });
};

/**
 * __useGetAllQuery__
 *
 * To run a query within a React component, call `useGetAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuery(baseOptions?: Apollo.QueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
      }
export function useGetAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
        }
export function useGetAllSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
        }
export type GetAllQueryHookResult = ReturnType<typeof useGetAllQuery>;
export type GetAllLazyQueryHookResult = ReturnType<typeof useGetAllLazyQuery>;
export type GetAllSuspenseQueryHookResult = ReturnType<typeof useGetAllSuspenseQuery>;
export type GetAllQueryResult = Apollo.QueryResult<GetAllQuery, GetAllQueryVariables>;
export const GetOneDocument = gql`
    query getOne($id: String!) {
  getOne(id: $id) {
    Battery
    CPU
    FrontCamera
    MainCamera
    brand
    colors
    description
    title
    logos
    screenType
    memory
    pixelDebcity
    prices
    screenResolution
    screenSize
  }
}
    `;
export type GetOneProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneQuery, GetOneQueryVariables>
    } & TChildProps;
export function withGetOne<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneQuery,
  GetOneQueryVariables,
  GetOneProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneQuery, GetOneQueryVariables, GetOneProps<TChildProps, TDataName>>(GetOneDocument, {
      alias: 'getOne',
      ...operationOptions
    });
};

/**
 * __useGetOneQuery__
 *
 * To run a query within a React component, call `useGetOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneQuery(baseOptions: Apollo.QueryHookOptions<GetOneQuery, GetOneQueryVariables> & ({ variables: GetOneQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneQuery, GetOneQueryVariables>(GetOneDocument, options);
      }
export function useGetOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneQuery, GetOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneQuery, GetOneQueryVariables>(GetOneDocument, options);
        }
export function useGetOneSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOneQuery, GetOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOneQuery, GetOneQueryVariables>(GetOneDocument, options);
        }
export type GetOneQueryHookResult = ReturnType<typeof useGetOneQuery>;
export type GetOneLazyQueryHookResult = ReturnType<typeof useGetOneLazyQuery>;
export type GetOneSuspenseQueryHookResult = ReturnType<typeof useGetOneSuspenseQuery>;
export type GetOneQueryResult = Apollo.QueryResult<GetOneQuery, GetOneQueryVariables>;
export const SignUpDocument = gql`
    mutation signUp($input: CreateUserInput!) {
  signUp(input: $input) {
    accessToken
    createdAt
    email
    id
    password
    updateAt
    username
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export type SignUpProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>
    } & TChildProps;
export function withSignUp<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignUpMutation,
  SignUpMutationVariables,
  SignUpProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignUpMutation, SignUpMutationVariables, SignUpProps<TChildProps, TDataName>>(SignUpDocument, {
      alias: 'signUp',
      ...operationOptions
    });
};

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation signIn($input: LogInUserInput!) {
  signIn(input: $input) {
    accessToken
    createdAt
    email
    id
    password
    updateAt
    username
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;
export type SignInProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<SignInMutation, SignInMutationVariables>
    } & TChildProps;
export function withSignIn<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignInMutation,
  SignInMutationVariables,
  SignInProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignInMutation, SignInMutationVariables, SignInProps<TChildProps, TDataName>>(SignInDocument, {
      alias: 'signIn',
      ...operationOptions
    });
};

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;