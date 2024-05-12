import { useState } from "react";
import styles from "./CommonSearchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@/recoil/atoms/searchState";
import { pageState } from "@/recoil/atoms/pageState";

function CommonSearchBar() {
    const [text, setText] = useState("");
    const [page, setPage] = useRecoilState(pageState);
    const [search, setSearch] = useRecoilState(searchState);

    const onChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    };

    const onSearch = () => {
        if (text === "") {
            setSearch("Korea");
        } else {
            setSearch(text);
        }
        setPage(1);
    };
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            if (text === "") {
                setSearch("Korea");
            } else {
                setSearch(text);
            }
        }
    };
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar__search}>
                <input
                    type='text'
                    placeholder='찾으실 이미지를 검색하세요.'
                    className={styles.searchBar__search__input}
                    value={text}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <img
                    src='/icons/icon-search.svg'
                    alt='searchIcon'
                    onClick={onSearch}
                />
            </div>
        </div>
    );
}

export default CommonSearchBar;
