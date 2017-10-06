var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Nominee_Default_ActivityController")
router.post("/Nominee", controller.create_Nominee);
router.get(/^\/Nominee\/(\d+)$/, controller.search_Nominee_for_update);
router.put("/Nominee", controller.update_Nominee);
router.delete(/^\/Nominee\/(\d+)$/, controller.delete_Nominee);
router.get("/Nominee", controller.get_all_Nominee);
router.get("/Nominee/get_noun_by_parent_id", controller.get_Nominee_by_parent_id);
router.delete("/Nominee/delete_by_parent_id", controller.delete_Nominee_by_parent_id);

module.exports = router;