import { getAllPosts, getPostBySlug } from "@/lib/getAllData";
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';


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
    const post = getPostBySlug(slug);
	const mdxSource = await serialize(post.content);
    return {
      props: {
		//post,
		frontmatter: post,
		content: mdxSource
	  }
    };
  }


  export default function PostPage({ frontmatter, content }) {
    return (
		<>
			<Head>
				<title>Next.js | Tech Radar</title>
				<meta
					property="og:image"
					content={`http://localhost:3000/api/og?title=${frontmatter.title}&description=${frontmatter.description}`}
				/>
			</Head>

			<section className='px-6'>
				<div className='max-w-4xl mx-auto py-12'>
				<div className='prose mx-auto'>
					<h1>{frontmatter.title}</h1>
					{/* <div>{content}</div> */}
          	<MDXRemote {...content}  />
				</div>
				</div>
			</section>
	  </>
    );
  }
