let members = [
  {
    name: "Marco",
    surname: "Tassone",
    age: 22,
    city: "Statte",
    hobby: "videogames",
    favoriteFood: "carbonara",
    favoriteVideoGame: "MegaMan Star Force",
    favoriteFilm: " ",
    favoriteBook: " ",
    petName: " ",
  },
];

//Print if there are some members with the same name (name) (marco)
function sameName(array) {
  const nomeuguale = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i].name;
    for (let j = i+1; j < array.length; j++) {
      if (current === array[j].name) {
        nomeuguale.push(current);
      }
    }
  }
  if(nomeuguale.length > 0){
    console.log(nomeuguale)
  }else {
    console.log("non ci sono nomi uguali")
  }
}

sameName(members);
