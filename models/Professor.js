import conexao from '../config/conexao.js'

const professorSchema = new conexao.Schema({
    Matricula: {type: String,},
    Nome: {type: String, required: true,},
    Nascimento: {type: Date, required: true,}
})
professorSchema.pre('save', function (next) {
    if (!this.Matricula) {
        this.Matricula = this._id.toString();
    }
    next();
});

const Professor = conexao.model("Professor", professorSchema)

export default Professor