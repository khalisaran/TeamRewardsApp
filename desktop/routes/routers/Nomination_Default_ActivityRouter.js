var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Nomination_Default_ActivityController")
router.post("/Nomination", controller.create_Nomination);
router.get(/^\/Nomination\/(\d+)$/, controller.search_Nomination_for_update);
router.put("/Nomination", controller.update_Nomination);
router.delete(/^\/Nomination\/(\d+)$/, controller.delete_Nomination);
router.get("/Nomination", controller.get_all_Nomination);

module.exports = router;