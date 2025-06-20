const allPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));
console.log(allPosts[0].frontmatter.title)
// Trouver moyen creer html en JS (marche dans les autres cas car en TypeScript)