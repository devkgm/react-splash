import { selector } from "recoil";
import { pageState, totalPageState, PER_PAGE } from "../atoms/pager";


export const startPageState = selector({
    key: "startPage",
    get: ({get}) => {
        const page = get(pageState);
        const block = Math.floor(page/10) + (page%10 > 0 ? 1 : 0);
        return 1 + (block - 1)* 10;
    },
})

export const endPageState = selector({
    key: "endPage",
    get: ({get}) => {
        const page = get(pageState);
        const totalPage = get(totalPageState);
        const block = Math.floor(page/10) + (page%10 > 0 ? 1 : 0);

        const endPage = (totalPage < page + 10)  ? ((1 + (block - 1)* 10) + totalPage%10)-1 : (10 + (block - 1)* 10);
        return endPage;
    },
})

