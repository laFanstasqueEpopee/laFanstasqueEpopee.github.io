document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('expanded');
    /* querySelector sélectionne les éléments appartenants à la classe nav-links et retourne 
    la collection de l'ensemble des classes auxquelles appartient l'élément puis à l'aide de la 
    méthode toggle(), on ajoute la classe expanded à la liste des classes de l'élément. la classe 
    expanded dispose d'une propriété qui permet l'affichage (ce dont ne dispose pas la 
    classe nav-links)*/
    console.log(document.querySelector('.nav-links'));
});