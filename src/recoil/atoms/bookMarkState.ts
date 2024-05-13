import {atom} from "recoil";
import { getItem } from "@/utils/localStorage";
import { CardDTO } from "@/types/card";

export const bookMarkState = atom<CardDTO[]>({
    key:"bookMarkState",
    default: getItem("bookmark")
})