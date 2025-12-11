let chosen = 3;

let myFriends = [
  {
    title: 'Osama',
    age: 39,
    available: true,
    skills: ['HTML', 'CSS'],
  },
  {
    title: 'Ahmed',
    age: 25,
    available: false,
    skills: ['Python', 'Django'],
  },
  {
    title: 'Sayed',
    age: 33,
    available: true,
    skills: ['PHP', 'Laravel'],
  },
];
//
//

let title = '';
let age = 0;
let available = true;
let skillTwo = '';

switch (chosen) {
  case 1:
    [
      {
        title,
        age,
        available,
        skills: [, skillTwo],
      },
    ] = myFriends;
    console.log(title);
    console.log(age);
    available ? console.log('available') : console.log('Not available');
    console.log(skillTwo);

    break;
  case 2:
    [
      ,
      {
        title,
        age,
        available,
        skills: [, skillTwo],
      },
    ] = myFriends;
    console.log(title);
    console.log(age);
    available ? console.log('available') : console.log('Not available');
    console.log(skillTwo);
    break;
  case 3:
    [
      ,
      ,
      {
        title,
        age,
        available,
        skills: [, skillTwo],
      },
    ] = myFriends;
    console.log(title);
    console.log(age);
    available ? console.log('available') : console.log('Not available');
    console.log(skillTwo);
    break;
  default:
    console.log('Dont Select Any Choose');

    break;
}
