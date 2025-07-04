import conexao from '../config/conexao.js'

const planoSchema = new conexao.Schema({
    Codigo: {type: String,},
    Nome: {type: String, required: true,},
    Preco: {type: Number, required: true,},
    Descricao: {type: String, required: true,},
})
planoSchema.pre('save', function (next) {
    if (!this.Codigo) {
        this.Codigo = this._id.toString();
    }
    next();
});

const Plano = conexao.model("Plano", planoSchema)

export default Plano