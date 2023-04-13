import Link from "next/link";
import Work from "../work";
import styles from "@/styles/home/featuredWork.module.css"

export default function FeaturedWork({work}) {
    return (
        <section className={styles.featuredWork} >
            <div className="wrapper">
                <h2 className="sectionTitle">Готовые проекты</h2>
                <div className={styles.featuredWorkInner}>
                    {work.map((workItem) => (
                        <Work key={workItem.title} item={workItem} />
                    ))}
                </div>
                <Link href='/work' className='loadBtn mainBtn'>Смотреть все работы</Link>
            </div>
        </section>
    )
}
