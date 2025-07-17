const firstName = 'Patricia';
const lastName = 'Queiroz';
const fullName = firstName + ' ' + lastName;


//Desafio 01:
//Extraia o primeiro nome usando o método slice ou substring

const fatiamento = fullName.slice(0, (firstName.length));
console.log(fatiamento);

//Desafio 02:
//Verifique se o nome completo contém a letra 'a'

const procuraLetra = 'a';
const letraA = []

for (let i = 0; i < fullName.length; i++){

    if (fullName[i].toLowerCase() === procuraLetra.toLowerCase()){
    letraA.push(fullName[i]);}
}

if (letraA.length > 0){
    console.log(`A letra procurada ${procuraLetra}, está presente no nome ${fullName}`);
    console.log(`Encontramos ${letraA.length} letras ${procuraLetra} no seu nome.`)
    console.log(letraA)

}else{`Letra ${procuraLetra} não encontrada!`

}


//Desafio 02:
//Substitua "Silva" por outro sobrenome usando replace

trocaNome = fullName.replace('Queiroz', 'Pereira')
console.log(trocaNome)
