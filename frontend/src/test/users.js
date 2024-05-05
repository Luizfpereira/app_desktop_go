export const usersTest = [
    {
        name: "Lucas",
        age: 25,
        email: "lucas@example.com",
        address: "Rua das Flores, 123",
        city: "São Paulo",
        state: "SP"
    },
    {
        name: "Ana",
        age: 32,
        email: "ana@example.com",
        address: "Avenida Brasil, 456",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        name: "Carlos",
        age: 40,
        email: "carlos@example.com",
        address: "Rua do Sol, 789",
        city: "Salvador",
        state: "BA"
    },
    {
        name: "Mariana",
        age: 22,
        email: "mariana@example.com",
        address: "Rua das Palmeiras, 321",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        name: "Pedro",
        age: 27,
        email: "pedro@example.com",
        address: "Avenida Central, 987",
        city: "Brasília",
        state: "DF"
    },
    {
        name: "Juliana",
        age: 35,
        email: "juliana@example.com",
        address: "Rua da Praia, 654",
        city: "Fortaleza",
        state: "CE"
    },
    {
        name: "Rafael",
        age: 30,
        email: "rafael@example.com",
        address: "Avenida das Árvores, 741",
        city: "Curitiba",
        state: "PR"
    },
    {
        name: "Fernanda",
        age: 29,
        email: "fernanda@example.com",
        address: "Rua das Pedras, 852",
        city: "Recife",
        state: "PE"
    },
    {
        name: "Gustavo",
        age: 33,
        email: "gustavo@example.com",
        address: "Avenida dos Girassóis, 159",
        city: "Goiânia",
        state: "GO"
    },
    {
        name: "Camila",
        age: 26,
        email: "camila@example.com",
        address: "Rua das Estrelas, 753",
        city: "Manaus",
        state: "AM"
    },
    {
        name: "Ricardo",
        age: 38,
        email: "ricardo@example.com",
        address: "Avenida das Rosas, 369",
        city: "Porto Alegre",
        state: "RS"
    },
    {
        name: "Isabela",
        age: 31,
        email: "isabela@example.com",
        address: "Rua das Águas, 246",
        city: "Belém",
        state: "PA"
    },
    {
        name: "Diego",
        age: 24,
        email: "diego@example.com",
        address: "Avenida dos Coqueiros, 852",
        city: "Florianópolis",
        state: "SC"
    },
    {
        name: "Amanda",
        age: 28,
        email: "amanda@example.com",
        address: "Rua das Montanhas, 741",
        city: "Vitória",
        state: "ES"
    },
    {
        name: "Thiago",
        age: 34,
        email: "thiago@example.com",
        address: "Avenida das Dunas, 159",
        city: "Natal",
        state: "RN"
    },
    {
        name: "Luiza",
        age: 23,
        email: "luiza@example.com",
        address: "Rua das Dunas, 753",
        city: "João Pessoa",
        state: "PB"
    },
    {
        name: "Fábio",
        age: 36,
        email: "fabio@example.com",
        address: "Avenida das Flores, 369",
        city: "Campo Grande",
        state: "MS"
    },
    {
        name: "Patrícia",
        age: 27,
        email: "patricia@example.com",
        address: "Rua das Neves, 246",
        city: "Teresina",
        state: "PI"
    },
    {
        name: "José",
        age: 32,
        email: "jose@example.com",
        address: "Avenida dos Pássaros, 852",
        city: "Aracaju",
        state: "SE"
    },
    {
        name: "Luana",
        age: 29,
        email: "luana@example.com",
        address: "Rua das Flores, 741",
        city: "Cuiabá",
        state: "MT"
    }
];

function generateUsers() {
    const users = [];
    let userId = 1;
    const cities = ["São Paulo", "Rio de Janeiro", "Salvador", "Belo Horizonte", "Brasília", "Fortaleza", "Curitiba", "Recife", "Goiânia", "Manaus"];
    const states = ["SP", "RJ", "BA", "MG", "DF", "CE", "PR", "PE", "GO", "AM"];

    for (let i = 0; i < 50; i++) {
        const index = i % 10;
        const city = cities[index];
        const state = states[index];

        users.push({
            name: `User ${userId}`,
            age: Math.floor(Math.random() * 20) + 20, // Random age between 20 and 39
            email: `user${userId}@example.com`,
            address: `Address ${userId}`,
            city: city,
            state: state
        });

        userId++;
    }

    return users;
}

export function getUsers() {
    // Cria a lista de usuários
    const users = generateUsers();

    // Divide a lista de usuários em partes de 10 itens
    const usersChunks = [];
    for (let i = 0; i < users.length; i += 10) {
        usersChunks.push(users.slice(i, i + 10));
    }
    return usersChunks;
}


