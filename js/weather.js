var fetchWeather = function(callback){
  var endPoint = "http://api.yumake.jp/1.0/forecastPref.php";
  var accessKey = "7efc7c61659e4342b409d26d03bb2105";

  var params = {
    code: "13",
    key: "7efc7c61659e4342b409d26d03bb2105",
    format: "jsonp"
  }

  var query = "?";
  for(key in params){
    query += "&" + key + "=" + params[key];
  }

  $.ajax({
    type: 'GET',
    url: endPoint + query, 
    dataType: 'jsonp',
    jsonpCallback: 'weather',
    success: function(json){
      callback(json.area[0].weather[0]);
    }
  });
}

