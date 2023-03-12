const person = [
  {
    _id: "640b3db322d45364b37cb9f9",
    isActive: true,
    age: 40,
    eyeColor: "blue",
    name: "Ratliffw Little",
    gender: "male",
    favoriteFruit: "banana",
  },
  {
    _id: "640b3db33d75f4ad2f535f13",
    isActive: false,
    age: 23,
    eyeColor: "green",
    name: "LeachW Jefferson",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640b3db33827f6ed1367f388",
    isActive: true,
    age: 25,
    eyeColor: "green",
    name: "Angeline Navarro",
    gender: "female",
    favoriteFruit: "banana",
  },
  {
    _id: "640b3db332abaf9afe6b74d1",
    isActive: false,
    age: 39,
    eyeColor: "brown",
    name: "Castillo Mejia",
    gender: "male",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640b3db395c99c4845989426",
    isActive: false,
    age: 22,
    eyeColor: "green",
    name: "Joyce Daniel",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640b3db32e4f0755a481b985",
    isActive: true,
    age: 22,
    eyeColor: "blue",
    name: "Gilliam Greer",
    gender: "male",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640b3db366b5c7a3df9f288c",
    isActive: false,
    age: 38,
    eyeColor: "blue",
    name: "Anne Johns",
    gender: "female",
    favoriteFruit: "banana",
  },
  {
    _id: "640b3db3c9ea7f1054afeb33",
    isActive: false,
    age: 34,
    eyeColor: "blue",
    name: "Elvira Kirk",
    gender: "female",
    favoriteFruit: "apple",
  },
  {
    _id: "640b3db3a7491dbae475f536",
    isActive: true,
    age: 28,
    eyeColor: "green",
    name: "Farley Palmer",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640b3db36c98b6617f54c8fe",
    isActive: true,
    age: 26,
    eyeColor: "blue",
    name: "Noble Alvarez",
    gender: "male",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640b3db3f9e69028c3d5ccb2",
    isActive: false,
    age: 31,
    eyeColor: "blue",
    name: "Nell Carver",
    gender: "female",
    favoriteFruit: "apple",
  },
  {
    _id: "640b3db3667e9053c56308f7",
    isActive: false,
    age: 36,
    eyeColor: "blue",
    name: "Emma Franks",
    gender: "female",
    favoriteFruit: "apple",
  },
  {
    _id: "640b3db3cc4f6ec38db44c2f",
    isActive: true,
    age: 30,
    eyeColor: "brown",
    name: "Elnora Burris",
    gender: "female",
    favoriteFruit: "apple",
  },
  {
    _id: "640b3db3c950fedf76a0ae94",
    isActive: true,
    age: 31,
    eyeColor: "blue",
    name: "Britney Cannon",
    gender: "female",
    favoriteFruit: "strawberry",
  },
];

// 1) print person yang suka buah apple dan warna mata nya biru
for (let i = 0; i < person.length; i++) {
  if (person[i].favoriteFruit === "apple" && person[i].eyeColor === "blue") {
    console.log(person[i]);
  }
}

// 2) print berapa person yang age nya diatas 30
for (let i = 0; i < person.length; i++) {
  if (person[i].age > 30) {
    console.log(person[i]);
  }
}

// 3) print person yang isActive true and  gender nya female
for (let i = 0; i < person.length; i++) {
  if (person[i].isActive && person[i].gender == "female") {
    console.log(person[i]);
  }
}

// 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
for (let i = 0; i < person.length; i++) {
  if (person[i].age > 30 || (person[i].age < 25 && person[i].eyeColor == "Blue")) {
    console.log(person[i]);
  }
}

// 5) print person yang mengandung huruf W di name nya
for (let i = 0; i < person.length; i++) {
  if (person[i].name.match("W") || person[i].name.match("w")) {
    console.log(person[i]);
  }
}

// 6) print person isActive false dan gender nya male dan age nya diatas 25
for (let i = 0; i < person.length; i++) {
  if (person[i].isActive === false && person[i].gender === "male" && person[i].age > 25) {
    console.log(person[i]);
  }
}

// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
for (let i = 0; i < person.length; i++) {
  if (person[i].age < 30 || (person[i].eyeColor === "brown" && person[i].favoritFruit === "banana")) {
    console.log(person[i]);
  }
}

// 8) print person gender male
for (let i = 0; i < person.length; i++) {
  if (person[i].gender === "male") {
    console.log(person[i]);
  }
}

// 9) print person eyeColor Blue
for (let i = 0; i < person.length; i++) {
  if (person[i].eyeColor === "Blue") {
    console.log(person[i]);
  }
}

// 10) print person age diatas 30
for (let i = 0; i < person.length; i++) {
  if (person[i].gender >= 30) {
    console.log(person[i]);
  }
}
