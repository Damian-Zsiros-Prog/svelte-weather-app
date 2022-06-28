const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '41d0fc80ffmshc8dc80ced5e4f6bp1e0955jsnd89ba0c56624',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeather(city = 'Cartagena') {
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
		FETCH_OPTIONS
	);
	const data = await response.json();
	const { location, current } = data;
	const { country, locatime, name } = location;
	const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
	const { icon, text } = condition;
	return {
		conditionText: text,
		conditionIcon: icon,
		country,
		locatime,
		locationName: name,
		humidity,
		feelsLike: feelslike_c,
		isDay: is_day,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir
	};
}
