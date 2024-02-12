// 1. Create an empty object called cow
let cow = {};

// 2. Print the cow object on the console
console.log(cow);

// 3. Add name, legs, color, age, and sound properties for the cow object
cow = {
  name: 'Sundari',
  legs: 4,
  color: 'White',
  age: 9,
  sound() {
    return "maaah maaah";
  }
};

// 4. Get name, legs, color, age, and sound value from the cow object
const { name, legs, color, age, sound } = cow;
console.log(name); // Output: Bessie
console.log(legs); // Output: 4
console.log(color); // Output: black
console.log(age); // Output: 5
console.log(sound()); // Output: maaah maaah

// 5. Set new properties for the cow object: breed, getCowInfo()
cow = {
  ...cow,
  breed: 'Jersey',
  getCowInfo() {
    return `Name: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Age: ${this.age}, Sound: ${this.sound()}`;
  }
};
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 6. Find the person who has many skills in the users object
let skillfulPerson = '';
let maxSkills = 0;

for (const [user, { skills }] of Object.entries(users)) {
  if (skills.length > maxSkills) {
    maxSkills = skills.length;
    skillfulPerson = user;
  }
}

console.log(`Person with the most skills: ${skillfulPerson}`);

// 7. Count logged in users
let loggedInUsers = 0;
Object.values(users).forEach(user => {
  if (user.isLoggedIn) {
    loggedInUsers++;
  }
});
console.log(`Logged in users: ${loggedInUsers}`);


// 8. Count users having greater than or equal to 30 points
const highPointsUsers = Object.values(users).filter(user => user.points >= 30).length;
console.log(`Users with 30 or more points: ${highPointsUsers}`);


// 9. Find people who are MERN stack developers
const mernDevelopers = [];
for (const [user, { skills }] of Object.entries(users)) {
  if (['MongoDB', 'Express', 'React', 'Node'].every(skill => skills.includes(skill))) {
    mernDevelopers.push(user);
  }
}
console.log(`MERN Stack developers: ${mernDevelopers}`);


// 10. Set your name in the users object without modifying the original users object
const updatedUsers = {...users,
  Vineet: { email: 'vineetpatil00@gmail.com', skills: ['JavaScript'], age: 25, isLoggedIn: false, points: 0 }
};
console.log(updatedUsers);
console.log(users)
// // 11. Get all keys or properties of the users object
console.log(Object.keys(users));

// // 12. Get all the values of the users object
console.log(Object.values(users));

// // 13. Use the countries object to print a country name, capital, populations and languages


// // 14. Create an object called personAccount
const personAccount = {
  firstName: 'Vineet',
  lastName: 'Patil',
  incomes: [10000,11000],
  expenses: [9000,10000],
  totalIncome() {
    return this.incomes.reduce((acc, cur) => acc + cur.amount, 0);
  },
  totalExpense() {
    return this.expenses.reduce((acc, cur) => acc + cur.amount, 0);
  },
  accountInfo() {
    return `Total Income: ${this.totalIncome()}, Total Expenses: ${this.totalExpense()}`;
  },
  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};
console.log(personAccount)

// // 15. Imagine you are getting the below users array of objects
const usersArray = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt:'08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];

// // 16. Create a function called signUp which allows a user to add to the collection
function signUp(newUser) {
  const usernames = usersArray.map(user => user.username);
  if (usernames.includes(newUser.username)) {
    console.log(`User ${newUser.username} already has an account.`);
  } else {
    usersArray.push(newUser);
    console.log(`User ${newUser.username} successfully added.`);
  }
}

// // 17. Create a function called signIn which allows a user to sign in to the application
function signIn(username, password) {
  const user = usersArray.find(user => user.username === username);
  if (user && user.password === password) {
    user.isLoggedIn = true;
    console.log(`User ${username} login successful`);
  } else {
    console.log(`invalid username or password.`);
  }
}
console.log(signIn('Brook',123111))

// // 18. The products array has three elements and each of them has six properties
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

// // 19. Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rating) {
  const product = products.find(product => product._id === productId);
  if (product) {
    const { name, ratings } = product;
    ratings.push({ userId, rate: rating });
    console.log(`Product ${name} rated successfully by user ${userId}.`);
  } else {
    console.log(`Product with id ${productId} not found.`);
  }
}

// // 20. Create a function called averageRating which calculates the average rating of a product
function averageRating(productId) {
  const product = products.find(product => product._id === productId);
  if (product && product.ratings.length > 0) {
    const { name, ratings } = product;
    const totalRating = ratings.reduce((acc, { rate }) => acc + rate, 0);
    const average = totalRating / ratings.length;
    console.log(`Average rating for product ${name}: ${average.toFixed(2)}`);
  } else {
    console.log(`Product with id ${productId} not found or has no ratings yet.`);
  }
}

// // 21. Create a function called likeProduct. This function will help to like the product if it is not liked and remove the like if it was liked
function likeProduct(productId, userId) {
  const product = products.find(product => product._id === productId);
  if (product) {
    const { name, likes } = product;
    const index = likes.indexOf(userId);
    if (index === -1) {
      likes.push(userId);
      console.log(`User ${userId} liked product ${name}.`);
    } else {
      likes.splice(index, 1);
      console.log(`User ${userId} removed the like for product ${name}.`);
    }
  } else {
    console.log(`Product with id ${productId} not found.`);
  }
}
