import { getAllPosts, getPostBySlug } from "@/lib/getAllData";
import Seo from "@/components/global/seo";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import Link from 'next/link'
import Date from '@/lib/date';
import styles from "@/styles/home/posts.module.css"
import PostFooter from "@/components/extra/postFooter"

import Button from '@/components/button';

const _ = require("lodash")
import {translit} from "@/lib/utils"

const components = {
	Button
}

const blogPostHeaderTopTagClasses = [styles.blogPostHeaderTopTag, "mainBtn"].join(" ")

const getTagLink = (tag) => {
	return (
		<Link className={blogPostHeaderTopTagClasses} href={`/blog/tag/${tag}`} key={tag}>
			{translit(tag)}
		</Link>
	);
};

const posts = getAllPosts();

export async function getStaticPaths() {

    return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}


  export async function getStaticProps({ params: { slug } }) {
    const post =  getPostBySlug(slug);
	const mdxSource = await serialize(post.content);

    const postIndex = posts.findIndex((post) => post.slug === slug)
    const prev = posts[postIndex + 1] || null
    const next = posts[postIndex - 1] || null

    return {
      props: {
		post,
		frontmatter: post.data,
		content: mdxSource,
		prev,
		next
	  }
    };
  }


  export default function PostPage({ frontmatter, content, prev, next }) {

	const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
		<>

			<Seo
                title={`${frontmatter.title}`}
                description={`${frontmatter.description}`}
                canonicalUrl={url}
				ogImageUrl={`http://localhost:3000/api/og?title=${frontmatter.title}&description=${frontmatter.description}&date=${frontmatter.date}`}
                ogType={"article"}
            />

			<article className={styles.blogPost}>
				<div className="wrapper">
					<div className='prose'>
						<header className={styles.blogPostHeader}>
							<div className={styles.blogPostHeaderTop}>
								{frontmatter.tags.map(tag => getTagLink(tag)).reduce((prev, curr) => [prev, '', curr])}
							</div>
							<h1 className={styles.blogPostTitle}>{frontmatter.title}</h1>
							<p className={styles.postDesc}>{frontmatter.description}</p>
							<span className={styles.blogPostHeaderDate}>
								<Date dateString={frontmatter.date} />
							</span>
						</header>
						<div className="wrapperRead">
							<MDXRemote {...content}  components = {components} />
							<PostFooter
								title={frontmatter.title}
							/>
							<div>

								{(next || prev) && (
									<div>
									{prev && (
										<div>
										<h2>
											Previous Article
										</h2>
										<div>
											<Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
										</div>
										</div>
									)}
									{next && (
										<div>
										<h2>
											Next Article
										</h2>
										<div>
											<Link href={`/blog/${next.slug}`}>{next.title}</Link>
										</div>
										</div>
									)}
									</div>
								)}
	  						</div>

						</div>
					</div>
				</div>
			</article>



	  </>
    );
  }
