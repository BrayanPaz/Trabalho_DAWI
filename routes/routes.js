import express from 'express';
const router = express.Router();

import {
    Home,

    lstPlano,
    dltPlano,
    fltPlano,
    abreAddPlano,
    addPlano,
    abreEdtPlano,
    edtPlano,

    lstProfessor,
    dltProfessor,
    fltProfessor,
    abreAddProfessor,
    addProfessor,
    abreEdtProfessor,
    edtProfessor,

    lstAluno,
    dltAluno,
    fltAluno,
    abreAddAluno,
    addAluno,
    abreEdtAluno,
    edtAluno,

    lstTreino,
    dltTreino,
    fltTreino,
    abreAddTreino,
    addTreino,
    abreEdtTreino,
    edtTreino,

    lstAT,
    dltAT,
    fltAT,
    abreAddAT,
    addAT,
    abreEdtAT,
    edtAT,

    lstEquipamento,
    dltEquipamento,
    fltEquipamento,
    abreAddEquipamento,
    addEquipamento,
    abreEdtEquipamento,
    edtEquipamento,

    lstTE,
    dltTE,
    fltTE,
    abreAddTE,
    addTE,
    abreEdtTE,
    edtTE
} from '../controllers/controller.js';

router.get('/', Home)

router.get('/Plano', abreAddPlano)
router.post('/Plano', addPlano)
router.get('/lstPlano', lstPlano)
router.post('/lstPlano', fltPlano)
router.get('/dltPlano/:ID', dltPlano)
router.get('/edtPlano/:ID', abreEdtPlano)
router.post('/edtPlano/:ID', edtPlano)

router.get('/Professor', abreAddProfessor)
router.post('/Professor', addProfessor)
router.get('/lstProfessor', lstProfessor)
router.post('/lstProfessor', fltProfessor)
router.get('/dltProfessor/:ID', dltProfessor)
router.get('/edtProfessor/:ID', abreEdtProfessor)
router.post('/edtProfessor/:ID', edtProfessor)

router.get('/Aluno', abreAddAluno)
router.post('/Aluno', addAluno)
router.get('/lstAluno', lstAluno)
router.post('/lstAluno', fltAluno)
router.get('/dltAluno/:ID', dltAluno)
router.get('/edtAluno/:ID', abreEdtAluno)
router.post('/edtAluno/:ID', edtAluno)

router.get('/Treino', abreAddTreino)
router.post('/Treino', addTreino)
router.get('/lstTreino', lstTreino)
router.post('/lstTreino', fltTreino)
router.get('/dltTreino/:ID', dltTreino)
router.get('/edtTreino/:ID', abreEdtTreino)
router.post('/edtTreino/:ID', edtTreino)

router.get('/AT', abreAddAT)
router.post('/AT', addAT)
router.get('/lstAT', lstAT)
router.post('/lstAT', fltAT)
router.get('/dltAT/:ID', dltAT)
router.get('/edtAT/:ID', abreEdtAT)
router.post('/edtAT/:ID', edtAT)

router.get('/Equipamento', abreAddEquipamento)
router.post('/Equipamento', addEquipamento)
router.get('/lstEquipamento', lstEquipamento)
router.post('/lstEquipamento', fltEquipamento)
router.get('/dltEquipamento/:ID', dltEquipamento)
router.get('/edtEquipamento/:ID', abreEdtEquipamento)
router.post('/edtEquipamento/:ID', edtEquipamento)

router.get('/TE', abreAddTE)
router.post('/TE', addTE)
router.get('/lstTE', lstTE)
router.post('/lstTE', fltTE)
router.get('/dltTE/:ID', dltTE)
router.get('/edtTE/:ID', abreEdtTE)
router.post('/edtTE/:ID', edtTE)

export default router;