import { getAllPosts } from "@/lib/getAllData";



const URL = "https://localhost:3000";

//const posts = getAllPosts()

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
       <!-- Add the static URLs manually -->
       <url>
         <loc>${URL}</loc>
       </url>
       <url>
         <loc>${URL}/work</loc>
       </url>
        <url>
         <loc>${URL}/blog</loc>
       </url>
       ${posts
         .map(({ slug }) => {
           return `
             <url>
                 <loc>${`${URL}/blog/${slug}`}</loc>
             </url>
           `;
         })
         .join("")}
     </urlset>
   `;
  }

export async function getServerSideProps({ res }) {
    const posts = getAllPosts();

    // Generate the XML sitemap with the blog data
    const sitemap = generateSiteMap(posts);

    res.setHeader("Content-Type", "text/xml");
    // Send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  }

  export default function SiteMap() {}
