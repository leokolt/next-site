import { useState, useEffect  } from "react";
import Nav from "./nav";
import styles from "@/styles/slideScreen.module.css"

const SlideScreen = () => {
    const [slideScreenActive, setSlideScreenActive] = useState(false)

    const menuBtnClasses = [styles.menuBtn, "mainBtn", slideScreenActive ?  `${styles.active}`  : null].join(" ")
    const slideScreenClasses = [slideScreenActive ?  `${styles.slideScreen} ${styles.show}`  : `${styles.slideScreen}`, "dotsBg"].join(" ")

    useEffect(() => {
        document.body.className = slideScreenActive ?  'slideactive'  : ''
      });

    return (
        <>
            <button
                className={menuBtnClasses}
                onClick={() => {
                    setSlideScreenActive(!slideScreenActive)
                }}
            >
                <span className={styles.burger}></span>
            </button>
            <div className={slideScreenClasses}>
                <Nav/>
            </div>
        </>
    )

}

export default SlideScreen;
