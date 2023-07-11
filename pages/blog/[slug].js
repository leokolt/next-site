import { getAllPosts, getPostBySlug } from "@/lib/getAllData";
import Seo from "@/components/global/seo";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import Link from 'next/link'
import Date from '@/lib/date';
import styles from "@/styles/home/posts.module.css"
import PostFooter from "@/components/extra/postFooter";

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

export async function getStaticPaths() {
    const posts = getAllPosts();
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
    return {
      props: {
		post,
		frontmatter: post.data,
		content: mdxSource
	  }
    };
  }


  export default function PostPage({ frontmatter, content }) {

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
						</div>
					</div>
				</div>
			</article>



	  </>
    );
  }
