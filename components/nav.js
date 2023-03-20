import Link from "next/link";
import {useRouter} from "next/router";
import styles from "@/styles/header.module.css"

const Nav = () => {
    const router = useRouter();
    const routes = ['Blog', 'Work', 'Contact'];
    const routesRu = ['Блог', 'Работы', 'Контакты'];

    return (
        <nav className={styles.headerNav}>
            <ul className={styles.headerMenu}>
                {routes.map((route, i) => {
                    return (
                        <li key={route} className={`${router.pathname === `/${route.toLowerCase()}` && 'text-red-400'}`}>
                            <Link href={`/${route.toLowerCase()}`} >{routesRu[i]}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )

}

export default Nav
