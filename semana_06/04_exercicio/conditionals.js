// Exercícios com estruturas condicionais

// Verificação de idade

const age = 20;

if (age >=18){
    console.log('Você é maior de idade!');
}else{
    console.log('Você é menor de idade!');
}

// Verificação com múltiplas condições

const hour = 23;

if (hour < 12) {
    console.log('Good morning!')
}else if(hour >=12 && hour < 18) {
    console.log('Good afternoon!')
}else if (hour >=18 && hour < 23){
    console.log('Good evening!')
}else{
    console.log('Goodnight!')
}

//Operadores de lógica

const isWeekend = false
const isHoliday = false

if (isHoliday || isWeekend) {
    console.log('Dia de folga, pode dormir mais um pouco!')
}else{
    console.log('Vamo acordar, vamo acordar, sou mais vc nessa guerra...você, é do tamanho do seu sonho, faz o certo, faz a sua....tá com medo de que? Nunca foi fácil...')
}

// Operador ternário

const idade = age >= 18 ? 'Adulto' : 'Menor';
console.log('Status: ', idade);

