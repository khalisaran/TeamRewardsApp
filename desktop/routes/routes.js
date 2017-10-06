var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/Nomination_Default_Activity", routers.Nomination_Default_ActivityRouter);
api.use("/Nominee_Default_Activity", routers.Nominee_Default_ActivityRouter);
api.use("/Leader_reviewer_Default_Activity", routers.Leader_reviewer_Default_ActivityRouter);

module.exports = api;