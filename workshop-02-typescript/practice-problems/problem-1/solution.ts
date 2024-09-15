let userName: string = "Tess";
let favoriteFoods: string[] = ["Roast pork", "Egg tarts", "The souls of tech committee members"];

const user = {
  name: userName,
  age: 25,
  favoriteFoods: favoriteFoods,
};

console.log(user);
console.log(`One of my favorite foods is ${user.favoriteFoods[2]}`);