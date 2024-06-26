import axios from "axios";

// Api base url link
const BASE_URL = "https://api.themoviedb.org/3";
// Api Token import from .env file
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Pass Token to Api Headers and store in a variable
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    // get function store 2 parameters url and configration
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
