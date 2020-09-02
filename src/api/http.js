import axios from "axios"


export const API_KEY = "4231c53e06d9888b450603f267128e2e";

export const http = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/"
});