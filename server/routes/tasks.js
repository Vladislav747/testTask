let task = require('../models/task.js');
let express = require('express');
let router = express.Router();
let globalFunctions =  require('../../src/globalFunctions.js');

router.post('/createdb', (req, res) => {

  function generateRandomData(){
    var randomDate = globalFunctions.randomDate();
    var randomName = globalFunctions.randomName();
    var randomDistance = globalFunctions.randomNumber();
    var randomQuantity = globalFunctions.randomNumber();

    return {randomDate, randomName, randomDistance, randomQuantity}

  }
  for (let i = 0; i < 20; i++) {
      new Promise((resolve, reject) => resolve(generateRandomData())).then((result) => {
        task.create(
          {
            dateNew:result.randomDate,
            name:result.randomName,
            distance: result.randomDistance,
            quantity: result.randomQuantity
          }
        ).then(function(task) {
          // you can now access the newly created user
          //console.log('success', task.toJSON());
        })
        .catch(function(err) {
            // print the error details
            console.log(err, result);
        });
      
      })
      
     
    }
    
      res.json({ message: 'success'});
   
  
});


router.get('/', (req, res) => {
  task.findAll({
    attributes: [
      'id', 'dateNew', 'name', 'distance', 'quantity'
    ]
  })
  .then(tasks => {
    res.json(tasks)
  })
  .catch(errors => {
    res.json({ message: 'error', errors: errors.errors})
  });
});


module.exports = router;
