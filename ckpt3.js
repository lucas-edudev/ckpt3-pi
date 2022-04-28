// Passo 1

let alunos = [
    // {nome: 'Pedro', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'João', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Gabriel', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Maria', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Lucas', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Ana', qtdFaltas: random, notas: [random,random,random]}
] 

function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome
    this.qtdFaltas = qtdFaltas
    this.notas = notas
    

    // Passo 2

    this.calculaMedia = function() {
        let aluno = {}
        let notasTotal = this.notas.reduce((prev, curr) => prev + curr )

        aluno.nome = this.nome
        aluno.media = (notasTotal / this.notas.length) | 0
        aluno.faltas = this.qtdFaltas
        aluno.notas = this.notas

        return aluno
    }

    this.faltas = function() {
        return this.qtdFaltas++
    }
}

const Pedro   =  new Aluno('Pedro',   (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const João    =  new Aluno('João',    (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Gabriel =  new Aluno('Gabriel', (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Maria    =  new Aluno('Maria',    (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Lucas  =  new Aluno('Lucas',  (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Ana  =  new Aluno('Ana',  (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])


// Passo 3

let curso = {
    nome: 'JavaScript',
    faltasMax: 3,
    notaAprovacao: 4,
    listaEstudantes: [
        Pedro, João, Gabriel,
        Maria, Lucas, Ana
    ],


    // Passo 4

    novoAluno: function() {
        this.listaEstudantes.push(new Aluno('João', 7, [7,5,3]))
    },


    // Passo 5

    aprovado: function(aluno) {
        let faltas = aluno.qtdFaltas
        let notas = aluno.notas
        let media = parseInt(notas.reduce((prev, curr) => prev + curr) / notas.length)

        if (
            faltas <= this.faltasMax &&
            media  >= this.notaAprovacao
        ) {
            return true
        }
        return false
    },

    
    // Passo 6

    verificaAprovacao: function() {
        this.listaEstudantes.forEach(aluno => {
            if (this.aprovado(aluno)) {
                aluno.aprovado = true
            } else {
                aluno.aprovado = false
            }
        })
        console.table(this.listaEstudantes, ['nome', 'aprovado'])
    }
}

console.table([
    Pedro.calculaMedia(),
    João.calculaMedia(),
    Gabriel.calculaMedia(),
    Maria.calculaMedia(),
    Lucas.calculaMedia(),
    Ana.calculaMedia()
], ['nome', 'notas', 'media', 'faltas'])

curso.verificaAprovacao()