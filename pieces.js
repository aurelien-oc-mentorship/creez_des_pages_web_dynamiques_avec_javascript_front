import pieces from "./pieces-autos.js";

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

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
     });
     console.log(piecesFiltrees);

});