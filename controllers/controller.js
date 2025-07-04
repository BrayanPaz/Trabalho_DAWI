import AT from '../models/Aluno_Treino.js'
import Aluno from '../models/Aluno.js'
import Equipamento from '../models/Equipamento.js'
import Plano from '../models/Plano.js'
import Professor from '../models/Professor.js'
import TE from '../models/Treino_Equipamento.js'
import Treino from '../models/Treino.js'

export async function Home(req, res)
{
    res.render('Home.ejs')
}

export async function lstPlano(req, res)
{
    const Planos = await Plano.find({})
    //res.json(ATs)
    res.render('listarPlano.ejs', {Plano: Planos})
}
export async function dltPlano(req, res)
{
    await Plano.findByIdAndDelete(req.params.ID)
    res.redirect('/lstPlano')
}
export async function fltPlano(req, res)
{
    const filtro = req.body.filtro
    const Planos = await Plano.find({Nome: new RegExp(filtro, 'i')})
    res.render('listarPlano.ejs', {Plano: Planos})
}
export function abreAddPlano(req, res)
{
    res.render('addPlano.ejs')
}
export async function addPlano(req, res)
{
    let Planos = new Plano({
        Nome: req.body.Nome,
        Descricao: req.body.Descricao,
        Preco: req.body.Preco,
    })
    await Planos.save()
    res.redirect('/lstPlano')
}
export async function abreEdtPlano(req, res)
{
    const Planos = await Plano.findById(req.params.ID)
    res.render('edtPlano.ejs', {Plano: Planos})
}
export async function edtPlano(req, res)
{
    const Planos = await Plano.findById(req.params.ID)
    Planos.Nome = req.body.Nome
    Planos.Descricao = req.body.Descricao
    Planos.Preco = req.body.Preco
    await Planos.save()
    res.redirect('/lstPlano')
}
export async function lstProfessor(req, res)
{
    const Professores = await Professor.find({})
    //res.json(ATs)
    res.render('listarProfessor.ejs', {Professor: Professores})
}
export async function dltProfessor(req, res)
{
    await Professor.findByIdAndDelete(req.params.ID)
    res.redirect('/lstProfessor')
}
export async function fltProfessor(req, res)
{
const filtro = req.body.filtro
    const Professores = await Professor.find({Nome: new RegExp(filtro, 'i')})
    res.render('listarProfessor.ejs', {Professor: Professores})
}
export function abreAddProfessor(req, res)
{
    res.render('addProfessor.ejs')
}
export async function addProfessor(req, res)
{
    let Professores = new Professor({
        Nome: req.body.Nome,
        Nascimento: req.body.Nascimento,
    })
    await Professores.save()
    res.redirect('/lstProfessor')
}
export async function abreEdtProfessor(req, res)
{
    const Professors = await Professor.findById(req.params.ID)
    res.render('edtProfessor.ejs', {Professor: Professors})
}
export async function edtProfessor(req, res)
{
    const Professores = await Professor.findById(req.params.ID)
    Professores.Nome = req.body.Nome
    Professores.Nascimento = req.body.Nascimento
    await Professores.save()
    res.redirect('/lstProfessor')

}
export async function lstAluno(req, res)
{
    const Alunos = await Aluno.find({})
    //res.json(ATs)
    res.render('listarAluno.ejs', {Aluno: Alunos})
}
export async function dltAluno(req, res)
{
    await Aluno.findByIdAndDelete(req.params.ID)
    res.redirect('/lstAluno')
}
export async function fltAluno(req, res)
{
const filtro = req.body.filtro
    const Alunos = await Aluno.find({Nome: new RegExp(filtro, 'i')})
    res.render('listarAluno.ejs', {Aluno: Alunos})
}
export function abreAddAluno(req, res)
{
    res.render('addAluno.ejs')
}
export async function addAluno(req, res)
{
    let Alunos = new Aluno({
        Nome: req.body.Nome,
        Nascimento: req.body.Nascimento,
    })
    await Alunos.save()
    res.redirect('/lstAluno')
}
export async function abreEdtAluno(req, res)
{
    const Alunos = await Aluno.findById(req.params.ID)
    res.render('edtAluno.ejs', {Aluno: Alunos})
}
export async function edtAluno(req, res)
{
    const Alunos = await Aluno.findById(req.params.ID)
    Alunos.Nome = req.body.Nome
    Alunos.Nascimento = req.body.Nascimento
    await Alunos.save()
    res.redirect('/lstAluno')

}
export async function lstTreino(req, res)
{
    const Treinos = await Treino.find({})
    //res.json(ATs)
    res.render('listarTreino.ejs', {Treino: Treinos})
}
export async function dltTreino(req, res)
{
    await Treino.findByIdAndDelete(req.params.ID)
    res.redirect('/lstTreino')
}
export async function fltTreino(req, res)
{
const filtro = req.body.filtro
    const Treinos = await Treino.find({Nome: new RegExp(filtro, 'i')})
    res.render('listarTreino.ejs', {Treino: Treinos})
}
export function abreAddTreino(req, res)
{
    res.render('addTreino.ejs')
}
export async function addTreino(req, res)
{
    let Treinos = new Treino({
        Procodigo: req.body.Procodigo,
        Programacao: req.body.Programacao,
    })
    await Treinos.save()
    res.redirect('/lstTreino')
}
export async function abreEdtTreino(req, res)
{
    const Treinos = await Treino.findById(req.params.ID)
    res.render('edtTreino.ejs', {Treino: Treinos})
}
export async function edtTreino(req, res)
{
    const Treinos = await Treino.findById(req.params.ID)
    Treinos.Procodigo = req.body.Procodigo
    Treinos.Programacao = req.body.Programacao
    await Treinos.save()
    res.redirect('/lstTreino')
}
export async function lstAT(req, res)
{
    const ATs = await AT.find({})
    //res.json(ATs)
    res.render('listarAT.ejs', {AT: ATs})
}
export async function dltAT(req, res)
{
    await AT.findByIdAndDelete(req.params.ID)
    res.redirect('/lstAT')
}
export async function fltAT(req, res)
{
const filtro = req.body.filtro
    const ATs = await AT.find({Nome: new RegExp(filtro, 'i')})
    res.render('listarAT.ejs', {AT: ATs})
}
export function abreAddAT(req, res)
{
    res.render('addAT.ejs')
}
export async function addAT(req, res)
{
    let ATs = new AT({
        Dataini: req.body.Dataini,
        Datafim: req.body.Datafim,
        Alucodigo: req.body.Alucodigo,
        Trecodigo: req.body.Trecodigo,
    })
    await ATs.save()
    res.redirect('/lstAT')
}
export async function abreEdtAT(req, res)
{
    const ATs = await AT.findById(req.params.ID)
    res.render('edtAT.ejs', {AT: ATs})
}
export async function edtAT(req, res)
{
    const ATs = await AT.findById(req.params.ID)
    ATs.Dataini = req.body.Dataini
    ATs.Datafim = req.body.Datafim
    ATs.Alucodigo = req.body.Alucodigo
    ATs.Trecodigo = req.body.Trecodigo
    await ATs.save()
    res.redirect('/lstAT')

}
export async function lstEquipamento(req, res)
{
    const Equipamentos = await Equipamento.find({})
    //res.json(ATs)
    res.render('listarEquipamento.ejs', {Equipamento: Equipamentos})
}
export async function dltEquipamento(req, res)
{
    await Equipamento.findByIdAndDelete(req.params.ID)
    res.redirect('/lstEquipamento')
}
export async function fltEquipamento(req, res)
{
const filtro = req.body.filtro
    const Equipamentos = await Equipamento.find({Nome: new RegExp(filtro, 'i')})
    res.render('listarEquipamento.ejs', {Equipamento: Equipamentos})
}
export function abreAddEquipamento(req, res)
{
    res.render('addEquipamento.ejs')
}
export async function addEquipamento(req, res)
{
    let Equipamentos = new Equipamento({
        Nome: req.body.Nome,
        Descricao: req.body.Descricao,
    })
    await Equipamentos.save()
    res.redirect('/lstEquipamento')
}
export async function abreEdtEquipamento(req, res)
{
    const Equipamentos = await Equipamento.findById(req.params.ID)
    res.render('edtEquipamento.ejs', {Equipamento: Equipamentos})
}
export async function edtEquipamento(req, res)
{
    const Equipamentos = await Equipamento.findById(req.params.ID)
    Equipamentos.Nome = req.body.Nome
    Equipamentos.Descricao = req.body.Descricao
    await Equipamentos.save()
    res.redirect('/lstEquipamento')
}
export async function lstTE(req, res)
{
    const TEs = await TE.find({})
    //res.json(ATs)
    res.render('listarTE.ejs', {TE: TEs})
}
export async function dltTE(req, res)
{
    await TE.findByIdAndDelete(req.params.ID)
    res.redirect('/lstTE')
}
export async function fltTE(req, res)
{
const filtro = req.body.filtro
    const TEs = await TE.find({Nome: new RegExp(filtro, 'i')})
    res.render('listarTE.ejs', {TE: TEs})
}
export function abreAddTE(req, res)
{
    res.render('addTE.ejs')
}
export async function addTE(req, res)
{
    let TEs = new TE({
        Trecodigo: req.body.Trecodigo,
        Equcodigo: req.body.Equcodigo,
        Series: req.body.Series,
    })
    await TEs.save()
    res.redirect('/lstTE')
}
export async function abreEdtTE(req, res)
{
    const TEs = await TE.findById(req.params.ID)
    res.render('edtTE.ejs', {TE: TEs})
}
export async function edtTE(req, res)
{
    const TEs = await TE.findById(req.params.ID)
    TEs.Trecodigo = req.body.Trecodigo
    TEs.Equcodigo = req.body.Equcodigo
    TEs.Series = req.body.Series
    await TEs.save()
    res.redirect('/lstTE')
}