import Image from "next/image"
import styles from "@/styles/home/featuredWork.module.css"

export default function Work({item}) {
    return (
        <article className={styles.featuredWorkItem}>
            <div className={styles.featuredWorkItemImg}>
                <Image
                    src={item.image}
                    width={1000}
                    height={600}
                    alt={item.title}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
            <div className={styles.featuredWorkItemContent}>
                <h3 className="">{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.featuredWorkItemInfo}>
                    <time className={styles.featuredWorkItemDate}>
                        {item.year}
                    </time>
                    <span className={styles.featuredWorkItemCat}>
                        {item.category}
                    </span>
                    <a href={item.link} target="_blank" className="mainBtn mainBtn--accent">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/></svg>
                    </a>
                </div>
            </div>
        </article>
    );
}
