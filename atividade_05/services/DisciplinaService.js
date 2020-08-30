const DisciplinaModel = require('../models/DisciplinaModel')

let disciplinas = []
let _id = 0

class DisciplinaService {
    static register(data) {
        let disciplina = new DisciplinaModel(
            _id++,
            data.nome,
            data.curso,
            data.IRA
        )

        disciplinas.push(disciplina)
        return disciplina;
    }

    static list() {
        return disciplinas
    }
}


module.exports = DisciplinaService