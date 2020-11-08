import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
        match(slug: String!): Match
        matches: [Match]
        matchesResults(slug: String!): [Match]
    }
    extend type Mutation {
        createMatch(input: MatchInput): Match
    }
    type Match {
        id: ID!
        slug: String!
        result: Boolean
        author: User
    }
    input MatchInput {
        result: Boolean
        author: String
    }
`;

export default typeDefs;