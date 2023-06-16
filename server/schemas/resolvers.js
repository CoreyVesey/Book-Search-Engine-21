const { Book, User } = require("../models");

const resolvers = {
    Query: {
        books: async () => {
            return await Book.find({}).populate("books").populate({

            });
        },
        users: async () => {
            return await User.find({}).populate("users");
        }
    }
};

module.exports = resolvers;