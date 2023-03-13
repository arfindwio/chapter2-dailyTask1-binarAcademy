const person = [
  {
    _id: "640eeb1b2b5378cba278a066",
    isActive: false,
    age: 31,
    eyeColor: "brown",
    name: "Vaughan Deleon",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640eeb1b4975ff8d26ed779a",
    isActive: true,
    age: 32,
    eyeColor: "brown",
    name: "Wilkinson Reese",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640eeb1bade56890aa6c16f5",
    isActive: false,
    age: 24,
    eyeColor: "blue",
    name: "Kathy Mcguire",
    gender: "female",
    favoriteFruit: "apple",
  },
  {
    _id: "640eeb1ba2f1e4f118df8f8f",
    isActive: true,
    age: 33,
    eyeColor: "brown",
    name: "Levy Rose",
    gender: "male",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640eeb1b80a0967acfdeadd0",
    isActive: true,
    age: 22,
    eyeColor: "green",
    name: "Maryann Stuart",
    gender: "female",
    favoriteFruit: "apple",
  },
  {
    _id: "640eeb1bfb921ca6abf3aea4",
    isActive: false,
    age: 29,
    eyeColor: "brown",
    name: "Durham Lyons",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640eeb1b13fcb6730ae8ff8a",
    isActive: true,
    age: 40,
    eyeColor: "blue",
    name: "Jacquelyn Trujillo",
    gender: "female",
    favoriteFruit: "banana",
  },
  {
    _id: "640eeb1bb740f3cc3daa3ce0",
    isActive: true,
    age: 35,
    eyeColor: "brown",
    name: "Muriel Pittman",
    gender: "female",
    favoriteFruit: "apple",
  },
  {
    _id: "640eeb1b2088b8d8aea2c65a",
    isActive: true,
    age: 38,
    eyeColor: "green",
    name: "Dejesus Acosta",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640eeb1b42688c743cb71066",
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Jeannine Mullen",
    gender: "female",
    favoriteFruit: "apple",
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
