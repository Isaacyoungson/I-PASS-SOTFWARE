function myResult() {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
	var question15 = document.quiz.question15.value;
	var question16 = document.quiz.question16.value;
	var question17 = document.quiz.question17.value;
	var question18 = document.quiz.question18.value;
	var question19 = document.quiz.question19.value;
	var question20 = document.quiz.question20.value;
	var correct = 0;

	if (question1 == "island") {
		correct++
	};

	if (question2 == "building") {
		correct++
	};

	if (question3 == "cup") {
		correct++
	};

	if (question4 == "white") {
		correct++
	};

	if (question5 == "book") {
		correct++
	};

	if (question6 == "station") {
		correct++
	};

	if (question7 == "hat") {
		correct++
	};

	if (question8 == "shirt") {
		correct++
	};

	if (question9 == "friend") {
		correct++
	};

	if (question10 == "rest") {
		correct++
	};

	if (question11 == "fork") {
		correct++
	};

	if (question12 == "some") {
		correct++
	};

	if (question13 == "bicycle") {
		correct++
	};

	if (question14 == "dirty") {
		correct++
	};

	if (question15 == "newspaper") {
		correct++
	};

	if (question16 == "dog") {
		correct++
	};

	if (question17 == "here") {
		correct++
	};

	if (question18 == "glasses") {
		correct++
	};

	if (question19 == "scooter") {
		correct++
	};

	if (question20 == "armchair") {
		correct++
	};

document.getElementById('showResults').style.visibility = "visible";

document.getElementById('showResults').innerHTML = "you got " + correct + " out of 20 correct  <br/> Q1:A <br> Q2:A <br/> Q3:C <br> Q4:D <br> Q5:D <br/> Q6:A <br/> Q7:D <br/> Q8:D <br/> Q9:B <br/> Q10:C <br/> Q11:C <br/> Q12:B <br/> Q13:A <br/> Q14:D <br/> Q15:D <br/> Q16:B <br/> Q17:D <br/> Q18:C <br/> Q19:C <br/> Q20:C"

alert("you got " + correct + " out of 20 correct. Try more questions")
};



