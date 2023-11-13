const generateSign = () => {
	const whiteBorderWrapper = document.querySelector(".white-border-wrapper");

	let selectedCountrySpeeds;

	const usSpeeds = [
		{ speed: 10, answers: [15, 30, 25], answer: 15 },
		{ speed: 15, answers: [15, 25, 30], answer: 25 },
		{ speed: 20, answers: [40, 25, 30], answer: 30 },
		{ speed: 25, answers: [40, 30, 50], answer: 40 },
		{ speed: 30, answers: [55, 40, 50], answer: 50 },
		{ speed: 35, answers: [55, 50, 65], answer: 55 },
		{ speed: 40, answers: [70, 65, 55], answer: 65 },
		{ speed: 45, answers: [70, 65, 80], answer: 70 },
		{ speed: 50, answers: [90, 70, 80], answer: 80 },
		{ speed: 55, answers: [90, 95, 80], answer: 90 },
		{ speed: 60, answers: [105, 90, 95], answer: 95 },
		{ speed: 65, answers: [95, 105, 110], answer: 105 },
		{ speed: 70, answers: [120, 110, 105], answer: 110 },
		{ speed: 75, answers: [120, 110, 130], answer: 120 },
		{ speed: 80, answers: [120, 110, 130], answer: 130 },
	];
	const canadaSpeeds = [
		{ speed: 10, answers: [5, 20, 10], answer: 5 },
		{ speed: 20, answers: [20, 10, 5], answer: 10 },
		{ speed: 30, answers: [10, 25, 20], answer: 20 },
		{ speed: 40, answers: [30, 20, 25], answer: 25 },
		{ speed: 50, answers: [25, 30, 35], answer: 30 },
		{ speed: 60, answers: [35, 45, 30], answer: 35 },
		{ speed: 70, answers: [50, 45, 35], answer: 45 },
		{ speed: 80, answers: [50, 55, 45], answer: 50 },
		{ speed: 90, answers: [50, 60, 55], answer: 55 },
		{ speed: 100, answers: [60, 70, 55], answer: 60 },
		{ speed: 110, answers: [60, 75, 70], answer: 70 },
		{ speed: 120, answers: [75, 70, 80], answer: 75 },
		{ speed: 130, answers: [75, 80, 85], answer: 80 },
		{ speed: 140, answers: [75, 85, 80], answer: 85 },
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

	// console.log(
	// 	`Ansers for sign: speed: ${speedObj.speed}. Answers: ${speedObj.answers}. Answer: ${correctSpeed}`
	// );

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

	speedLimitSign.append(answerSection);
  checkAnswers(correctSpeed);
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

// const getNextSign = () => {
//   const currentSpeedSign = document.querySelector(".speed-limit-sign-wrapper");

//   currentSpeedSign.classList.add(".move-out")
//   generateSign()
// }

const handleAnswerChoice = (element, correctSpeed) => {
  let haveGuessed = false;

  if (Number(element.textContent) === Number(correctSpeed)) {
    element.classList.add("correct-answer") 
    haveGuessed = true
  } else {
    element.classList.add("incorrect-answer")
    haveGuessed = true
  }
  console.log(`element.textContent: ${element.textContent}`)
  console.log(`correctSpeed: ${correctSpeed}`)
  console.log(`element: $(element)`)
  console.log("checking answer")
  
  // haveGuessed ? setTimeout(getNextSign, 3000) : null;
}

const checkAnswers = (correctSpeed) => {
  const possibleAnswers = document.querySelectorAll(".possible-answer")

  possibleAnswers.forEach(answer => {
    answer.removeEventListener("click", () => handleAnswerChoice(answer, correctSpeed))
    answer.addEventListener("click", () => handleAnswerChoice(answer, correctSpeed))
  })
  console.log("pick an answer")

}
const handlePlayBtn = () => {
	const playBtn = document.querySelector(".play-btn");

	playBtn.removeEventListener("click", startGame);
	playBtn.addEventListener("click", startGame);
};

handlePlayBtn();
