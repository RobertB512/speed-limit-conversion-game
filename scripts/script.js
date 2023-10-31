const generateSign = () => {
	const whiteBorderWrapper = document.querySelector(".white-border-wrapper");

	let selectedCountrySpeeds;

	const usSpeeds = [
		{ speed: 5, answers: [10, 20, 30], answer: 10 },
		{ speed: 10, answers: [40, 10, 30], answer: 10 },
		{ speed: 15, answers: [20, 24, 30], answer: 30 },
		{ speed: 20, answers: { a: 32, b: 30, c: 50 }, answer: 30 },
		{ speed: 25, answers: [40, 30, 50], answer: 40 },
		{ speed: 30, answers: [60, 40, 50], answer: 50 },
		{ speed: 35, answers: [50, 70, 60], answer: 50 },
		{ speed: 40, answers: [70, 60, 80], answer: 60 },
		{ speed: 45, answers: [70, 72, 80], answer: 70 },
		{ speed: 50, answers: [85, 70, 80], answer: 80 },
		{ speed: 55, answers: [90, 100, 85], answer: 90 },
		{ speed: 60, answers: [96, 90, 100], answer: 90 },
		{ speed: 65, answers: [100, 104, 110], answer: 100 },
		{ speed: 70, answers: [120, 110, 112], answer: 110 },
		{ speed: 75, answers: [120, 100, 130], answer: 10 },
		{ speed: 80, answers: [128, 140, 130], answer: 130 },
		{ speed: 85, answers: [140, 130, 136], answer: 130 },
	];
	const canadaSpeeds = [
		{ speed: 10, answers: [5, 6, 10], answer: 5 },
		{ speed: 20, answers: [12, 10, 15], answer: 5 },
		{ speed: 30, answers: [10, 18, 20], answer: 5 },
		{ speed: 40, answers: [5, 6, 10], answer: 5 },
		{ speed: 50, answers: [5, 6, 10], answer: 5 },
		{ speed: 60, answers: [5, 6, 10], answer: 5 },
		{ speed: 70, answers: [5, 6, 10], answer: 5 },
		{ speed: 80, answers: [5, 6, 10], answer: 5 },
		{ speed: 90, answers: [5, 6, 10], answer: 5 },
		{ speed: 100, answers: [5, 6, 10], answer: 5 },
		{ speed: 110, answers: [5, 6, 10], answer: 5 },
		{ speed: 120, answers: [5, 6, 10], answer: 5 },
	];

	const selectRandomCountry = Math.floor(Math.random() * 2);
	console.log("country", selectRandomCountry);
	selectRandomCountry === 0
		? (selectedCountrySpeeds = usSpeeds)
		: (selectedCountrySpeeds = canadaSpeeds);
	console.log("country speeds", selectedCountrySpeeds);
	const speedLimit = Math.floor(Math.random() * selectedCountrySpeeds.length);

	console.log("speed limit", speedLimit);

	const speedLimitSign = document.createElement("div");
	const signHeading = document.createElement("p");
	const convertToUnit = document.createElement("p");
	const postedSpeed = document.createElement("p");
	const postedSpeedUnit = document.createElement("p");
	speedLimitSign.classList.add("speed-limit-sign", "sign");
	signHeading.classList.add("sign-labels");
	postedSpeed.classList.add("speed-limit-posting");
	postedSpeedUnit.classList.add("sign-labels");
	convertToUnit.classList.add("sign-labels");

	signHeading.textContent = "CONVERT";
	postedSpeed.textContent = `${selectedCountrySpeeds[speedLimit].speed}`;
	postedSpeedUnit.textContent = `${selectRandomCountry === 0 ? "mph" : "km/h"}`;
	convertToUnit.textContent = `TO ${
		selectRandomCountry === 0 ? "km/h" : "mph"
	}`;

	speedLimitSign.append(
		signHeading,
		postedSpeed,
		postedSpeedUnit,
		convertToUnit
	);
	whiteBorderWrapper.append(speedLimitSign);

	generateAnswers(
		selectedCountrySpeeds[speedLimit],
		selectedCountrySpeeds[speedLimit].answer
	);
};

const generateAnswers = (speedObj, correctSpeed) => {
	const speedLimitSign = document.querySelector(".speed-limit-sign");

	console.log(
		`Ansers for sign: speed: ${speedObj.speed}. Answers: ${speedObj.answers}. Answer: ${correctSpeed}`
	);

	const answerSection = document.createElement("article");
	// const possibleAnswer = document.createElement("div");
	answerSection.classList.add("answer-section");
	// possibleAnswer.classList.add("possible-answer");

	speedObj.answers.forEach(answer => {
		const possibleAnswer = document.createElement("div");
		possibleAnswer.classList.add("possible-answer");
    possibleAnswer.textContent = answer

    answerSection.append(possibleAnswer)
	});

	// answerSection.append();

	speedLimitSign.append(answerSection);
};

const startGame = () => {
	const howToPlaySignWrapper = document.querySelector(
		".how-to-play-sign-wrapper"
	);
	const speedLimitSignWrapper = document.querySelector(
		".speed-limit-sign-wrapper"
	);

	generateSign();

	howToPlaySignWrapper.classList.add("move-out");
	speedLimitSignWrapper.classList.add("move-in");
};

const handlePlayBtn = () => {
	const playBtn = document.querySelector(".play-btn");

	playBtn.removeEventListener("click", startGame);
	playBtn.addEventListener("click", startGame);
};

handlePlayBtn();
