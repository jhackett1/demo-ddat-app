var axios = require('axios');
var xml2js = require('xml2js')

function endpointBuilder(title){
  var encodedTitle = title.split(' ').join('+');
  return "https://www.goodreads.com/book/title.xml?key=" + process.env.GOODREADS_API_KEY + "&title=" + encodedTitle;
}

var goodreads = {
  getMetadata: function(title, cb){
    axios({
      method: 'get',
      url: endpointBuilder(title)
    })
      .then(function(response){
        // Turn the response from XML into JSON so we can work with it
        xml2js.parseString(response.data, function (err, result) {
          if(err) return console.log(err)
          cb(null, result.GoodreadsResponse.book)
        })

      })
      .catch(function(err){
        cb(err, null)
      })
  }
}

module.exports = goodreads;
