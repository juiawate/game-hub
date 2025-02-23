import axios, { AxiosRequestConfig } from "axios";

export interface FetchRespose<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "", // add api key
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRespose<T>>(this.endpoint, config)
      .then(res => res.data);
  }
}

export default APIClient; 