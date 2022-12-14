import Movie from "../../models/Movie";
import User from "../../models/User"

const Mutation = {
  async createMovie(_, { input }) {
    return await Movie.create(input);
  },
  async updateMovie(_, { input, _id }) {
    return await Movie.findByIdAndUpdate(_id, input, { new: true });
  },
  async createUser(_, { input }) {
    return await User.create(input);
  },
};

export default Mutation;
