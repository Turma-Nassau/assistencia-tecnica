const Sequelize=require('sequelize');
const { sequelize } = require('../models');
const userModel = require('../models/usuario')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarUsuario = async (req, res) => {
   console.log('POST');
    console.log(req.body);
    await userModel.create({
        nome_completo: req.body.nome_completo,
        cpf: req.body.cpf,
        email: req.body.email,
        senha: req.body.senha,
        endereco: req.body.endereco,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cep: req.body.cep,
        ponto_de_referencia: req.body.ponto_de_referencia,
        sexo: req.body.sexo,
        telefone: req.body.telefone,
    }).then((result) => {
        res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar usuário",
            error: err
        });
    });
}

exports.verTodosUsuarios = async (req, res) => {
    console.log('GET');
    await userModel.findAll().then((result) => {
        res.status(200).json({
            message: "Usuários encontrados com sucesso!",
            users: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar usuários",
            error: err
        });
    });
}

exports.verUsuarioPorId = async (req, res) => {
    console.log('GET');
    await userModel.findByPk(req.params.id).then((result) => {
        if(result == null){
            res.status(404).json({
                message: "Usuário não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Usuário encontrado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar usuário",
            error: err
        });
    });
}

exports.atualizarUsuario = async (req, res) => {
    console.log('PATCH');
    await userModel.update({
        email: req.body.email,
        senha: req.body.senha,
        endereco: req.body.endereco,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cep: req.body.cep,
        ponto_de_referencia: req.body.ponto_de_referencia,
        telefone: req.body.telefone,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if(result == 0){
            res.status(404).json({
                message: "Usuário não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Usuário atualizado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar usuário",
            error: err
        });
    });
}

exports.deletarUsuario = async (req, res) => {
    console.log('DELETE');
    await userModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Usuário deletado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar usuário",
            error: err
        });
    });
}