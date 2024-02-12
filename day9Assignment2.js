
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e); 
console.log(pi); 
console.log(gravity); 
console.log(humanBodyTemp); 
console.log(waterBoilingTemp); 

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin, est, sw, den, nor] = countries;

console.log(fin); 
console.log(est);
console.log(sw);  
console.log(den); 
console.log(nor); 

// Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
const { width, height, area, perimeter } = rectangle;

  console.log(width);
  console.log(height); 
  console.log(area); 
  console.log(perimeter); 
  
  
// Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
users.forEach(user => {
    const { name, scores, skills, age } = user;
    const keys = Object.keys(user);
    console.log(`${name}'s keys: ${keys}`);
    });
// Find the persons who have less than two skills
const personsWithLessThanTwoSkills = users.filter(user => user.skills.length < 2)
console.log("Persons with less than two skills:", personsWithLessThanTwoSkills);   


// Destructure the countries array print name, capital, population and languages of all countries
const countries1 = [
    {
      name: 'Finland',
      capital: 'Helsinki',
      population: 5540720,
      languages: ['Finnish', 'Swedish']
    },
    {
      name: 'Estonia',
      capital: 'Tallinn',
      population: 1326535,
      languages: ['Estonian']
    },
    {
      name: 'Sweden',
      capital: 'Stockholm',
      population: 10099265,
      languages: ['Swedish']
    },
    {
      name: 'Denmark',
      capital: 'Copenhagen',
      population: 5792202,
      languages: ['Danish']
    },
    {
      name: 'Norway',
      capital: 'Oslo',
      population: 5421241,
      languages: ['Norwegian']
    }
  ];
  
  countries1.forEach(({ name, capital, population, languages }) => {
    console.log(`Country: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages.join(', ')}`);
  });
  
// 7. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const [name, skills, [,,jsScore, reactScore]] = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
console.log(name, skills, jsScore, reactScore);

// 8. Write a function called convertArrayToObject which can convert the array to a structure object.
    // const students = [
    //     ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
    //     ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
    const students = [
        ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
        ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
      ];

function convertArrayToObject(students) {
return students.map(([name, skills, scores]) => ({
    name,skills,scores
        }));
} 
console.log(convertArrayToObject(students));

  
  const student1 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node', level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase: [
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience: ['Python', 'R', 'D3.js']
    }
  };

  const newStudent = structuredClone(student1);
  

  newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
  newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
  newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
  newStudent.skills.dataScience.push('SQL');
  
  console.log(newStudent);
  
// output should look like this:
//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }