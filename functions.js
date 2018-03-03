console.log("functions rule");

//2 types of functions:
//function expressions
var a = function() {
  console.log("a", 3);
};
//function declaration
function b() {
  console.log("b ", 2)
}

var num = 3;
function numPrinter(monkeyButt) {
  console.log(monkeyButt);
}
//function should do one thing and one thing only
//more, smaller functions
//not one massive function that does everything
numPrinter(num);


function cat() {
  return "ignore them!";
}
var message = cat();
//now, 'message' has the result from the function cat



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

// take pet names and create dom string
// call printToDom function
//My solution
function domStringMaker(animalArray) {
  for (var i = 0; i < animalArray.length; i++) {
    printToDom(animalArray[i].petName, "pet-names");
  }
}
// take string and innerHTML to the divID
function printToDom(stringToPrint, divId) {
  var domName = document.getElementById(divId);
  domName.innerHTML += "<h1>" + stringToPrint + "</h1>";
}
//------------------------------------------
domStringMaker(instructorPets);

//
//Zoe's solution
// function domStringMaker(animalArray) {
//   for (var i = 0; i < animalArray.length; i++) {
//     var animalString = "<h1>" + animalArray[i].petName + "</h1>";
//     printToDom(animalString, "pet-names");
//   }
// }

// function printToDom(stringToPrint, divId) {
//   var myDiv = document.getElementById(divId);
//   myDiv.innerHTML += stringToPrint;
// }

//display each pet as a card
//pet name H1 and underlined
//owner: name of owner
//Type: type of cat
//if favorite, background green
  //if not, make red

function domStringMaker(animalArray) {
    for (var i = 0; i < animalArray.length; i++) {
      var petCard = "notFavorite";
      if (animalArray[i].isFavorite === true) {
        petCard = "isFavorite";
      }
      var animalString =
      "<div class=" + petCard + ">" +
        "<h1>" + animalArray[i].petName + "</h1>" +
        "<h3>" + "Owner: " + animalArray[i].instructorName + "</h3>" +
        "<h3>" + "Type: " + animalArray[i].animalType + "</h3>" +
      "</div>";
      printToDom(animalString, "pet-names");
    }
  }

  function printToDom(stringToPrint, divId) {
    var myDiv = document.getElementById(divId);
    myDiv.innerHTML += stringToPrint;
  }