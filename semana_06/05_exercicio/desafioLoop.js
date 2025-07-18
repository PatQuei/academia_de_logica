//  #### DESAFIO


/*
1. Crie um loop que imprima a tabuada do 7 (de 1 a 10)
*/
console.log('*****Tabuada do 7*****')
for (let i = 0; i <= 10; i++) {
    console.log(`7 x ${i} = ${i * 7}`);
}

/*
2. Crie um array de números e calcule a soma deles usando um loop */
const somaNumero = ('***Somando o Array***');
const numeros = [20, 40, 66, 98, 104];
soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(`A soma dos itens da lista ${numeros} é ${soma}.`);

/*
3. Crie um loop que identifique o menor valor em um array de números */

const maiorNumero = ('***Maior número da lista***');
const maior = [20, 40, 66, 98, 104];
console.log('O maior numero dessa lista é: ' + Math.max(...maior));