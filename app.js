var eating_meeting = require('./index.js');


//console.log(eating_meeting.listCategories())

//console.log(eating_meeting.searchRestaurant(291,1))


guests = [{
		"first_name": "Test",
		"last_name": "Guest 1",
		"email": "stefaniaive@gmail.com"
	},
	{
		"first_name": "Test",
		"last_name": "Guest 2",
		"email": "stefaniaive@gmail.com"
	}]
console.log(eating_meeting.createMeeting("16933515","2019-11-11T17:50:06", guests))

