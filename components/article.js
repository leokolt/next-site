import Link from 'next/link'
import Date from '@/lib/date';
import styles from "@/styles/home/posts.module.css"
// import { transliterate } from '@/lib/transletter';
// const _ = require("lodash")

// const getTagLink = (tag) => {

//     return (
// 		<Link href={`/blog/tag/${tag}`} key={tag} scroll={false}>
// 			{tag}
// 		</Link>
//     );
//   };

export default function Article({ post }) {
	return (
		<article className={styles.article}>
			<Link href={`/blog/${post.slug}`} scroll={false}>
				<h3 className={styles.articleTitle}>
					{post.title}
				</h3>
			</Link>
			<p className={styles.articleDesc}>{post.description}</p>
			<span className={styles.blogPostHeaderDate}>
				<Date dateString={post.date} />
				{/* {post.tags.map(tag => getTagLink(tag)).reduce((prev, curr) => [prev, ', ', curr])} */}
			</span>

		</article>
	);
}
