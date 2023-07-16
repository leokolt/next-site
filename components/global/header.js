import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/themeSwitcher";
import SlideScreen from "@/components/global/slideScreen";
import styles from "@/styles/header.module.css"

export default function Header() {

    const headerInnerClasses = [styles.headerInner, "wrapper"].join(" ")

    const [showSlideScreen, setShowSlideScreen] = useState(false);

    const [endAnimation, setEndAnimation] = useState(false);

    const handleClick = () => {
      if (showSlideScreen) {
        setEndAnimation(true);
      } else {
        setShowSlideScreen(!showSlideScreen);
      }
    };

    const menuBtnClasses = [showSlideScreen ? `${styles.menuBtnActive} ${styles.menuBtn}` : `${styles.menuBtn}`, "mainBtn"].join(" ")

    useEffect(() => {
        document.body.className = showSlideScreen ? "isSlideActive" : "";
    });

    return (
        <header className={styles.header}>
            <div className={headerInnerClasses}>
                <Link className={styles.headerLogo} href='/' scroll={false}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 160"><path d="M10 20 0 29.9v-5.5L5 20zM28 20 0 46.9v-5.5L22 20zM40 27 0 64.9v-5.5L40 21zM40 44 0 81.9v-5.5L40 38zM40 61 0 98.9v-5.5L40 55zM40 78 0 115.9v-5.5L40 72zM40 95 0 132.9v-5.5L40 89zM40 112 0 149.9v-5.5L40 106zM40 129 7 160H1l39-37zM40 146l-15 14h-6l21-20zM40 160h-3l3-3z" fill="#494949"/><path d="M128 107.7 69.7 73.9l58.3-34V0L0 73.9 88 126v34h40z" fill="#f65f59"/></svg>
                </Link>

                <div className={styles.headerActions}>
                    <ThemeToggle/>
                    <button className={menuBtnClasses} onClick={handleClick}>
                        <div className={styles.burger}></div>
                    </button>
                </div>
            </div>
            {showSlideScreen &&
                <SlideScreen
                    onClose={() => setShowSlideScreen(false)}
                    showSlideScreen={showSlideScreen}
                    endAnimation={endAnimation}
                    setEndAnimation={setEndAnimation}
                />}
        </header>
    )
}
