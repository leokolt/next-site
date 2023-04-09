import { getAllPosts, getPostBySlug } from "@/lib/getAllData";
import Seo from "@/components/global/seo";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import Button from '@/components/button';

const components = {
	Button
}



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

			<section className='px-6'>
				<div className='max-w-4xl mx-auto py-12'>
				<div className='prose mx-auto'>
					<h1>{frontmatter.title}</h1>
          				<MDXRemote {...content}  components = {components} />
				</div>
				</div>
			</section>
	  </>
    );
  }
