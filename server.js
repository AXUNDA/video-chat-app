const express = require('express');
const ejs = require('ejs');
const app = express();
app.use(express.static("public"))
app.use('/public/icons',express.static(__dirname + '/public/icons'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
      res.render("lobby")
})
app.get("/room/:id", (req, res) => {
      const roomId = req.params.id
      res.render("index", { roomId: roomId,key:"ba2f9661b13648449e4e3e82796208e7" })
      // res.render("index")
})

app.listen(3000, function() {
      console.log("app is active")
})