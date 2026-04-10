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

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const popupCategory = document.getElementById("popup-category");
const closeBtn = document.getElementById("close");

function displayFilms(filmsList) {

  container.innerHTML = "";

  filmsList.forEach((film) => {
    const card = createCard(film);
    container.appendChild(card);
  });
}

function createCard(film) {

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = film.image;

  const title = document.createElement("h3");
  title.textContent = film.name;

  const desc = document.createElement("p");
  desc.textContent = film.description;
  desc.classList.add("desc");

  const category = document.createElement("span");
  category.textContent = film.category;
  category.classList.add("category");

  const btn = document.createElement("button");
  btn.textContent = "Voir plus";
  btn.addEventListener("click", () => {
    popup.style.display = "flex";

    popupImg.src = film.image;
    popupTitle.textContent = film.name;
    popupDesc.textContent = film.description;
    popupCategory.textContent = film.category;
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(category);
  card.appendChild(desc);
  card.appendChild(btn);

  return card;
}

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
const favBtn = document.getElementById("fav-btn");

favBtn.addEventListener("click", () => {
  let favoris = JSON.parse(localStorage.getItem("favoris")) || [];
  const filmData = {
    title: popupTitle.textContent,
    image: popupImg.src,
    description: popupDesc.textContent,
    category: popupCategory.textContent
  };
  const exists = favoris.some(f => f.title === filmData.title);

 if (!exists) {
  favoris.push(filmData);
  localStorage.setItem("favoris", JSON.stringify(favoris));
  displayFavorites(); 
  alert("Ajouté aux favoris ❤️");
  } else {
    alert("Déjà dans favoris ⚠️");
  }
});
function displayFavorites() {

  const favContainer = document.getElementById("favorites-container");
  let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

  favContainer.innerHTML = "";

  favoris.forEach((film, index) => {

    const card = document.createElement("div");
    card.classList.add("card"); 

    const img = document.createElement("img");
    img.src = film.image;

    const title = document.createElement("h3");
    title.textContent = film.title;

    const category = document.createElement("span");
    category.textContent = film.category;
    category.classList.add("category");

    const desc = document.createElement("p");
    desc.textContent = film.description;
    desc.classList.add("desc");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer ❌";

    deleteBtn.addEventListener("click", () => {
      removeFromFavorites(index);
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(desc);
    card.appendChild(deleteBtn);

    favContainer.appendChild(card);
  });
}
displayFavorites();
function removeFromFavorites(index) {

  let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

  favoris.splice(index, 1); 

  localStorage.setItem("favoris", JSON.stringify(favoris));

  displayFavorites(); 
}
function filterFilms(category) {

  if (category === "all") {
    displayFilms(films);
  } else {
    const filtered = films.filter(film => film.category === category);
    displayFilms(filtered);
  }
}
window.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const cat = btn.dataset.cat;
      filterFilms(cat);

    });
  });

});
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-cat");
    filterFilms(category);
  });
});
const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = films.filter(film =>
    film.name.toLowerCase().includes(value)
  );

  displayFilms(filtered);
});