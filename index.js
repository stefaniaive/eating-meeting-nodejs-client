const request = require('request');
const base_url = "https://eating-meeting-api.herokuapp.com/eating-meeting-api"

exports.listCategories = function() {
	request.get(base_url + '/categories'
	, (error, res, body) => {
	  if (error) {
	    console.error(error)
	    return
	  }
	  console.log(`statusCode: ${res.statusCode}`)
	  console.log(body)
	})


}

exports.searchRestaurant = function(city_id, category_id) {
	url = base_url + `/restaurants?city_id=${city_id}&category_id=${category_id}`

	request.get(url
	,(error, res, body) => {
	  if (error) {
	    console.error(error)
	    return
	  }
	  console.log(`statusCode: ${res.statusCode}`)
	  console.log(body)
	})


}


exports.createMeeting = function(restaurant, date, guests) {
	request.post(base_url + '/meetings', {
	  json: {
	  	"restaurant_id": restaurant,
		"date": date,
		"guests": guests	  
		}
	},(error, res, body) => {
	  if (error) {
	    console.error(error)
	    return
	  }
	  console.log(`statusCode: ${res.statusCode}`)
	  console.log(body)
	})


}