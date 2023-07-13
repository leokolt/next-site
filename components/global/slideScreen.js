import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "@/styles/slideScreen.module.css"
import Nav from "@/components/nav";

//import { CSSTransition } from "react-transition-group";



const SlideScreen = ({onClose}) => {

    const [isBrowser, setIsBrowser] = useState(false);

    const [endAnimation, setEndAnimation] = useState(false);

    const checkIfClickedEsc = e => {
        if ( e.code === "Escape" ) {
            setEndAnimation(true);
            setTimeout(() => {
                onClose()
            }, 100)
        }
    }

    const handleCloseClick = () => {
        setEndAnimation(true);
        setTimeout(() => {
            onClose();
        }, 100)
    };

    useEffect(() => {
        setIsBrowser(true);
        document.addEventListener("keydown", checkIfClickedEsc)
        return () => {
            document.removeEventListener("keydown", checkIfClickedEsc)
        }

    }, []);

    const inScreenClasses = [endAnimation ?  `${styles.inScreen} ${styles.close}`  : `${styles.inScreen}`, "dotsBg"].join(" ")

    const slideScreenContent = (
        <div className={styles.slideScreen}>
            <div className={inScreenClasses}>
                <div className="wrapper">
                    <Nav handleCloseClick={handleCloseClick} />
                </div>
            </div>
        </div>
    )

    if (isBrowser) {
        return ReactDOM.createPortal(
            slideScreenContent,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }

}

export default SlideScreen;
