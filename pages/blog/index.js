import { useState, useEffect } from "react"
import Seo from "@/components/global/seo";
import Article from '@/components/article';
import styles from "@/styles/home/posts.module.css"

import generateRssFeed from "@/lib/generateRssFeed";
import { getAllPosts } from '@/lib/getAllData';

export async function getStaticProps() {
  const posts = getAllPosts();
  await generateRssFeed();

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({posts}) {
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
				ogImageUrl={`http://localhost:3000/api/og?title=Блог&description=Немножко статей об IT и всём таком`}
			/>
			<div className="wrapper">
				<h1 className="sectionTitle">Blog</h1>
				<div className={styles.blogInner}></div>
				{
					list.map((post) => (
						<Article key={post.slug} className='border-b-2' post={post} />
					))
				}
				{hasMore ? (
					<div><button className="mainBtn loadBtn" onClick={handleLoadMore}>Больше статей</button></div>
					) : (
					<div><button className="mainBtn loadBtn" disabled>Больше нет статей</button></div>
				)}
			</div>
		</div>
	);
}
