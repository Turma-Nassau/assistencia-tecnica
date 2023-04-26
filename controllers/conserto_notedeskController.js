const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const consertonotedeskModels = require('../models/conserto_notedesk')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarconsertonotedesk = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await consertonotedeskModels.create({
        marca: req.bodymarca,
        modelo: req.body.modelo,
        serialnumber: req.body.serialnumber,
        defeito: req.body.defeito,
        tipo: req.body.tipo,
        mais_informacoes: req.body.mais_informacoes,
    }).then((result) => {
        res.status(201).json({
            message: "Solicitação de conserto enviada com sucesso!",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao enviar solicitação de conserto",
            error: err
        });
    });
}

exports.verTodosconsertosnotedesk = async (req, res) => {
    console.log('GET');
    await consertonotedeskModels.findAll().then((result) => {
        res.status(200).json({
            message: "Consertos de notebook/desktop encontrados",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar consertos de notebook/desktop",
            error: err
        });
    })
}

exports.verconsertosnotedeskPorUsuario = async (req, res) => {
    console.log('GET');
    await consertonotedeskModels.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Consertos de notebook/desktop encontrados",
            consertos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar consertos de notebook/desktop",
            error: err
        });
    })
}

exports.verconsertonotedeskPorId = async (req, res) => {
    console.log('GET');
    await consertonotedeskModels.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Conserto de notebook/desktop encontrado",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar conserto de notebook/desktop",
            error: err
        });
    })
}

exports.atualizarconsertonotedesk = async (req, res) => {
    console.log('PATCH');
    console.log(req.body);
    await consertonotedeskModels.update({
        marca: req.bodymarca,
        modelo: req.body.modelo,
        serialnumber: req.body.serialnumber,
        defeito: req.body.defeito,
        tipo: req.body.tipo,
        mais_informacoes: req.body.mais_informacoes,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Conserto de notebook/desktop atualizado com sucesso",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar conserto de notebook/desktop",
            error: err
        });
    })
}

exports.deletarconsertonotedesk = async (req, res) => {
    console.log('DELETE');
    await consertonotedeskModels.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Conserto de notebook/desktop deletado com sucesso",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar conserto de notebook/desktop",
            error: err
        });
    })
}