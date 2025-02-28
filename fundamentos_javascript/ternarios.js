const animais_zoo = [
  {
    nome: "Leão",
    peso: 256,
  },
  {
    nome: "macaco",
    peso: 90,
  },
  {
    nome: "foca",
    peso: 500,
  },
];

// const array = [animais_zoo];
// for (animais_zoo > 100; animais_zoo < animais_zoo.length; animais_zoo++) {
//  console.log(animais_zoo);
// }

// animais_zoo.map(val => {
//     const hasAnimal = `O animal ${val.nome} tem peso ${val.peso} e está`
//     if(val.peso < 100){
//         console.log(`${hasAnimal} abaixo do peso`);
//     }else{
//         console.log(`${hasAnimal} acima do peso`);
//     }
// })

// animais_zoo.map((val) => {
//   const hasAnimal = `O animal ${val.nome} tem peso ${val.peso} e está`;
//   val.peso < 100
//     ? val.nome.charAt(0) === 'L' ? console.log(`O elefante ta muito magro`)
//     :console.log(`${hasAnimal} abaixo do peso`)
//     : console.log(`${hasAnimal} acima do peso`);
// });

animais_zoo.map((val) => {
    console.log(val.peso ?? val.nome);

})