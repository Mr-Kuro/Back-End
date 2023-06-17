const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();

router.get("/turmas", TurmaController.getAllTurmas);
router.get("/turmas/:id", TurmaController.getOneTurma);
router.post("/turmas", TurmaController.setOneTurma)
router.put("/turmas/:id", TurmaController.updateOneTurma)
router.delete("/turmas/:id", TurmaController.deleteOneTurma)

module.exports = router;
