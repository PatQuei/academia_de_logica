/*
Desafio - Integrador:

Integrando todos os conceitos:

1. Para cada aluno, calcule a média das notas
2. Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)
3. Conte quantos alunos foram aprovados e quantos foram reprovados
4. Encontre o aluno com a maior média
5. Calcule a média geral da turma

> Use console.log() para mostrar todos os resultados com mensagens claras

*/

//Dados dos alunos:

const students = [
    {name: 'Joana', age: 35, grades:[85, 90, 78] },
    {name: 'Mariana', age: 26, grades:[92, 95, 89] },
    {name: 'Clara', age: 19, grades:[75, 60, 73] },
    {name: 'Heloisa', age: 33, grades:[70, 65, 80] },
    {name: 'Amora', age: 18, grades:[60, 75, 68] }
];

//1. Para cada aluno, calcule a média das notas

soma = 0;
for (let i = 0; i < (students.grades).length; i++) {
    soma += students.grades[i];
    media = (soma / (students.grades).length);
}
console.log(`A média do ${students.name} é média.`);