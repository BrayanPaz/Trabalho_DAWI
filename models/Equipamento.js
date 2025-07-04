import conexao from '../config/conexao.js'

const equipamentoSchema = new conexao.Schema({
    Codigo: {type: String,},
    Nome: {type: String, required: true,},
    Descricao: {type: String, required: true,},
})
equipamentoSchema.pre('save', function (next) {
    if (!this.Codigo) {
        this.Codigo = this._id.toString();
    }
    next();
});

const Equipamento = conexao.model("Equipamento", equipamentoSchema)

export default Equipamento