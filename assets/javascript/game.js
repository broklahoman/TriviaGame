 <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
 <script type="text/javascript">
 $(document).ready(function(){



 // 	var counter = 0
 // 	var score = 0
 // 	var $name = $('.name'),
 //    $generate = $('.generate'),
 //    $result = $('.results'),
 //    $score = $('.score'),
 //    $thanks = $('.thanks'),
 //    $options = $('.options');


 // 	var content = [
 // 	// band names
 // 	{"name":"Hard Proof", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"Henry Hall", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"Hideout", " answer": "band", "full answer": "2017 SXSW band"},
	// {"name":"Sun and the Wolf", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"Death Valley Girls", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"The Lonesome Heros", " answer": " band", "full answer": "2017 SXSW band"}, 
 // 	{"name":"Mail the Horse", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"The Mastersons", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"Ocean Park Standoff", " answer": "band", "full answer": "2017 SXSW band"},	
 // 	{"name":"Mt. Wolf", " answer": "band", "full answer": "2017 SXSW band"}, 
 // 	{"name":"Slim Gravy", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"St.Tropez", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"The Blind Owls", " answer": " band", "full answer": "2017 SXSW band"},
 // 	{"name":"Broncho", " answer": " band", "full answer": "2017 SXSW band"}, 
 // 	{"name":"Call of the Void", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"The Two Lips", " answer": "band", "full answer": "2017 SXSW band"},
 // 	{"name":"The Band of Heathens", " answer": " band", "full answer": "2017 SXSW band"},


 // 	// movies
 // 	{"name": "Randy Rides Alone", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Men Without Women", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "The Black Watch", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Baby Face", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "A Man Betrayed", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Lady for a Night", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Blood Alley", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Hatari!", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "True Grit", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Rio Bravo", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Cheer up and Smile", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "The Searchers", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Hondo", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Words and Music", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Rough Romance", "answer": "movie", "full answer" : "A John Wayne movie"}, 
 // 	{"name": "Girls Demand Excitement", "answer": "movie", "full answer" : "A John Wayne movie"}, 
	// ]


	//  var nameGetter = 
	// for (var i = 0; i< content.length; i++) {
		

	// 	}
 	
	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
	//// // // timer logic// // // // // // // 

	// setTimeout(timeUp, 60000);
	
	// function timeUp() {
 //        $("#time-left").html("<h2>Time's Up!</h2");
 //        console.log("done");
	


	var timer = {
		

		time: 60,

		start: function() {

	    intervalId = setInterval(timer.count, 1000);},

	    count: function(){

			timer.time--;
			console.log(timer.count)
			var converted = timer.timeConverter(timer.time);
    		console.log(converted);

	    $("#timer-display").html(timer.time);
	    }
		,


		timeConverter: function(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
  }
 };


});



 </script> 


 </script>