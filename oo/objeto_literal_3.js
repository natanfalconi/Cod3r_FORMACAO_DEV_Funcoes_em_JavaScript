// problema da utilização de objetos literais
const user1 = {
    nome: "lucas",
    email: 'qualquer@gmail.com',
    cadastro: new Date(),
    senha: '123456',
}

const user2 = {
    nome: "Rafael",
    email: 'rafael@gmail.com',
    dataCadastro: new Date()
}

console.log(user1, user2)