console.log('hello');

//Simple object
var favAnimal = {
  name: "Steveo",
  animal: "mouse"
};

//preferred format, dot notation
// console.log("fav animal: ", favAnimal.animal);
// not preferred, bracket notation
// console.log("fav animal: ", favAnimal['animal']);

var instructorPets = [
  {
    instructorName: "Zoe",
    petName: "Biff",
    animalType: "evil cat",
    isFavorite: false
  },
  {
    instructorName: "Zoe",
    petName: "Whiskey",
    animalType: "cat",
    isFavorite: true
  },
  {
    instructorName: "Lauren",
    petName: "Frankie",
    animalType: "sweet dog",
    isFavorite: true
  },
  {
    instructorName: "Callan",
    petName: "Seymour",
    animalType: "one eyed dog",
    isFavorite: true
  },
  {
    instructorName: "Callan",
    petName: "Wiley",
    animalType: "destructive dog",
    isFavorite: false
  }
];

// console.log("instructor pets: ",instructorPets);

for (var i = 0; i < instructorPets.length; i++) {
  document.getElementById("pet-names").innerHTML += "<h1>" + instructorPets[i].petName + "</h1>";
}

var petDiv = document.getElementById("pet-names");
for (var i = 0; i < instructorPets.length; i++) {
  petDiv.innerHTML += "<h1>" + instructorPets[i].petName + "</h1>";
}

//----------------------------------------------
//Functions ------------------------------------
//----------------------------------------------


