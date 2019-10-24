const searchArr = require('./seed')
const helpers = require('./index.js')
const mongoose = require('mongoose')
helpers.Search.insertMany(searchArr, function(err){if(err){console.log(err)}})
