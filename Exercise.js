//1
const value = "Rodrigo";
//2
const itsRaining = true;
if(itsRaining){
    console.log("Está chovendo")
}else{
    console.log("Não está chovendo")
}
//3
const anoNascimento = 1992;
//4
//provocar um erro de forma proposital
const age = 31
age = 32;
console.log(age)
//5
let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log (numbers)
//6
const user = {
    name: "Rodrigo",
    lastName: "Amaral",
    course: "Psicologia",
adress: {
    city: "Recife",
    state: "PE",
},
};
//7
const dados = {
    value,
    itsRaining,
    anoNascimento,
    age
};
console.log(dados)
//8
let x = 10;
let multi = x * 10;
console.log(multi)
//9
const studentsList = [
    {
        name: "Rodrigo",
        lastName: "Amaral",
        course: "Psicologia",
    },
    {
        name: "Júlio",
        lastName: "Alves",
        course: "Matemática"
    },
    {
        name: "Luiza",
        lastName: "Lopes",
        course: "Medicina",
    }

    ]
    console.log(studentsList[0].course)
    console.log(studentsList[1].name)
    console.log(studentsList[2].lastName)
//10
const number1 = 5;
const number2 = 8;
const multi1 = number1*number2;
console.log(multi1)