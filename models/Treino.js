import conexao from '../config/conexao.js'

const treinoSchema = new conexao.Schema({
    Procodigo: {type: conexao.Schema.Types.ObjectId, ref: 'Professor', required: true},
    Programacao: {type: String, required: true,}
})

const Treino = conexao.model("Treino", treinoSchema)

export default Treino