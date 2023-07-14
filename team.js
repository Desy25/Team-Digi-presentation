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
  }
];


let findAverageAge = (arr = []) => {
  let { sum, count } = arr.reduce((acc, val) => {
     let { sum, count } = acc;
     sum += val.age;
     count++;
     return { sum, count };
     }, {
        sum: 0, count: 0
  });
  return (sum / (count || 1));
};
console.log(`${"The avarage age is"} ${findAverageAge(members)}`);