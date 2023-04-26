const { Router } = require('express');
const router = Router();
const conserto_notedeskcontroller = require('../controllers/conserto_notedeskController');

router.get('/', conserto_notedeskcontroller.verTodosconsertosnotedesk);

router.get('/:id', conserto_notedeskcontroller.verconsertonotedeskPorId);

router.get('/user/:id', conserto_notedeskcontroller.verconsertosnotedeskPorUsuario);

router.post('/', conserto_notedeskcontroller.criarconsertonotedesk);

router.patch('/:id', conserto_notedeskcontroller.atualizarconsertonotedesk);

router.delete('/:id', conserto_notedeskcontroller.deletarconsertonotedesk);

module.exports = router;