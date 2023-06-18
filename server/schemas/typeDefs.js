const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: Id
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type User {
    _id: Id
    username: String
    email: String
    password: String
    savedBooks: [Book]
}

type Auth {
    user: User
    token: Id
}

type Query {
    usder: User
}

input: bookInput {
    authors: String
    title: String
    description: String
    bookId: String
}

type Mutation {
    
}
`;

module.exports = typeDefs;