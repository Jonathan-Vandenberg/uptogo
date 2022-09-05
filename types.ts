import { GraphQLResolveInfo } from 'graphql';
import { BlogPost as BlogPostModel, Account as AccountModel, Session as SessionModel, User as UserModel, VerificationToken as VerificationTokenModel } from '@prisma/client';
import { GraphQLContext } from './pages/api/index';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user: User;
  userId: Scalars['ID'];
};

export type BlogPost = {
  __typename?: 'BlogPost';
  authorAbout?: Maybe<Scalars['String']>;
  authorImage?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  reference3?: Maybe<Scalars['String']>;
  reference4?: Maybe<Scalars['String']>;
  reference5?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  tableContents5?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BlogPostInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorImage?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  reference3?: InputMaybe<Scalars['String']>;
  reference4?: InputMaybe<Scalars['String']>;
  reference5?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  tableContents5?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBlogPost?: Maybe<BlogPost>;
};


export type MutationAddBlogPostArgs = {
  input: BlogPostInput;
};

export type Query = {
  __typename?: 'Query';
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
};


export type QueryBlogPostArgs = {
  id: Scalars['ID'];
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['String'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Maybe<Account>>>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<Array<Maybe<Session>>>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['String'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<AccountModel>;
  BlogPost: ResolverTypeWrapper<BlogPostModel>;
  BlogPostInput: BlogPostInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Session: ResolverTypeWrapper<SessionModel>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<UserModel>;
  VerificationToken: ResolverTypeWrapper<VerificationTokenModel>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: AccountModel;
  BlogPost: BlogPostModel;
  BlogPostInput: BlogPostInput;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  Session: SessionModel;
  String: Scalars['String'];
  User: UserModel;
  VerificationToken: VerificationTokenModel;
};

export type AccountResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  session_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogPostResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BlogPost'] = ResolversParentTypes['BlogPost']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBlogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<MutationAddBlogPostArgs, 'input'>>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  blogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<QueryBlogPostArgs, 'id'>>;
  blogPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
};

export type SessionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Session']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationTokenResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['VerificationToken'] = ResolversParentTypes['VerificationToken']> = {
  expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Account?: AccountResolvers<ContextType>;
  BlogPost?: BlogPostResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  VerificationToken?: VerificationTokenResolvers<ContextType>;
};


export const BlogPostFragmentDoc = gql`
    fragment BlogPost on BlogPost {
  id
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  tableContents5
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  reference3
  reference4
  reference5
  authorName
  authorImage
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const AddBlogPostDocument = gql`
    mutation AddBlogPost($input: BlogPostInput!) {
  addBlogPost(input: $input) {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;
export type AddBlogPostMutationFn = Apollo.MutationFunction<AddBlogPostMutation, AddBlogPostMutationVariables>;

/**
 * __useAddBlogPostMutation__
 *
 * To run a mutation, you first call `useAddBlogPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBlogPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBlogPostMutation, { data, loading, error }] = useAddBlogPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBlogPostMutation(baseOptions?: Apollo.MutationHookOptions<AddBlogPostMutation, AddBlogPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBlogPostMutation, AddBlogPostMutationVariables>(AddBlogPostDocument, options);
      }
export type AddBlogPostMutationHookResult = ReturnType<typeof useAddBlogPostMutation>;
export type AddBlogPostMutationResult = Apollo.MutationResult<AddBlogPostMutation>;
export type AddBlogPostMutationOptions = Apollo.BaseMutationOptions<AddBlogPostMutation, AddBlogPostMutationVariables>;
export const BlogPostDocument = gql`
    query BlogPost($id: ID!) {
  blogPost(id: $id) {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;

/**
 * __useBlogPostQuery__
 *
 * To run a query within a React component, call `useBlogPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlogPostQuery(baseOptions: Apollo.QueryHookOptions<BlogPostQuery, BlogPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPostQuery, BlogPostQueryVariables>(BlogPostDocument, options);
      }
export function useBlogPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPostQuery, BlogPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPostQuery, BlogPostQueryVariables>(BlogPostDocument, options);
        }
export type BlogPostQueryHookResult = ReturnType<typeof useBlogPostQuery>;
export type BlogPostLazyQueryHookResult = ReturnType<typeof useBlogPostLazyQuery>;
export type BlogPostQueryResult = Apollo.QueryResult<BlogPostQuery, BlogPostQueryVariables>;
export const BlogPostsDocument = gql`
    query BlogPosts {
  blogPosts {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;

/**
 * __useBlogPostsQuery__
 *
 * To run a query within a React component, call `useBlogPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogPostsQuery(baseOptions?: Apollo.QueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPostsQuery, BlogPostsQueryVariables>(BlogPostsDocument, options);
      }
export function useBlogPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPostsQuery, BlogPostsQueryVariables>(BlogPostsDocument, options);
        }
export type BlogPostsQueryHookResult = ReturnType<typeof useBlogPostsQuery>;
export type BlogPostsLazyQueryHookResult = ReturnType<typeof useBlogPostsLazyQuery>;
export type BlogPostsQueryResult = Apollo.QueryResult<BlogPostsQuery, BlogPostsQueryVariables>;
export type AddBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;


export type AddBlogPostMutation = { __typename?: 'Mutation', addBlogPost?: { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, tableContents5?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, reference3?: string | null, reference4?: string | null, reference5?: string | null, authorName?: string | null, authorImage?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlogPostQuery = { __typename?: 'Query', blogPost?: { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, tableContents5?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, reference3?: string | null, reference4?: string | null, reference5?: string | null, authorName?: string | null, authorImage?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogPostFragment = { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, tableContents5?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, reference3?: string | null, reference4?: string | null, reference5?: string | null, authorName?: string | null, authorImage?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, tableContents5?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, reference3?: string | null, reference4?: string | null, reference5?: string | null, authorName?: string | null, authorImage?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null> | null };
