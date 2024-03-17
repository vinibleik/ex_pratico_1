/**
 * @class Turma
 * @classdesc Classe que representa uma turma
 * */
export class Turma {
    /**
     * @type {string}
     * */
    #codigo;

    /**
     * @type {number}
     * */
    #nota;

    /**
     * @param {string} codigo - Código da Turma
     * @param {number} nota - Nota da Turma
     * */
    constructor(codigo, nota) {
        this.#codigo = codigo;
        this.#nota = nota;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get nota() {
        return this.#nota;
    }

    set nota(novaNota) {
        this.#nota = novaNota;
    }

    /**
     * @returns {boolean} - true se a nota for maior ou igual a 60, false caso contrário
     * */
    aprovado() {
        return this.#nota >= 60;
    }
}

/**
 * @class TurmaPresencial
 * @classdesc Classe que representa uma turma presencial
 * @extends Turma
 * */
export class TurmaPresencial extends Turma {
    /**
     * @type {number}
     * */
    #frequencia;

    /**
     * @param {string} codigo - Código da TurmaPresencial
     * @param {number} nota - Nota da TurmaPresencial
     * @param {number} frequencia - Frequência da TurmaPresencial
     * */
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.#frequencia = frequencia;
    }

    /**
     * @returns {boolean} - true se a nota for maior ou igual a 60 e a frequência for maior ou igual a 75, false caso contrário
     * */
    aprovado() {
        return super.aprovado() && this.#frequencia >= 75;
    }

    get frequencia() {
        return this.#frequencia;
    }

    set frequencia(novaFrequencia) {
        this.#frequencia = novaFrequencia;
    }
}
