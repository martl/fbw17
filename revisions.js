//create an array of student objects

const arrayOfStudents = [
{firstName:"Maria", lastName:"Nanakou", age:40},
{firstName:"Mojgan", lastName:"Vafa", age:23},
{firstName:"Karol", lastName:"Polakowski", age:35},
{firstName:"Ion", lastName:"Lazarev", age:30},
{firstName:"Balaz", lastName:"Danyadi", age:30},
{firstName:"Givara", lastName:"Mahfood", age:25},
{firstName:"Christophe", lastName:"Chris", age:25},
{firstName:"Davide", lastName:"deFeudis", age:35},
{firstName:"Naima", lastName:"AdanAhmed", age:29},
{firstName:"Nic", lastName:"Solitom", age:32},
];

const newArray= arrayOfStudents.map(student => {Solitom", age:32},
];

const newArray= arrayOfStudents.map(student => {
return `${student.firstName} ${student.lastName} is ${age} years old`;
})
console.log(newArray);




