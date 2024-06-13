//Using Axios for fetching the api
import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { API_KEY_PARAM, BASE_URL } from "../config";

// Creating a class
export class TVShowApi {
  //An Async function name fetchPopular for fetching only the popular TV shows
  static async fetchPopulars() {
    //Using Await to get the response
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log(response.data.results);
    return response.data.results;
    //Getting the response
    //importing the fake api
    // return FAKE_POPULARS;
  }
  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }
  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }
}
