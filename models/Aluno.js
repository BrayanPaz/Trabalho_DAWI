import conexao from '../config/conexao.js'

const alunoSchema = new conexao.Schema({
    Matricula: {type: String,},
    Nome: {type: String, required: true,},
    Nascimento: {type: Date, required: true,}
})
alunoSchema.pre('save', function (next) {
    if (!this.Matricula) {
        this.Matricula = this._id.toString();
    }
    next();
});

const Aluno = conexao.model("Aluno", alunoSchema)

export default Aluno
