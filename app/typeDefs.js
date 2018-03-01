const typeDefs = `
  type User {
    name: String!
    email: String!
    posts: [Post]!
  }

  type Post {
    title: String!
    comments: [Comment]!
  }

  type Comment {
    content: String!
    author: User!
  }

  type Query {
    users: [User]!
  }
`;

export default typeDefs;
