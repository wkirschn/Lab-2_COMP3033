const e = require('express');
var express = require('express');
const { res } = require('../../app');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  var x = req.query.x;
  var y = req.query.y;
  var operation = req.query.method;
  let result;
  let calculate;
  



if(x != null && y != null && operation != null) {


calculate = 
[ {
  "Please check your results below:" : "Passed",
  "x": req.query.x,
  "y":  req.query.y,
  "operation": req.query.method,
  "result": executeCalculation(operation)
} 
]

function executeCalculation(operation) {

  let result


  if(operation == "add") {
    return result = x + y;
  }
  
  if (operation == "subtract") {
    return result = x - y;
  }
  
  if (operation == "multiply") {
    return result = x * y;
  }
  
  if (operation == "divide") {
   if(y == 0) {
     if(x != 0) {
      return result = 0;
     }
     else {
    return result = "undefined";
     }
   }

   else {
    return result = (x / y);
   }
  }
  
  else {
    return result = null;
  }

}



}

else {
 calculate = 
[{
  "Please check your input." : "Failed"
}]
}

console.log(req.query.x);
  res.json(calculate).status(200);

});

module.exports = router;


// if(operation == "add") {
//   result = (2 + 2);
// }

// if (operation = "subtract") {
//   result = x - y;
// }

// if (operation = "multiply") {
//  result = x * y;
// }

// if (operation = "divide") {
//  if(y = 0) {
//    result = "undefined";
//  }
//  else {
//   result = x / y;
//  }
// }

