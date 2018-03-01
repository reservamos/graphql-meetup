import { Users, Posts } from './data';

const resolvers = {
  Query: {
    users() {
      return Users;
    }
  },

  User: {
    posts(user) {
      return Posts.filter((post) => post.author === user.email);
    }
  },

  Comment: {
    author(comment) {
      return Users.find((user) => user.email === comment.user);
    }
  }
}

export default resolvers;
