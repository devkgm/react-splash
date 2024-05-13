import { atom } from "recoil";

export const pageState = atom<number>({
    key: "pageState",
    default: 1,
});


export const searchState = atom<string>({
    key: "searchState",
    default: "Korea",
});

export const totalPageState = atom<number>({
    key: "totalPageState",
    default: 0,
})



export const PER_PAGE = 30;