const films=[{name:"no rules,no fear,just impact",
     category: "action",
    description:"Film d'action intense sur un combattant sans limites qui affronte des ennemis dangereux dans un monde sans règles, où seule la force fait la différence",
    image:"images/imgc1.png" },
    {name: "La vie pour de vrai",
        category: "comédie",
    description: "Un homme découvre le monde réel après avoir vécu isolé toute sa vie.",
     image:"images/imgc2.png"  },
     {
          name:"Jumanji 4", 
     category: "action",
     description: "Suite attendue de la saga Jumanji où les joueurs retournent dans un univers encore plus dangereux avec de nouveaux défis.",
     image: "images/img3.png"},
 {name: "Rambo 6:the last stand",
     category: "action",
    description: "Les joueurs retournent dans un jeu dangereux pour sauver leur ami.",

    image:"images/img4.png"
 },
{name:"Bienvenue  à bord",
     category: "comédie",
    description:"Comédie sur une croisière remplie de situations absurdes et de personnages hauts en couleur.",
    image:"images/img5.png" },
{name:"The Expendables 3",
     category: "action",
     description:"Une équipe de mercenaires affronte un ancien membre devenu ennemi.",
    image:"images/imgc6.png" },
    {name:"FREE  FALL",
         category: "drame",
         description:"Un policier tombe amoureux de son collègue, mettant sa vie personnelle en danger.",
    image:"images/imgc7.png" },
    {name:"Ducobu 3",
         category: "comédie",
         description:"L’élève tricheur revient avec de nouvelles stratégies pour éviter de travailler.",
    image:"images/imgc8.png" },
    {name:"Before Night Falls",
         category: "drame",
         description:"Biographie d’un écrivain cubain confronté à la répression politique.",
    image:"images/imgc9.png" },
     {name:"the train of love",
         category: "drame",
         description:"Drame romantique sur deux inconnus qui se rencontrent dans un train, où leur voyage devient une histoire d’amour inattendue entre émotions, choix et destin",
    image:"images/imgc10.png" },
     {name:"Extraction 3",
         category: "action",
         description:"Suite d’action centrée sur des missions de sauvetage à haut risque",
    image:"images/imgc11.png" },
     {name:"un ticket pour deux",
         category: "comédie",
         description:"Deux hommes opposés voyagent ensemble dans une aventure pleine de conflits et d’humour.",
    image:"images/imgc12.png" },
     {name:"Inception",
         category: "action",
         description:"Des voleurs infiltrent les rêves pour implanter une idée dans l’esprit d’une cible",
    image:"images/img13.png" },
     {name:" Fast & Furious 9",
         category: "action",
         description:"Dom affronte son frère dans une mission liée à un complot mondial.",
    image:"images/img14.png" },
     {name:" Mission: Impossible-Fallout",
         category: "action",
         description:"Ethan Hunt doit empêcher une catastrophe nucléaire après une mission échouée.",
    image:"images/img15.png" },
     {name:"Gladiator",
         category: "action",
         description:"Un général romain trahi devient gladiateur pour se venger de l’empereur.",
    image:"images/img16.png" },
]

const container = document.getElementById("movie-container");

films.forEach((film) => {
  const card = createCard(film);
  container.appendChild(card);
});
function createCard(film) {

  const card = document.createElement("div");
  card.classList.add("card");


  const img = document.createElement("img");
  img.src = film.image;
  img.alt = film.name;

  const title = document.createElement("h3");
  title.textContent = film.name;

  const desc = document.createElement("p");
  desc.textContent = film.description;
  desc.classList.add("desc")
  const category = document.createElement("span");
  category.textContent = film.category;
  category.classList.add("category");

  const btn = document.createElement("button");
  btn.textContent = "Voir plus";

  btn.addEventListener("click", () => {
  modal.style.display = "flex";

  modalImg.src = film.image;
  modalTitle.textContent = film.name;
  modalDesc.textContent = film.description;

  currentFilm = film;
});

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(category);
  card.appendChild(desc);
  card.appendChild(btn);

  return card;
}
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");
const addFavBtn = document.getElementById("add-fav");

let currentFilm = null;
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
const favorites = [];

addFavBtn.addEventListener("click", () => {
  favorites.push(currentFilm);
  alert("Ajouté aux favoris !");
  modal.style.display = "none";
});