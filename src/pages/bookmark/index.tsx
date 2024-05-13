import { useEffect, useMemo, useState } from "react";
import CommonHeader from "@/components/common/header/CommonHeader";
import styles from "./index.module.scss";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";
import DetailDialog from "@/components/common/dialog/DetailDialog";
import { CardDTO } from "@/types/card";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { imageData } from "@/recoil/selectors/imageSelectors";
import { getItem } from "@/utils/localStorage";
import { bookMarkState } from "@/recoil/atoms/bookMarkState";

function index() {
    const [imgData, setImgData] = useState<CardDTO>();
    const [open, setOpen] = useState<boolean>(false);
    const bookmark = useRecoilValue(bookMarkState);

    const CARD_LIST = bookmark.map(card => 
        <Card
            data={card}
            key={card.id}
        />
    )
    return (
        <div className={styles.page}>
            <CommonHeader />
            <div className={styles.page__contents}>
                <div className={styles.page__contents__imageBox}>
                    {CARD_LIST}
                </div>
            </div>
            {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
        </div>
    );
}

export default index;
