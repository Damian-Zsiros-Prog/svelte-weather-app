<script>
	import { getWeather } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	const weatherPromise = getWeather();
</script>

{#await weatherPromise then weather}
	<main>
		<section>
			<h3>{weather.conditionText}</h3>
			<section class="main-info-weather">
				<h1>{weather.locationName}</h1>
				<h2>{weather.temperature}°</h2>
				<img src={weather.conditionIcon} alt={weather.conditionText} />
			</section>
		</section>
		<WeatherFooter
			weatherExtraInfo={{
				humidity: weather.humidity,
				windSpeed: weather.windSpeed,
				feelsLike: weather.feelsLike
			}}
		/>
	</main>
{/await}

<style>
	main {
		width: 100%;
		height: 100%;
		background-image: url(https://mobimg.b-cdn.net/lwallpaper_img/real_time_weather/real/4_real_time_weather.jpg);
		background-position: center;
		background-size: cover;
	}
	section {
		padding: 16px;
	}
	.main-info-weather {
		width: 60%;
		border-radius: 15px;
		background-color: rgba(252, 252, 252, 0.2);
		transition: all 0.5s ease;
	}
	.main-info-weather:hover {
		transform: scale(1.05);
	}
	h1 {
		font-weight: 500;
		color: #333;
		text-transform: uppercase;
		padding: 12px 0 0 0;
	}

	h2 {
		font-weight: 300;
		font-size: 116px;
		color: #333;

		text-transform: uppercase;
		padding: 0;
	}

	h3 {
		font-weight: 700;
		color: #fff;
		transform: rotate(-90deg);
		position: absolute;
		top: 64px;
		right: -18px;
	}
</style>
