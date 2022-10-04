import pieces from "./pieces-autos.js";

const noms = pieces.map(piece => piece.nom);

for(let index = 0; index < pieces.length ; index++){
    const article = pieces[index];
    const pieceElement = document.createElement('article');
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `${article.prix} € (${article.prix < 35 ? '€' : '€€€'})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const disponibleElement = document.createElement("p");
    disponibleElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
    
    const sectionFiches = document.querySelector(".fiches");
    
    sectionFiches.appendChild(pieceElement)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibleElement);
}

const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesReordonnees = Array.from(pieces);
    piecesReordonnees.sort(function(a,b){return a.prix - b.prix})
    console.log(piecesReordonnees)

});

// OPTION 1
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
     });
    const noms = piecesFiltrees.map(piece => piece.nom);
    
    //Création de l'en-tête 
    const pElement = document.createElement('p')
    pElement.innerText = "Pièces abordables";
    //Création de la liste
    const abordablesElements = document.createElement('ul');
    //Ajout de chaque nom à la liste
    for(let i=0; i < noms.length ; i++){
        const nomElement = document.createElement('li');
        nomElement.innerText = noms[i];
        abordablesElements.appendChild(nomElement)
    }
    // Ajout de l'en-tête puis de la liste au bloc résultats filtres
    document.querySelector('.resultats-filtres')
        .appendChild(pElement)
        .appendChild(abordablesElements)
});

/*
// OPTION 2
boutonFiltrer.addEventListener("click", function () {
    const noms = pieces.map(piece => piece.nom); 
    //boucle for de la fin vers le début
    for(let i = pieces.length -1 ; i >= 0; i--){
        if(pieces[i].prix > 35){
            noms.splice(i,1)
        }
    } 
    //Création de l'en-tête 
    const pElement = document.createElement('p')
    pElement.innerText = "Pièces abordables";
    //Création de la liste
    const abordablesElements = document.createElement('ul');
    //Ajout de chaque nom à la liste
    for(let i=0; i < noms.length ; i++){
        const nomElement = document.createElement('li');
        nomElement.innerText = noms[i];
        abordablesElements.appendChild(nomElement)
    }
    // Ajout de l'en-tête puis de la liste au bloc résultats filtres
    document.querySelector('.resultats-filtres')
        .appendChild(pElement)
        .appendChild(abordablesElements)
});
*/

const boutonFiltrerDescription = document.querySelector(".btn-filtrer-description");

boutonFiltrerDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description !== undefined;
     });
     console.log(piecesFiltrees);
});

const boutonTrierDecroissant = document.querySelector(".btn-trier-decroissant");
boutonTrierDecroissant.addEventListener("click", function () {
    const piecesReordonnees = Array.from(pieces);
    piecesReordonnees.sort(function(a,b){return b.prix - a.prix})
    console.log(piecesReordonnees)
});