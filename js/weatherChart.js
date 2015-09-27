
function makeAjaxRequest(url, func) {
	$.ajax({
	  url: url,
	  dataType: 'jsonp',
	  success: func
  });
}


function getFarenheits(data){
	for(var i = 0, arr = []; i< data.hourly_forecast.length; i++){
		arr.push(data.hourly_forecast[i].temp.english);
	}
	return arr;
}

function getHours(data){
	for(var i = 0, arr = []; i< data.hourly_forecast.length; i++){
		arr.push(data.hourly_forecast[i].FCTTIME.hour_padded);
	}
	return arr;
}

function generateDataSet(labelArray, dataArray) {
var weatherData = {
	labels: labelArray,
	datasets: [
		{
		  label: "Hourly Weather for New York",
		  fillColor: "rgba(220,220,220,0.2)",
		  strokeColor: "rgba(220,220,220,1)",
		  pointColor: "rgba(220,220,220,1)",
		  pointStrokeColor: "#fff",
		  pointHighlightFill: "#fff",
		  pointHighlightStroke: "rgba(220,220,220,1)",
		  data: dataArray
		}
	]
  };
  return weatherData;
}
