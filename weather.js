const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a4fe8295fmsh28a7a5f8183089bp12cbd7jsn8228482b299a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather= (city)=>{
	cityName.innerHTML=city;
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then((resdata) => { 
		
    console.log(resdata);
	
	cloud_pct.innerHTML=resdata.cloud_pct
	temp.innerHTML=resdata.temp
	temp2.innerHTML=resdata.temp
	feels_like.innerHTML=resdata.feels_like
	humidity.innerHTML=resdata.humidity
	humidity2.innerHTML=resdata.humidity
	min_temp.innerHTML=resdata.min_temp
	max_temp.innerHTML=resdata.max_temp
	wind_speed.innerHTML=resdata.wind_speed
	wind_speed2.innerHTML=resdata.wind_speed
	wind_degrees.innerHTML=resdata.wind_degrees
	sunrise.innerHTML=resdata.sunrise
	sunset.innerHTML=resdata.sunset
	  
	})
	.catch(err => console.error(err));	
}
submit.addEventListener("click",(evt)=>{
evt.preventDefault();
getWeather(city.value);

})
getWeather("delhi");