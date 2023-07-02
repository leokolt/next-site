import React, { useState, useEffect } from "react"
import {getAllPosts, getAllPostsByTag} from "@/lib/getAllData";
import Seo from "@/components/global/seo";
import Article from "@/components/article";
import styles from "@/styles/home/posts.module.css"

import { firstToUpperCase, translit } from "@/lib/utils";

export async function getStaticPaths() {
    const posts = getAllPosts();
    const tags = new Set(posts.flatMap((post) => post.tags));

    return {
        paths: [...tags].map((tag) => {
            return {
                params: {
                    tag
                }
            }
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params: { tag } }) {
    const posts = getAllPostsByTag({tag});

    return {
        props: {
            posts,
            tag
        },
    };
}



export default function Tag({ posts, tag }) {

    const numberPosts = 2

	// State for the list
	const [list, setList] = useState([...posts.slice(0, numberPosts)])

	// State to trigger oad more
	const [loadMore, setLoadMore] = useState(false)

	// State of whether there is more to load
	const [hasMore, setHasMore] = useState(posts.length > numberPosts)

	// Load more button click
	const handleLoadMore = () => {
		setLoadMore(true)
	}

	// Handle loading more articles
	useEffect(() => {
		if (loadMore && hasMore) {
		const currentLength = list.length
		const isMore = currentLength < posts.length
		const nextResults = isMore
			? posts.slice(currentLength, currentLength + numberPosts)
			: []
		setList([...list, ...nextResults])
		setLoadMore(false)
		}
	}, [loadMore, hasMore]) //eslint-disable-line

	//Check if there is more
	useEffect(() => {
		const isMore = list.length < posts.length
		setHasMore(isMore)
	}, [list]) //eslint-disable-line


    return (
		<div className={styles.blog}>
			<Seo
                title={`Статьи по теме "${firstToUpperCase(translit(tag))}"`}
                description={`Здесь собраны статьи по теме "${firstToUpperCase(translit(tag))}" в блоге разработчика Колтан Леонида`}
				ogImageUrl={`http://localhost:3000/api/og?title=${firstToUpperCase(translit(tag))}&description=Здесь собраны статьи по теме "${firstToUpperCase(translit(tag))}" в блоге разработчика Колтан Леонида`}
			/>
			<div className="wrapper">
				<h1 className="sectionTitle">{firstToUpperCase(translit(tag))}</h1>
				<div className={styles.blogInner}>
					{
						list.map((post) => (
							<Article key={post.slug} post={post} />
						))
					}
				</div>
				{hasMore ? (
					<div><button className="mainBtn loadBtn" onClick={handleLoadMore}>Больше статей</button></div>
					) : (
					<div><button className="mainBtn loadBtn" disabled>Больше нет статей</button></div>
				)}

			</div>
		</div>
    )
}
