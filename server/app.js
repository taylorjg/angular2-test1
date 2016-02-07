var express = require("express");
var app = express();

app.use("/lib", express.static("dist/lib"));
app.use("/client", express.static("dist/client"));

app.listen(3000, function () {
    console.log("Listening on port 3000");
});
