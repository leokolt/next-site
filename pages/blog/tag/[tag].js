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


export default function Tag({ posts, tag, initialDisplayPosts = [] }) {

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
                title={`Статьи по теме "${firstToUpperCase(translit(tag))}"`}
                description={`Здесь собраны статьи по теме "${firstToUpperCase(translit(tag))}" в блоге разработчика Колтан Леонида`}
				ogImageUrl={`http://localhost:3000/api/og?title=${firstToUpperCase(translit(tag))}&description=Здесь собраны статьи по теме "${firstToUpperCase(translit(tag))}" в блоге разработчика Колтан Леонида`}
			/>
			<div className="wrapper">
				<h1 className="sectionTitle">{firstToUpperCase(translit(tag))}</h1>
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
    )
}
