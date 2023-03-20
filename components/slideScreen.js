import { useState, useEffect  } from "react";
import styles from "@/styles/slideScreen.module.css"
import Link from "next/link";
import {useRouter} from "next/router";
import stylesHeader from "@/styles/header.module.css"

const SlideScreen = () => {
    const [slideScreenActive, setSlideScreenActive] = useState(false)

    const router = useRouter();
    const routes = ['Blog', 'Work', 'Contact'];
    const routesRu = ['Блог', 'Работы', 'Контакты'];

    const menuBtnClasses = [styles.menuBtn, "mainBtn", slideScreenActive ?  `${styles.active}`  : null].join(" ")
    const slideScreenClasses = [slideScreenActive ?  `${styles.slideScreen} ${styles.show}`  : `${styles.slideScreen}`, "dotsBg"].join(" ")

    useEffect(() => {
        document.body.className = slideScreenActive ?  'isSlideActive'  : ''
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
                <div className="wrapper">
                    <nav className={stylesHeader.headerNav}>
                        <ul className={stylesHeader.headerMenu}>
                            {routes.map((route, i) => {
                                return (
                                    <li key={route} className={`${router.pathname === `/${route.toLowerCase()}` && 'text-red-400'}`}>
                                        <Link href={`/${route.toLowerCase()}`} onClick={() => { setSlideScreenActive(!slideScreenActive) }}>{routesRu[i]}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )

}

export default SlideScreen;
