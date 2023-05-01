import { useState  } from "react";
import styles from "@/styles/slideScreen.module.css"
import Nav from "./nav";

import useSlideScreen from '@/hooks/useSlideScreen'

const SlideScreen = () => {
    const [slideScreenActive, setSlideScreenActive] = useState(false);
    useSlideScreen(slideScreenActive, setSlideScreenActive);

    const menuBtnClasses = [styles.menuBtn, "mainBtn", slideScreenActive ?  `${styles.active}`  : null].join(" ")
    const slideScreenClasses = [slideScreenActive ?  `${styles.slideScreen} ${styles.show}`  : `${styles.slideScreen}`, "dotsBg"].join(" ")

    return (
        <>
            <button
                className={menuBtnClasses}
                onClick={() => {
                    setSlideScreenActive(!slideScreenActive)
                }}
                aria-label="menu"
            >
                <span className={styles.burger}></span>
            </button>
            <div className={slideScreenClasses}>
                <div className="wrapper">
                    <Nav slideScreenActive={slideScreenActive}
            setSlideScreenActive={setSlideScreenActive}
                    />
                </div>
            </div>
        </>
    )

}

export default SlideScreen;
