import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "@/styles/slideScreen.module.css"
import Nav from "@/components/nav";

const SlideScreen = ({ onClose, endAnimation, setEndAnimation }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    const checkIfClickedEsc = e => {
      if ( e.code === "Escape" ) {
        setEndAnimation(true);
      }
    }

    const handleCloseClick = () => {
      setEndAnimation(true);
    };

    useEffect(() => {
      if (endAnimation) {
        const timerId = setTimeout(() => {
          setEndAnimation(false);
          onClose();
        }, 100);
        return () => clearTimeout(timerId);
      }
    }, [endAnimation, setEndAnimation, onClose]);

    useEffect(() => {
      setIsBrowser(true);
      document.addEventListener("keydown", checkIfClickedEsc)
      return () => {
        document.removeEventListener("keydown", checkIfClickedEsc)
      }
    }, []);

    const inScreenClasses = [
      endAnimation
        ? `${styles.inScreen} ${styles.close}`
        : `${styles.inScreen}`,
      "dotsBg"
    ].join(" ")

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
