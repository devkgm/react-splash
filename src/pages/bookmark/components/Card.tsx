import { CardDTO } from "@/types/card";
import styles from "./Card.module.scss";
interface Props {
    data: CardDTO;
}
function Card({ data }: Props) {
    const openDialog = () => {
        console.log("함수 호출");
    };
    console.log(data)
    return (
        <div className={styles.card} onClick={openDialog}>
            <img
                src={data.urls.small}
                alt={data.alt_description}
                className={styles.card__image}
            ></img>
            <div className={styles.card__description}>
                <div className={styles.card__description__item}>
                    <span className={styles.card__description__item__label}>작품명 </span>
                    <span className={styles.card__description__item__value}>{data.alt_description}</span>
                </div>
                <div className={styles.card__description__item}>
                    <span className={styles.card__description__item__label}>업로드 </span>
                    <span className={styles.card__description__item__value}>{data.created_at.split("T")[0]}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
