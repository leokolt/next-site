import fs from 'fs';
import matter from 'gray-matter';

export function getAllPosts() {
    const files = fs.readdirSync('./content/posts');
    const posts = files
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const { data } = getPostBySlug(slug);
        return {
          slug,
          ...data,
        };
      })

    return posts;
  }

export function getPostBySlug(slug) {
    const fileName = fs.readFileSync(`content/posts/${slug}.mdx`, 'utf-8');
    const { data, content } = matter(fileName);
    return {
      data,
      content,
    };
  }


export function getAllWork() {
	const data = fs.readFileSync('content/works/data.json', 'utf-8');
	const jsonData = JSON.parse(data);
	return jsonData;
}

export function getAllPostsByTag({ tag }) {
	const posts = getAllPosts();
	return posts.filter((post) => post.tags.includes(tag));
}
