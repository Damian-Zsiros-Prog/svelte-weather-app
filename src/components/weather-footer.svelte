<script>
	export let weatherExtraInfo;
</script>

<footer>
	<div>
		<span>{weatherExtraInfo.humidity}%</span>
		<strong>Humidity</strong>
	</div>
	<div>
		<span>{weatherExtraInfo.windSpeed} km/h</span>
		<strong>Wind Speed</strong>
	</div>
	<div>
		<span>{weatherExtraInfo.feelsLike}°</span>
		<strong>Feels like</strong>
	</div>
</footer>

<style>
	footer {
		background-color: #fdfdfd;
		padding: 32px;
		width: 50;
		margin: 0 auto;
		width: 80%;
		border-radius: 10px;
		display: flex;
		text-align: center;
		justify-content: space-evenly;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 32px;
		transition: all 0.5s ease;
	}
	footer:hover {
		transform: scale(1.05);
	}
	span {
		display: block;
		font-weight: 600;
		font-size: 14px;
	}
</style>
