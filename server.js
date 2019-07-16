// DEPENDENCIES //
// ============================================================
const express = require('express');

// VARIABLES //
// ============================================================
const port = 8080;

// EXPRESS //
// ============================================================
var app = express();
app.use(express.static('public'));

// Server //
// ============================================================
var server = app.listen(port, function(){
    console.log("Server started at http://localhost:%s", port);
});