import Link from 'next/link'
import Date from '@/lib/date';

const getTagLink = (tag) => {
    return (
      <Link href={`/blog/tag/${tag}`} key={tag}>
       {tag}
      </Link>
    );
  };

export default function Article({ post }) {
  return (
    <article className={`bg-white p-4`}>
      <Link href={`/blog/${post.slug}`}>
        <h3 className='text-2xl mb-2 font-medium hover:text-red-400 cursor-pointer'>
          {post.title}
        </h3>
      </Link>
      <span className='text-gray-600 mb-4 block'>
        <Date dateString={post.date} /> | {post.tags.map(tag => getTagLink(tag)).reduce((prev, curr) => [prev, ', ', curr])}
      </span>
      <p>{post.description}</p>
    </article>
  );
}
