import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import styles from "./CommonFooter.module.scss";
import { imageData } from "@/recoil/selectors/imageSelectors";
import { pageState, searchState, PER_PAGE, totalPageState } from "@/recoil/atoms/pager";
import { endPageState, startPageState } from "@/recoil/selectors/pager";

function CommonFooter() {
    const imageSelector = useRecoilValueLoadable(imageData);
    const startPage = useRecoilValue(startPageState);
    const endPage = useRecoilValue(endPageState);
    const search = useRecoilValue(searchState);
    const [page, setPage] = useRecoilState(pageState);
    const [totalPage, setTotalPage] = useRecoilState(totalPageState);

    

    useEffect(()=>{
        console.log(page)
        switch(imageSelector.state){
            case "hasValue":
                setTotalPage(imageSelector.contents.total_pages)
                console.log(startPage, endPage)
        }
    },[imageSelector])

    console.log(page)
    const moveToPrev = () => {
        console.log(startPage)
        setPage(startPage-1)
    };
    const moveToNext = () => {
        console.log(endPage)
        setPage(endPage +1)
    };
    const handleClick = (page) => {
        setPage(page)
    }

    const pagination = [];
    for(let i = startPage; i <= endPage; i++){
        if(page == i) {
            pagination.push(
                <button className={`${styles.pagination__button} ${styles.inactive}`} key={i} onClick={()=>handleClick(i)}>
                    {i}
                </button>
            )
            continue;
        }
        pagination.push(
            <button className={`${styles.pagination__button} ${styles.active}`} key={i} onClick={()=>handleClick(i)}>
                {i}
            </button>
        )
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.pagination}>
                <button
                    className={styles.pagination__button}
                    onClick={moveToPrev}
                >
                    <img src='/icons/icon-arrowLeft.svg' alt='' />
                </button>
                {
                    pagination
                }
                <button
                    className={styles.pagination__button}
                    onClick={moveToNext}
                >
                    <img src='/icons/icon-arrowRight.svg' alt='' />
                </button>
            </div>
        </footer>
    );
}

export default CommonFooter;
