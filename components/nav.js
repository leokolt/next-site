import React, { useState } from "react";
import Link from "next/link";
import {useRouter} from "next/router";

import styles from "@/styles/header.module.css"

const Nav = ({handleCloseClick}) => {
    const router = useRouter();
    const routes = ['Blog', 'Work', 'Contact'];
    const routesRu = ['Блог', 'Работы', 'Контакты'];

    return (
        <nav className={styles.headerNav}>
            <ul className={styles.headerMenu}>
                {routes.map((route, i) => {
                    return (
                        <li key={route} className={`${router.pathname === `/${route.toLowerCase()}`}`}>
                            <Link
                                href={`/${route.toLowerCase()}`}
                                onClick={handleCloseClick}
                                >{routesRu[i]}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )

}

export default Nav
