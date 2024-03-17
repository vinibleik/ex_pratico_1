/**
 * @class Aluno
 * @classdesc Classe que representa um Aluno
 * */
export class Aluno {
    /**
     * @param {string} nome - Nome do Aluno
     * @param {string} login - Login do Aluno
     * @param {string} RA - RA do Aluno
     * */
    constructor(nome, login, RA) {
        this.nome = nome;
        this.login = login;
        this.RA = RA;
        this.turmas = [];
    }

    /**
     * @param {Turma} turma - Turma a ser adicionada
     * */
    addTurma(turma) {
        this.turmas.push(turma);
    }

    /**
     * @returns {Array<{codigo: string, nota: number, aprovado: boolean}>} - Array com o código, nota e se o aluno foi aprovado ou não
     * */
    boletim() {
        return this.turmas.map((turma) => {
            return {
                codigo: turma.codigo,
                nota: turma.nota,
                frequencia: turma.frequencia ?? "N/A",
                aprovado: turma.aprovado() ? "Aprovado  ✅" : "Reprovado ❌",
            };
        });
    }

    /**
     * Imprime o boletim do aluno
     * */
    printBoletim() {
        console.log(`Boletim do Aluno ${this.nome}, RA: ${this.RA}`);
        console.table(this.boletim());
    }
}
