const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();

router.get("/niveis", NivelController.getAllNiveis);
router.get("/niveis/:id", NivelController.getOneNivel);
router.post("/niveis", NivelController.setOneNivel)
router.put("/niveis/:id", NivelController.updateOneNivel)
router.delete("/niveis/:id", NivelController.deleteOneNivel)

module.exports = router;
