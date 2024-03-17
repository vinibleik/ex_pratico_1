import { Turma, TurmaPresencial } from "./university/Turmas.js";
import { Aluno } from "./university/Alunos.js";

(() => {
    const aluno = new Aluno("João", "joao@alunos.com", "123123");
    const turma1 = new Turma("AB123", 90);
    const turma2 = new Turma("AB456", 40);
    const turmaPresencial1 = new TurmaPresencial("CD123", 80, 80);
    const turmaPresencial2 = new TurmaPresencial("CD456", 40, 90);
    const turmaPresencial3 = new TurmaPresencial("CD789", 90, 60);

    aluno.addTurma(turma1);
    aluno.addTurma(turma2);
    aluno.addTurma(turmaPresencial1);
    aluno.addTurma(turmaPresencial2);
    aluno.addTurma(turmaPresencial3);

    aluno.printBoletim();
})();
