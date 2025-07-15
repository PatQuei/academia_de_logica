//Desafio 01
//Calcule a média de 3 números: 15, 25 e 38

const numero1 = 15;
const numero2 = 25;
const numero3 = 38;

const media = (numero1 + numero2 + numero3)/3;
console.log(media);

//Desafio 02
//Converta a string "123.45" em um número

const toConverter = '123.45';
console.log('Origilnal Version: ', toConverter, typeof toConverter);
const converted = Number(toConverter);
console.log('Converted to Number: ', converted, typeof converted);

//Desafio 03
//Arredonde o resultado de 9.7 dividido por 2 para o inteiro mais próximo

numeroDecimal = 9.7;
numeroInteiro = Math.round(numeroDecimal);
console.log(`O número inteiro mais proximo ao número ${numeroDecimal} é o número ${numeroInteiro}`);
