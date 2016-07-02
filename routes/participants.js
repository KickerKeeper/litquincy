var express = require('express');
var router = express.Router();
var _ = require("underscore");


router.get('/participant', function(req, res, next) {
  return res.sendStatus(200);
});

router.post('/participant', function(req, res, next) {

  //Healthcheck
  if (_.contains(_.keys(req.headers), 'x-litquincy-healthcheck')) {
    return res.sendStatus(200);
  }

  //field validation
  if
  (
    !validateField(req.body, "email") ||
    !validateField(req.body, "firstName") ||
    !validateField(req.body, "lastName") ||
    !validateField(req.body, "password") ||
    !validateField(req.body, "type")
  )
  {
    return res.sendStatus(400);
  }

  //Save the data to DB
  //Probably a local file

  //echo
  return res.status(200).send(req.body);

});


function validateField(data, fieldName){
  if ( !_.has(data, fieldName) || !data[fieldName] ){
    return false;
  }

  //'type' field
  var validTypes = ['tutor', 'student', 'admin'];
  if (fieldName === "type"){
    if (!_.contains(validTypes, data.type)){
      return false;
    }
  }

  return true;
}


module.exports = router;
