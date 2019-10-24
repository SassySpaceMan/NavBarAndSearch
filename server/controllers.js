const db = require('../db/index')

const controllers= {
  getSuggestions(req,res){
    var char=req.query.name
    db.Search.find({'name': {$regex: '^'+ char, $options: 'sim'}})
     .then(console.log(req.query.name))
      .then(results=> {
        console.log(results)
        res.json(results);
      })
      .catch(err =>{
        res.status(404).send(`couldn't find any matches`)
      })
  }
}

module.exports = controllers
