const salaDeAlula = [{
    nome: "Gabriel",
    idade: 20,
    profissao: "pintor"
},{
    nome: "Eduardo",
    idade: 24,
    profissao: "freela"

},{
    nome: "Nicolas",
    idade: 19,
    profissao: "fut dev"
}]

const array = [salaDeAlula];
for (let i = 0; i < array.length; i++) {
 console.log(array[i]);
}

//IMC = (peso) / (altura * altura)
//console.log(IMC);

function bmiCalculator(weight, height){
    const bmiRule = (weight) / Math.pow(height, 2);
    return bmiRule;
}
console.log(bmiCalculator(70, 173));
