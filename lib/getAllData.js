import fs from 'fs';
import matter from 'gray-matter';

export function getAllPosts() {
    const files = fs.readdirSync('./posts');
    const posts = files
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const { frontmatter } = getPostBySlug(slug);
        return {
          slug,
          ...frontmatter,
        };
      })

    return posts;
  }

export function getPostBySlug(slug) {
    const fileName = fs.readFileSync(`posts/${slug}.mdx`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      frontmatter,
      content,
    };
  }


  export function getAllWork() {
    const data = fs.readFileSync('json/data.json', 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData.work;
  }

  export function getAllPostsByTag({ tag }) {
    const posts = getAllPosts();
    return posts.filter((post) => post.tags.includes(tag));
  }
