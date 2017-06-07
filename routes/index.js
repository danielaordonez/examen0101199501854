var express = require('express');
var router = express.Router();

 router.get('/examen0101199501854', function(req,res,next){
  var examen = [
              {"nombre":"Daniela Arabelly Ordonez Matamoros"},
              {"cuenta":"0101-1995-01854"},
              {"correo":"danii-om@hotmail.com"}
              ];
  res.json(examen);
}); 

router.get('/sumar', function(req,res,next){
  res.render('suma',{"enteroUno":"", "enteroDos":""});
});


var resp = [];

router.post('/sumar', function(req,res,next){
  console.log(req.body);
  resp.push(parseInt(req.body.enteroUno)+parseInt(req.body.enteroDos));
  var msgs =resp;
  var rtObject={};
  rtObject.enteroUno=req.body.enteroUno;
  rtObject.enteroDos=req.body.enteroDos;
  rtObject.msg=msgs;
  res.render('suma', rtObject);
});

module.exports = router;
