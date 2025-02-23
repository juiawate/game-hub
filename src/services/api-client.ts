import axios from "axios";

export interface FetchRespose<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "", // add api key
  },
});