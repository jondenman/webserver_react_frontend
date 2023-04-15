import axios from "axios";

const apiURL = 'http://127.0.0.1:8000/api/';

export const client = axios.create({baseURL: apiURL});
