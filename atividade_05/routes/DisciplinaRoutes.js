var express = require('express');
var router = express.Router();
var DisciplinaService = require ('../services/DisciplinaService')


router.get('/list', function (req, res, next) {
    res.json(DisciplinaService.list())

})

router.post('/register', function (req, res, next) {
    res.json(DisciplinaService.register(req.body))
})


module.exports = router

