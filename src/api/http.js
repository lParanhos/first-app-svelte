import axios from "axios"


export const API_KEY = "";

export const http = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/"
});