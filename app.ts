interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Lucas',
    idade: 26
}

const outraPessoa: Pessoa = {
    nome: 'Roger',
    idade: 33,
    profissao: 'Esteticista'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1,2,3
]

const arrayString: Array<string> = [
    'abacaxi', 'manga', 'maçã'
]
