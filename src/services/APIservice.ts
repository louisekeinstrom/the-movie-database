import axios from "axios";
import { MovieResponse, SpecificMovieType } from "../types/index";

// API-KEY

const API = import.meta.env.VITE_API_KEY;

// instance w baseURL
const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});
/**
 * @param {string} endpoint
 * @returns promise
 */

export const getAllData = async <T>(endpoint: string) => {
	const response = await instance.get(`${endpoint}&api_key=` + API);
	return response.data as T;
};

export const getData = async <T>(endpoint: string) => {
	const response = await instance.get(`${endpoint}&api_key=` + API);
	return response.data as T;
};
