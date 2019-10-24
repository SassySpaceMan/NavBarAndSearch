// const Search = require('./index.js')


const genders = [`men's`, `women's`, `unisex`];
const brands = ['merrell', 'arcteryx', 'osprey', 'mountain hardwear', 'north face'];
const clothing = ['jackets', 'pants', 'shoes', 'socks', 'boots', 'outerwear','hats', 'gloves', 'caps', 'beanies', 'bandanas', 'leggings', 'shorts', 'underwear', 'briefs', 'sandals', 'slippers', 'insoles', 'casual', 'shirts', 'skirts', 'ski and snowboard', 'vests', 'sunglasses', 'goggles', 'watches', 'belts', 'gaiters', 'clothing', 'big', 'tall', 'short', 'small', 'medium', 'large', 'x-large', 'xxl', 'x-small', 'extra small', 'extra large', 'mittens', 'scarves', 'headbands']
const things = ['stoves', 'bottles', 'water bottles', 'backpacks', 'trekking poles', 'bikes', 'lighters', 'headlamps', 'lanterns', 'tents', 'sleeping bags', 'kitchen', 'cookware', 'utensils',
'gps', 'solar & portable', 'hydration packs']

const seed = ()=>{
  var results=[];
  for (var i = 0;i < genders.length; i++){
    var newObj = {'name': genders[i]}
    results.push(newObj)
    for(var j = 0; j < clothing.length; j++){
      var newObj = {'name': genders[i]+' '+clothing[j]}
      results.push(newObj)
    }
  }
  for (var k = 0; k < things.length; k++){
    var newObj = {'name': things[k]}
    results.push(newObj)
  }
  for (var o = 0; o < brands.length; o++){
    var newObj = {'name': brands[o]}
    results.push(newObj)
  }
  for (var c = 0; c < clothing.length; c++){
    var newObj = {'name': clothing[c]}
    results.push(newObj)
  }
  return results;
}

const searchArr = seed()


// Search.insertMany(searchArr, function(err){if(err){console.log(err)}})

module.exports = searchArr