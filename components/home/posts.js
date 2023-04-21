import Link from "next/link";
import Article from '@/components/article';
import styles from "@/styles/home/posts.module.css"

export default function RecentPosts({ posts }) {
	return (
		<section className={styles.recentPosts}>
			<div className="wrapper">
				<h2 className="sectionTitle">Последнее в блоге</h2>
				<div className={styles.recentPostsInner}>
				{
					posts.map((post, index) => (
						<Article key={index} className='border-b-2' post={post} />
					)).slice(0, 4)
				}
				</div>
				<Link href='/blog' className='loadBtn mainBtn'>Читать все статьи</Link>
			</div>
		</section>
	);
	}
