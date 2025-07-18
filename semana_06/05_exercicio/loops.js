
// Exercícios com loops

// Loop for básico

console.log('Contando de 1 a 5: ');
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break

console.log('Loop com break: ');
for (let i = 1; i <= 10; i++) {
    if(i === 6) {
        console.log('Encontrei o 6, parando o loop!');
        break;
    }
    console.log(i);
}

//Loop com continue

console.log('Pulando numeros pares: ');
for(let i = 1; i <= 10; i++) {
    if (i % 2 ===0) {
        continue; 
    }
    console.log(i);
}

//Iterando sobre arrays

console.log('Lista de Frutas');
const fruits = ['Maça', 'Banana', 'Laranja', 'Manga', 'Uva'];
for (let i = 0; i < fruits.length; i++ ) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}
