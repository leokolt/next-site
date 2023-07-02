import { useState, useEffect } from "react"
import Seo from "@/components/global/seo";
import Work from "../components/work";
import {getAllWork} from "@/lib/getAllData";
import styles from "@/styles/home/featuredWork.module.css"

export async function getStaticProps() {
    const work = getAllWork();

    return {
        props: {
            work,
        },
    };
}

export default function WorkPage({work}) {
    const numberPosts = 3

	// State for the list
	const [list, setList] = useState([...work.slice(0, numberPosts)])

	// State to trigger oad more
	const [loadMore, setLoadMore] = useState(false)

	// State of whether there is more to load
	const [hasMore, setHasMore] = useState(work.length > numberPosts)

	// Load more button click
	const handleLoadMore = () => {
		setLoadMore(true)
	}

	// Handle loading more articles
	useEffect(() => {
		if (loadMore && hasMore) {
		const currentLength = list.length
		const isMore = currentLength < work.length
		const nextResults = isMore
			? work.slice(currentLength, currentLength + numberPosts)
			: []
		setList([...list, ...nextResults])
		setLoadMore(false)
		}
	}, [loadMore, hasMore]) //eslint-disable-line

	//Check if there is more
	useEffect(() => {
		const isMore = list.length < work.length
		setHasMore(isMore)
	}, [list]) //eslint-disable-line


    return (
        <div>
            <Seo
                title="Все работы Колтан Леонида"
                description="Здесь собраны некоторые из работ разработчика Колтан Леонида"
				ogImageUrl={`http://localhost:3000/api/og?title=Все работы Колтан Леонида&description=Здесь собраны некоторые из работ разработчика Колтан Леонида`}
            />
            <section className='px-6'>
                <div className='wrapper'>
                    <h1 className='sectionTitle'>Проекты</h1>
                    <div className={styles.featuredWorkInner}>
                        {list.map((workItem) => (
                            <Work key={workItem.title} item={workItem} />
                        ))}
                    </div>
                    {hasMore ? (
                        <div><button className="mainBtn loadBtn" onClick={handleLoadMore}>Больше работ</button></div>
                        ) : (
                        <div><button className="mainBtn loadBtn" disabled>Больше нет работ</button></div>
                    )}
                </div>
            </section>
        </div>
    )
}
