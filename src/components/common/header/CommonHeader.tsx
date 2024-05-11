import styles from "./CommonHeader.module.scss";
function CommonHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.header__logoBox}>
                <img
                    src='src/assets/images/image-logo.png'
                    alt='logo'
                    className={styles.header__logoBox__logo}
                />
                <span className={styles.header__logoBox__title}>
                    PhotoSplash
                </span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>
                    사진제출
                </button>
                <button className={styles.header__profileBox__button}>
                    북마크
                </button>
                <button className={styles.header__profileBox__userName}>
                    devkgm | gm.kim333@gmail.com
                </button>
            </div>
        </div>
    );
}
export default CommonHeader;
