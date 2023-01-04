// // type User = {
// //   name: string;
// //   age: number;
// //   premiumUser: boolean;
// // }

// // const data: string = `
// // uhyo,26,1
// // john Smith,17,0
// // Mary Sue,14,1
// // `;

// // const users: User[] = [];
// // const lines = data.split("\n")


// // for (const line of lines) {
// //   if (line === "") {
// //     continue;
// //   }
// //   const [name, ageString, premiumUserString] = line.split(",")
// //   const age = Number(ageString)
// //   const premiumUser = premiumUserString === "1"

  
// //   users.push({
// //     name,
// //     age,
// //     premiumUser
// //   });
// // }





// // for (const user of users) {
// //   if (user.premiumUser) {
// //     console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
// //   }else{
// //     console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
// //   }
// // }

// // function range(min: number, max: number) {
// //   const result = []
// //   for (let i = min; i <= max; i++) {
// //     result.push(i);
// //   }
// //   return result;
// // }

// // console.log(range(5,10));

// // type Human ={
// //   weight: number
// //   height: number
// // }
// // const uhyo: Human = {
// //   weight: 72,
// //   height: 1.84
// // }

// // const calcBMI =  ({height,weight}:Human): number => weight/height ** 2

// // console.log(calcBMI(uhyo));

// type User ={
//   name: string
//   age: number
// }

// const getName = (u: User): string => {
//   console.log("u is ",u);
//   return u.name
// }
// const users: User[] = [
//   {name: "uhyo", age: 12},
//   {name: "unko", age: 24},
// ]

// const names = users.map(getName)
// console.log(names);


// type HasName = {
//   name: string 
// }

// type HasNameAndAge = {
//   name: string
//   age: number
// }

// const fromAge = (age: number): HasNameAndAge => ({
//   name: "john Smith",
//   age,
// })

// const f: (age: number ) => HasName = fromAge
// const obj: HasName = f(100)



// const getFizzBuzzString = (i: number) =>{
//   if (i % 3 === 0 && i % 5 === 0) {
//     return "FizzBuzz"
//   } else if (i%3 === 0) {
//   return "Fizz";
//   } else if(i%5 === 0) {
//     return "Buzz";
//   }else{
//     return i
//   }
// }
// for (let i = 1; i <= 100; i++) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
  
// }

class User {
  name: string = "";
  readonly age: number = 0;

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

const uhyo = new User("翔平", 21);

console.log(uhyo.name);
console.log(uhyo.age);
