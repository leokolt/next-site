import { useState, useEffect } from "react"
import Seo from "@/components/global/seo";
import Article from '@/components/article';
//import Search from '@/components/search';
import styles from "@/styles/blogWorkTagPage.module.css"

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

export default function Blog({posts, initialDisplayPosts = []}) {

	/*loadmore*/
	const initialPostList = 2
	const incrementInitialPostList = 1;

	const [showPosts, setShowPosts] = useState(initialPostList);

	const handleLoadMore = () => {
    	setShowPosts(showPosts + incrementInitialPostList)
  	}

	/*search*/
	const [searchValue, setSearchValue] = useState('')
	const filteredBlogPosts = posts.filter((frontMatter) => {
	  const searchContent = frontMatter.title + frontMatter.description + frontMatter.tags.join(' ')
	  return searchContent.toLowerCase().includes(searchValue.toLowerCase())
	})

	const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

	const searchClasses = [styles.search, "stripesBg"].join(" ")

	return (
		<div className={styles.blog}>
			<Seo
				title="Блог"
				ogImageUrl={`http://localhost:3000/api/og?title=Блог&description=Немножко статей об IT и всём таком`}
			/>
			<div className="wrapper">
				<h1 className="sectionTitle">Блог</h1>
				<div className={searchClasses}>
					<input
						aria-label="Search articles"
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder='Поиск статей'
						type='text'
						className={styles.searchInput}
					/>
				</div>
				<div className={styles.blogInner}>
					{!filteredBlogPosts.length && 'Ни одной статьи не найдено'}
					{
						displayPosts.slice(0, showPosts).map((post) => (
							<Article key={post.slug} post={post} />
						))
					}
				</div>
				{showPosts < posts.length && !searchValue ? (
					<div><button className="mainBtn loadBtn" onClick={handleLoadMore}>Больше статей</button></div>
					) : (
					<div><button className="mainBtn loadBtn" disabled>Больше нет статей</button></div>
				)}

			</div>
		</div>
	);
}
