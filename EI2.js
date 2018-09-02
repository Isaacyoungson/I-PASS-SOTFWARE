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

	if (question1 == "jersey") {
		correct++
	};

	if (question2 == "public holiday/party") {
		correct++
	};

	if (question3 == "small") {
		correct++
	};

	if (question4 == "nothing") {
		correct++
	};

	if (question5 == "mask") {
		correct++
	};

	if (question6 == "exam") {
		correct++
	};

	if (question7 == "concert") {
		correct++
	};

	if (question8 == "more") {
		correct++
	};

	if (question9 == "not yet") {
		correct++
	};

	if (question10 == "finance") {
		correct++
	};

	if (question11 == "reader") {
		correct++
	};

	if (question12 == "show") {
		correct++
	};

	if (question13 == "lake") {
		correct++
	};

	if (question14 == "pot") {
		correct++
	};

	if (question15 == "map") {
		correct++
	};

	if (question16 == "bench") {
		correct++
	};

	if (question17 == "wide") {
		correct++
	};

	if (question18 == "bed") {
		correct++
	};

	if (question19 == "history") {
		correct++
	};

	if (question20 == "grandfather") {
		correct++
	};

document.getElementById('showResults').style.visibility = "visible";

document.getElementById('showResults').innerHTML = "you got " + correct + " out of 50 correct. Refresh and try again  <br/> Q1:A <br> Q2:B <br/> Q3:A <br> Q4:C <br> Q5:C <br/> Q6:A <br/> Q7:A <br/> Q8:C <br/> Q9:C <br/> Q10:A <br/> Q11:D <br/> Q12:D <br/> Q13:B <br/> Q14:B <br/> Q15:A <br/> Q16:B <br/> Q17:B <br/> Q18:A <br/> Q19:A <br/> Q20:D"

alert("you got " + correct + " out of 20 correct. Try more questions")
};



