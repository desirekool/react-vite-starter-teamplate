import axios from "axios";

const baseURL = '';

export const customFetch = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
