var express = require("express"),
	router  = express.Router();

//root route
//root route
router.get("/", function(req, res){
    res.render("landing");
});


router.get("/about", function(req, res){
    res.render("about");
});


module.exports = router;