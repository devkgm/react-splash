import { useState } from "react";
import styles from "./CommonNav.module.scss";
import navJson from "./nav.json";

interface Navigation {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

function CommonNav() {
    const [navigation, setNavigation] = useState<Navigation[]>(navJson);

    const navLinks = navigation.map((item: Navigation) => {
        return (
            <div className={styles.navigation__menu} key={item.index}>
                <span className={styles.navigation__menu__label}>
                    {item.label}
                </span>
            </div>
        );
    });

    return <div className={styles.navigation}>{navLinks}</div>;
}

export default CommonNav;
