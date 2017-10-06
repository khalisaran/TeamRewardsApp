var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Leader_reviewer_Default_ActivityController")
router.post("/Leader_reviewer", controller.create_Leader_reviewer);
router.get(/^\/Leader_reviewer\/(\d+)$/, controller.search_Leader_reviewer_for_update);
router.put("/Leader_reviewer", controller.update_Leader_reviewer);
router.delete(/^\/Leader_reviewer\/(\d+)$/, controller.delete_Leader_reviewer);
router.get("/Leader_reviewer", controller.get_all_Leader_reviewer);

module.exports = router;