var express 	= require("express"),
	app         = express();

//requiring routes
var indexRoutes      = require("./routes/index");

//default engine and extention
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);

//Port handeling
var listener = app.listen(4000, function(){
    console.log('Listening on port ' + listener.address().port); 
	//Listening on port 4000
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The site is ALiVE!");
});

