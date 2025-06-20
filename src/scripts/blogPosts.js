const allPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));
const blogList = document.getElementById("blogPosts");
allPosts.forEach(post => {
    const listElement = document.createElement('li');
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href',post.url)
    linkElement.innerHTML = `${post.frontmatter.title} by ${post.frontmatter.author} 
    (${post.frontmatter.pubDate.toString().slice(0,10)})`;
    listElement.appendChild(linkElement);
    blogList.appendChild(listElement);
});
//impossible de créer des components astro depuis un script JS
//Finalement, script inutilisé, je passe par les components dans le layout des blogs