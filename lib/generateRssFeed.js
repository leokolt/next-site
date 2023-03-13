import fs from "fs";
import { Feed } from "feed";
import { getAllPosts } from "./posts";

export default async function generateRssFeed() {
    const posts = getAllPosts();
    //const siteURL = process.env.VERCEL_URL;
    const siteURL = 'http://localhost:3000'
    const date = new Date();
    const author = {
        name: "John Doe",
        email: "example@gmail.com",
        link: "https://twitter.com/<username>",
    };
    const feed = new Feed({
        title: "Your Blog name",
        description: "Your Blog description",
        id: siteURL,
        link: siteURL,
        image: `${siteURL}/favicon.ico`,
        favicon: `${siteURL}/favicon.ico`,
        copyright: `All rights reserved ${date.getFullYear()}, Jatin Sharma`,
        updated: date, // today's date
        generator: "Feed for Node.js",
        feedLinks: {
          rss2: `${siteURL}/rss/feed.xml`,  // xml format
          json: `${siteURL}/rss/feed.json`,// json fromat
        },
        author,
      });

      posts.forEach((post) => {
        const url = `${siteURL}/blog/${post.slug}`;
        feed.addItem({
          title: post.title,
          id: url,
          link: url,
          description: post.excerpt,
          content: post.excerpt,
          author: [author],
          contributor: [author],
          date: new Date(post.date),
        });
      });

      fs.mkdirSync("./public/rss", { recursive: true });
    fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
    fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
