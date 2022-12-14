import Movie from "../../models/Movie"
import User from "../../models/User"
const Query = {
  async getMovies() {
    const movies = await Movie.find();
    return movies;
  },
  async login(_, { email, password }) {
    const verifyUser = await User.find({ email: email, password: password });
    return verifyUser;
  },
};

export default Query