import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b0bc37ff18e742f688f303a6e5ebc759",
  },
});
