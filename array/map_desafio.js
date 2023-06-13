const alunos = [
    { nome: "Heriberto Woodhall", n1: 5.6, n2: 7.8, n3: 6.5, n4: 8.5 },
    { nome: "Debbie Shalloe", n1: 3.7, n2: 2.5, n3: 6.1, n4: 4.2 },
    { nome: "Orran Fennessy", n1: 8.7, n2: 9.7, n3: 2.7, n4: 8.8, },
    {
        nome: "Whitney Rayhill",
        n1: 2.7,
        n2: 6.8,
        n3: 2.8,
        n4: 4.7,
    },
    {
        nome: "Claybourne Matei",
        n1: 7.8,
        n2: 3.3,
        n3: 2.7,
        n4: 9.9,
    },
    {
        nome: "Egor Becraft",
        n1: 1.3,
        n2: 9.5,
        n3: 9.8,
        n4: 2.2,
    },
];

const media = (aluno) => {
    let media = (aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4) / 4

    const result = {
        nome: aluno.nome,
        media: media
    }
    return result
}

const resultado = alunos.map(media)
console.log(resultado)


// CORREÇÃO FEITA PELO PROFESSOR

// function calcularMedia(aluno) {
//     return {
//         nome: aluno.nome,
//         media: Math.round((aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4) / 4)  // Math.round faz a formatação do valor, poderia ser Math.ceil por exemplo
//     }
// }

// console.log(alunos.map(calcularMedia))