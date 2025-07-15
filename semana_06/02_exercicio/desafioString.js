//Desafio 01:
//Extraia o primeiro nome usando o método slice ou substring

const fatiamento = fullName.slice(0, (firstName.length));
console.log(fatiamento);

//Desafio 02:
//Verifique se o nome completo contém a letra 'a'

const procuraLetra = 'a';
if (fullName.includes(procuraLetra)){
    console.log(`A letra procurada ${procuraLetra}, está presente no nome ${fullName}`)

}else{`Letra ${procuraLetra} não encontrada!`

}

//Desafio 02:
//Substitua "Silva" por outro sobrenome usando replace

trocaNome = fullName.replace('Queiroz', 'Pereira')
console.log(trocaNome)
