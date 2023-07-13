import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styles from '@/styles/popup.module.css'

const Popup = ({ onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    const modalWrapperRef = useRef()

    const checkIfClickedOutside = e => {
        if (modalWrapperRef.current && !modalWrapperRef.current.contains(e.target) || e.code === "Escape" ) {
            onClose()
        }
    }

    useEffect(() => {
        setIsBrowser(true);

        document.addEventListener("click", checkIfClickedOutside)
        document.addEventListener("keydown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
            document.removeEventListener("keydown", checkIfClickedOutside)
        }

    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className={styles.popupOverlay}>
            <div className={styles.popupWrapper} ref={modalWrapperRef}>
                <a className={styles.popupClose} href="#" onClick={handleCloseClick}>
                    ╳
                </a>
                <div className={styles.popupInner}>
                    {title && <div className={styles.popupTitle}>{title}</div>}
                    <div className={styles.popupContent}>{children}</div>
                </div>
            </div>
        </div>
    )

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }
};


export default Popup;
