const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.getAllPessoas);
router.get("/pessoas/:id", PessoaController.getOnePessoa);
router.post("/pessoas", PessoaController.setOnePessoa)
router.put("/pessoas/:id", PessoaController.updateOnePessoa)
router.delete("/pessoas/:id", PessoaController.deleteOnePessoa)

// Controladores de Matriculas
router.get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.getOneMatricula);
router.post("/pessoas/:estudanteId/matricula", PessoaController.setOneMatricula);
router.put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.updateOneMatricula);
router.delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.deleteOneMatricula);


module.exports = router;
