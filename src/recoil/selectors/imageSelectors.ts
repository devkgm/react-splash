import { selector } from "recoil";

import axios from "axios";
import { pageState, searchState, PER_PAGE } from "../atoms/pager";
const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = import.meta.env.VITE_API_KEY;


export const imageData = selector({
    key: "imageData",
    get: async ({ get }) => {
        const searchValue = get(searchState);
        const pageValue = get(pageState);
        try {
            const res = await axios.get(
                `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
            );
            console.log(res);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },
});
