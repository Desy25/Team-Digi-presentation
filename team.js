const members = [
  {
    name: "Marco",
    surname: "Tassone",
    age: 22,
    city: "Statte",
    hobby: "videogames",
    favoriteFood: "carbonara",
    favoriteVideoGame: "MegaMan Star Force",
    favoriteFilm: "",
    favoriteBook: "",
    petName: "",
  },
  {
    name: "Dennis",
    surname: "Glorioso",
    age: 20,
    city: "Licata",
    hobby: "Videogames",
    favoriteFood: "pasta",
    favoriteVideoGame: "God of war",
    favoriteFilm: "Interstellar",
    favoriteBook: "Percy Jackson",
    petName: ""
  },
  {
    name: 'Andrea',
    surname: 'Saitta',
    age: 20,
    city: 'Bronte',
    hobby: 'Video Games, Anime',
    favoriteFood: 'Pizza',
    favoriteVideoGame: 'AC:Black Flag',
    favoriteFilm: "",
    favoriteBook: "",
    petName: 'Luna'
  },
  {
    name: "Desirè",
    surname: "Passalacqua",
    age: 25,
    city: "Catania",
    hobby: "videogames",
    favoriteFood: "Pizza",
    favoriteVideoGame: "The Last of Us part II",
    favoriteFilm: "Joker",
    favoriteBook: "La storia infinita",
    petName: "Trilly"
  },
  {
    name: "Luca",
    surname: "Lai",
    age: 34,
    city: "Cagliari",
    hobby: "Calisthenic",
    favoriteFood: "Lasagna",
    favoriteVideoGame: "Call of Duty",
    favoriteFilm: "Star Wars",
    favoriteBook: "",
    petName: "Tommy"
  },
  {
    name: "Lorenzo",
    surname: "Gatto",
    age: 27,
    city: "Mogliano Veneto",
    hobby: "Gym",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Valorant",
    favoriteFilm: "Marvel",
    favoriteBook: "Game of Thrones",
    petName: "Holly"
  }
];

//Ordina per cognome(Lorenzo Gatto)
function sortSurname() {
  members.sort((x, y) => {
    if (x.surname > y.surname) { return 1 }
    if (x.surname < y.surname) { return -1 }
    return 0;
  })
  for (let i = 0; i < members.length; i++) {
    console.log(members[i].surname + " " + members[i].name)
  };
}
sortSurname();