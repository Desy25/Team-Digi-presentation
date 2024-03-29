const members = [
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

/* Ordine di età (Andrea) */
function sortAge(arr) {
  arr.sort((a, b) => {
    const ageA = a.age;
    const ageB = b.age;

    if (ageA < ageB) {
      return -1
    } else if (ageA > ageB) {
      return 1
    }
    return 0;
  })

  arr.forEach(x => {
    console.log(`${x.name} ${x.age}`)
  })
}
sortAge(members);


/* Media Età (Luca) */
const sumOfAges = members.reduce((total, member) => total + member.age,0);
const averageAge = sumOfAges / members.length;
console.log(averageAge);


/* Favorite Game (Dennis) */
//print who write "LOL" or "League of Legends" on favorite games
function favGames(array) {
  let likesLol = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i].favoriteVideoGame == "League of Legends" || array[i].favoriteVideoGame == "LOL") {
      console.log(array[i].name + " likes League of Legends")
      likesLol = true
    }

  }
  if (likesLol == false) {
    console.log("A nessuno piace questo gioco!!")
  }
}
favGames(members)



// Print who has a pet. (Desirè)

function getMembersPet(array) {
  for(let i = 0; i < array.length; i++){
      if (array[i].petName.length > 0) {
          console.log(array[i].name + "-" + array[i].petName);
      }
  }
}

getMembersPet(members);


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
