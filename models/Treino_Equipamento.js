import conexao from '../config/conexao.js'

const treinoequipamentoSchema = new conexao.Schema({
    Series: {type: Number, required: true,},
    Equcodigo: {type: conexao.Schema.Types.ObjectId, ref: 'Equipamento', required: true},
    Trecodigo: {type: conexao.Schema.Types.ObjectId, ref: 'Treino', required: true}
})

const TE = conexao.models.TE || conexao.model('TE', treinoequipamentoSchema);

export default TE