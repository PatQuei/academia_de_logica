/* 
1. Crie um sistema de classificação de notas:
** 0 - 59 : F
** 60 - 69 : D
** 70 - 79 : C
** 80 - 89 : B
** 90 - 100 : A
*/

const nota = 100;


if (nota < 60) {
    console.log("Sua nota é F, vai repetir o ano letivo.");
}else if(nota >= 60 && nota < 70){
    console.log("Sua nota é D, precisa recuperar nota, está de recuperação.");
}else if(nota >= 70 && nota < 80){
    console.log("Sua nota é C, passou raspando.");
}else if(nota >= 80 && nota < 90){
    console.log("Sua nota é B, você foi bem.");
}else{
    console.log("Parabéns, você tirou A");
}

/* 
2. Verifique se um numero é par ou impar
*/

numero = 3;

if (numero % 2 === 0) {
    console.log('Número par');
}else{
    console.log('Número ímpar');
}

/* 
3. Crie uma verificação que diga se uma pessoa pode dirigir 
(Precisa ser maior de idade e ter habilitação)
*/

const idade = 15;
const possuiHabilitacao = true;

if (idade >= 18 && possuiHabilitacao){
    console.log('Você pode dirigir!')
}else if (idade < 18 && possuiHabilitacao){
    console.log('Essa habilitação é falsa, você não pode dirigir!')
}else{
    console.log('Você já tem idade para dirigir, mas precisa da carteira de motorista!')
}