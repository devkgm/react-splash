import { useMemo, useState } from "react";
import CommonHeader from "@/components/common/header/CommonHeader";
import styles from "./styles/index.module.scss";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";
import DetailDialog from "@/components/common/dialog/DetailDialog";
import { CardDTO } from "./types/card";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { imageData } from "@/recoil/selectors/imageSelectors";

function index() {
    const imageSelector = useRecoilValueLoadable(imageData);
    const [imgData, setImgData] = useState<CardDTO>();
    const [open, setOpen] = useState<boolean>(false);

    const CARD_LIST = useMemo(() => {
        if (imageSelector.state === "hasValue") {
            const result = imageSelector.contents.results.map(
                (card: CardDTO) => {
                    return (
                        <Card
                            data={card}
                            key={card.id}
                            handleDialog={setOpen}
                            handleSetData={setImgData}
                        />
                    );
                }
            );
            return result;
        } else {
            return <div>loading...</div>;
        }
    }, [imageSelector]);

    return (
        <div className={styles.page}>
            <CommonHeader />
            {/* 공통 네비게이션 UI 부분 */}
            <CommonNav />
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>
                            PhotoSplash
                        </span>
                        <span className={styles.wrapper__desc}>
                            인터넷의 시작 자료 출저입니다. <br />
                            모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
                        <CommonSearchBar />
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                    {CARD_LIST}
                </div>
            </div>
            <CommonFooter />
            {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
        </div>
    );
}

export default index;
