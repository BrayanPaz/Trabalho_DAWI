import conexao from '../config/conexao.js'

const alunotreinoSchema = new conexao.Schema({
    Dataini: {type: Date, required: true,},
    Datafim: {type: Date, required: true,},
    Alucodigo: {type: conexao.Schema.Types.ObjectId, ref: 'Aluno', required: true},
    Trecodigo: {type: conexao.Schema.Types.ObjectId, ref: 'Treino', required: true}
})

const AT = conexao.model("AT", alunotreinoSchema)

export default AT