const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function getPosts() {
    const postsDirectory = path.join(process.cwd(), 'content/posts' ) //retrieving the posts directory path
    const fileNames = fs.readdirSync(postsDirectory) // getting the names of the files, with the .md extension
    const posts = fileNames.map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '') //getting rid of the .md extension
        const fullPath = path.join(postsDirectory, fileName) //creating the full path of the file
        const fileContents = fs.readFileSync(fullPath, 'utf8') //getting the contents of the file
        const matterResult = matter (fileContents)
        return {
            slug,
            title: matterResult.data.title   // readinf the file and retrieving its id and title from the markdown
        }
    })
    return JSON.stringify(posts)
}

const fileContents = `export const posts = ${getPosts()}` // here we created the contents of the cache file

try {
    fs.readdirSync('cache')
} catch (e) {
    fs.mkdirSync('cache')
}
// if cache directory exists, ok else create it


fs.writeFile('cache/data.js', fileContents, function (err) { // writing to the cache/data.js file
    if (err) return console.log(err);
    console.log("Posts cached.");
})
