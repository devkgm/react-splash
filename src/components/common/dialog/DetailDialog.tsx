import { CardDTO, Tag } from "@/types/card";
import styles from "./DetailDialog.module.scss";
import { appendItem, getItem, removeItem } from "@/utils/localStorage";
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/dark.css';
import { useRecoilState, useRecoilValue } from "recoil";
import { bookMarkState } from "@/recoil/atoms/bookMarkState";

interface Props {
    data: CardDTO;
    handleDialog: (eventValue: boolean) => void;
}

function DetailDialog({ data, handleDialog }: Props) {
    const [bookmark, setBookmark] = useRecoilState(bookMarkState);
    toastConfig({ theme: 'dark' });

    const handleBookmark = () => {
        if(bookmark.map(bookmark => bookmark.id).includes(data.id)) {
            removeItem("bookmark", data);
            toast("북마크에서 삭제했어요!");
            setBookmark(bookmark.filter(b=> b.id != data.id))
        } else {
            appendItem("bookmark", data);
            toast("북마크에 추가했어요!")
            setBookmark(bookmark.concat(data))
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.container__dialog}>
                <div className={styles.container__dialog__header}>
                    <div className={styles.close}>
                        <button
                            className={styles.close__button}
                            onClick={() => handleDialog(false)}
                        >
                            <span
                                className='material-symbols-outlined'
                                style={{ fontSize: 28 + "px" }}
                            >
                                close
                            </span>
                        </button>
                        <img
                            src={data.user.profile_image.small}
                            alt='프로필'
                            className={styles.close__authorImage}
                        />
                        <span className={styles.close__authorName}>
                            {data.user.name}
                        </span>
                    </div>
                    <div className={styles.bookmark}>
                        <button className={styles.bookmark__button} onClick={handleBookmark}>
                            {
                                bookmark.map(bookmark => bookmark.id).includes(data.id) ?
                                <span
                                    className='material-symbols-outlined'
                                    style={{ fontSize: 16 + "px", color: "red" }}
                                >
                                    bookmark
                                </span> :
                                <span
                                    className='material-symbols-outlined'
                                    style={{ fontSize: 16 + "px" }}
                                >
                                    bookmark
                                </span> 
                            }
                            북마크
                        </button>
                        <button className={styles.bookmark__button}>
                            다운로드
                        </button>
                    </div>
                </div>
                <div className={styles.container__dialog__body}>
                    <img
                        src={data.urls.regular}
                        alt='선택이미지'
                        className={styles.image}
                    />
                </div>
                <div className={styles.container__dialog__footer}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>
                                이미지 크기
                            </span>
                            <span className={styles.infoBox__item__value}>
                                {data.width} X {data.height}
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>
                                업로드
                            </span>
                            <span className={styles.infoBox__item__value}>
                                {data.created_at.split("T")[0]}
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>
                                마지막 업데이트
                            </span>
                            <span className={styles.infoBox__item__value}>
                                {data.updated_at.split("T")[0]}
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>
                                다운로드
                            </span>
                            <span className={styles.infoBox__item__value}>
                                {data.likes}
                            </span>
                        </div>
                    </div>
                    <div className={styles.tagBox}>
                        {data.tags.map((tag: Tag) => {
                            return (
                                <div
                                    className={styles.tagBox__tag}
                                    key={tag.title}
                                >
                                    {tag.title}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailDialog;
