import pieces from "./pieces-autos.js";

const article = pieces[0];

const pieceElement = document.createElement('article');
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `${article.prix} € (${article.prix < 35 ? '€' : '€€€'})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(pieceElement)
pieceElement.appendChild(imageElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);