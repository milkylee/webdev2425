// DOM Objects
const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const pokeListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');


// constants and variables
const TYPES = [
  'normal', 'fighting', 'flying',
  'poison', 'ground', 'rock',
  'bug', 'ghost', 'steel',
  'fire', 'water', 'grass',
  'electric', 'psychic', 'ice',
  'dragon', 'dark', 'fairy'
];
let prevUrl = null;
let nextUrl = null;


// Functions
const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

const resetScreen = () => {
  mainScreen.classList.remove('hide');
  for (const type of TYPES) {
    mainScreen.classList.remove(type);
  }
};

const fetchPokeList = url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const { results, previous, next } = data;
      prevUrl = previous;
      nextUrl = next;

      for (let i = 0; i < pokeListItems.length; i++) {
        const pokeListItem = pokeListItems[i];
        const resultData = results[i];

        if (resultData) {
          const { name, url } = resultData;
          const urlArray = url.split('/');
          const id = urlArray[urlArray.length - 2];
          pokeListItem.textContent = id + '. ' + capitalize(name);
        } else {
          pokeListItem.textContent = '';
        }
      }
    });
};

const fetchPokeData = id => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
      resetScreen();

      const dataTypes = data['types'];
      const dataFirstType = dataTypes[0];
      const dataSecondType = dataTypes[1];
      pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
      if (dataSecondType) {
        pokeTypeTwo.classList.remove('hide');
        pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
      } else {
        pokeTypeTwo.classList.add('hide');
        pokeTypeTwo.textContent = '';
      }
      mainScreen.classList.add(dataFirstType['type']['name']);

      pokeName.textContent = capitalize(data['name']);
      pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
      pokeWeight.textContent = data['weight'];
      pokeHeight.textContent = data['height'];
      pokeFrontImage.src = data['sprites']['front_default'] || '';
      pokeBackImage.src = data['sprites']['back_default'] || '';
    });
};

const handleLeftButtonClick = () => {
  if (prevUrl) {
    fetchPokeList(prevUrl);
  }
};

const handleRightButtonClick = () => {
  if (nextUrl) {
    fetchPokeList(nextUrl);
  }
};

const handleListItemClick = (e) => {
  if (!e.target) return;

  const listItem = e.target;
  if (!listItem.textContent) return;

  const id = listItem.textContent.split('.')[0];
  fetchPokeData(id);
};


// adding event listeners
leftButton.addEventListener('click', handleLeftButtonClick);
rightButton.addEventListener('click', handleRightButtonClick);
for (const pokeListItem of pokeListItems) {
  pokeListItem.addEventListener('click', handleListItemClick);
}


// initialize App
fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

// Select modal
var mpopup = document.getElementById('mpopupBox');

// Select trigger link
var mpLinkA = document.getElementById("mpopupLinkA");
// Select trigger link
var mpLinkB = document.getElementById("mpopupLinkB");

// Select trigger link
var savedPlayer = document.getElementById("saved_player");

// Select close action element
var close = document.getElementsByClassName("close")[0];

var globalA = '';
var globalB = '';


// Open modal once the link is clicked
mpLinkA.onclick = function () {
  var playerA = document.getElementsByClassName("poke-name")[0].innerText;
  mpopup.style.display = "block";
  var selected = document.getElementById("selected_pokemon");
  selected.innerText = "You have selected " + playerA;
  globalA = playerA;
};

mpLinkB.onclick = function () {
  var playerB = document.getElementsByClassName("poke-name")[0].innerText;
  mpopup.style.display = "block";
  var selected = document.getElementById("selected_pokemon");
  selected.innerText = "You have selected " + playerB;
  globalB = playerB;
};

savedPlayer.onclick = function () {
  var playerAPoke = document.getElementById("playerA_poke");
  var playerBPoke = document.getElementById("playerB_poke");

  playerAPoke.innerText = globalA;

  playerBPoke.innerText = globalB;

  mpopup.style.display = "none";
};

// Close modal once close element is clicked
close.onclick = function () {
  mpopup.style.display = "none";
};

// Close modal when user clicks outside of the modal box
window.onclick = function (event) {
  if (event.target == mpopup) {
    mpopup.style.display = "none";
  }
};