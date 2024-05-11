import styles from "./CommonNav.module.scss";

function CommonNav() {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__menu}>
                <span className={styles.navigation__menu__label}></span>
            </div>
        </div>
    );
}

export default CommonNav;
