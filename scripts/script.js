const generateSign = () => {
	const signWrapper = document.querySelector(".sign-wrapper");

	const usSpeeds = [
		5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85,
	];
	const canadaSpeeds = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
	// const speedLimitSet = [usSpeeds, canadaSpeeds]
	let selectedCountrySpeeds;

	const selectRandomCountry = Math.floor(Math.random() * 2);
	console.log("country", selectRandomCountry);
	selectRandomCountry === 0
		? (selectedCountrySpeeds = usSpeeds)
		: (selectedCountrySpeeds = canadaSpeeds);
	console.log("country speeds", selectedCountrySpeeds);
	const speedLimit =
		Math.floor(Math.random() * selectedCountrySpeeds.length);
	console.log("speed limit", speedLimit);

	const speedLimitSign = document.createElement("div");
	const signHeading = document.createElement("p");
	const convertToUnit = document.createElement("p");
	const postedSpeed = document.createElement("p");
  const postedSpeedUnit = document.createElement("p")
	speedLimitSign.classList.add("speed-limit-sign");
	signHeading.classList.add("sign-labels");
	postedSpeed.classList.add("speed-limit-posting");
  postedSpeedUnit.classList.add("sign-labels")
	convertToUnit.classList.add("sign-labels");

	signHeading.textContent = "CONVERT";
	postedSpeed.textContent = `${selectedCountrySpeeds[speedLimit]}`;
  postedSpeedUnit.textContent = `${selectRandomCountry === 0 ? "mph" : "km/h"}`
	convertToUnit.textContent = `TO ${selectRandomCountry === 0 ? "km/h" : "mph"}`;

	speedLimitSign.append(signHeading, postedSpeed, postedSpeedUnit, convertToUnit);
	signWrapper.append(speedLimitSign);
};

generateSign();
