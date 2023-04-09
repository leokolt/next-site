import Link from "next/link";
import {useRouter} from "next/router";
//import useSlideScreen from '@/hooks/useSlideScreen'

import styles from "@/styles/header.module.css"

const Nav = ({ slideScreenActive, setSlideScreenActive }) => {
    const router = useRouter();
    const routes = ['Blog', 'Work', 'Contact'];
    const routesRu = ['Блог', 'Работы', 'Контакты'];

    //const {slideScreenActive, setSlideScreenActive} = useSlideScreen()

    return (
        <nav className={styles.headerNav}>
            <ul className={styles.headerMenu}>
                {routes.map((route, i) => {
                    return (
                        <li key={route} className={`${router.pathname === `/${route.toLowerCase()}` && 'text-red-400'}`}>
                            <Link href={`/${route.toLowerCase()}`} onClick={() => {setSlideScreenActive(!slideScreenActive) }}>{routesRu[i]}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )

}

export default Nav
