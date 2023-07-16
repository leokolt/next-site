import { getAllPosts, getPostBySlug } from "@/lib/getAllData";
import Seo from "@/components/global/seo";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

import Link from 'next/link'
import Date from '@/lib/date';
import styles from "@/styles/blogPost.module.css"
import PostFooter from "@/components/extra/postFooter"

import Button from '@/components/mdx/button'
import ImageMdx from "@/components/mdx/image"

const _ = require("lodash")
import {translit} from "@/lib/utils"

const components = {
	Button,
	ImageMdx
}

const blogPostHeaderTopTagClasses = [styles.blogPostHeaderTopTag, "mainBtn"].join(" ")

const getTagLink = (tag) => {
	return (
		<Link scroll={false} className={blogPostHeaderTopTagClasses} href={`/blog/tag/${tag}`} key={tag}>
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
	const mdxSource = await serialize(post.content, {
		mdxOptions: {
	        rehypePlugins: [rehypeCodeTitles, rehypePrism]
		  }
	});


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
				</div>
				<div className="wrapperRead">
					<MDXRemote {...content}  components = {components} />
					<PostFooter
						title={frontmatter.title}
					/>
					{(next || prev) && (
					<div className={styles.prevNextPosts}>
						{prev && (
							<div className={styles.prevNextPostsItem}>
								<h6>
									Предыдущая статья
								</h6>
								<h5>
									<Link scroll={false} className={styles.prevNextPostsItemLink} href={`/blog/${prev.slug}`}>{prev.title}</Link>
								</h5>
							</div>
						)}
						{next && (
							<div className={styles.prevNextPostsItem}>
								<h6>
									Следующая статья
								</h6>
								<h5>
									<Link scroll={false} className={styles.prevNextPostsItemLink} href={`/blog/${next.slug}`}>{next.title}</Link>
								</h5>
							</div>
						)}
					</div>
					)}
				</div>
			</article>
	  </>
    );
  }
