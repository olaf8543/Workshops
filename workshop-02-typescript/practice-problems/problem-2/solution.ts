function displayUserInfo(user: { name: string, age: number, favoriteFoods: string[] }): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log("Favorite Foods:");
    user.favoriteFoods.forEach((food) => console.log(food));
  }