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

	if (question1 == "i") {
		correct++
	};

	if (question2 == "a") {
		correct++
	};

	if (question3 == "b") {
		correct++
	};

	if (question4 == "puoi") {
		correct++
	};

	if (question5 == "ho") {
		correct++
	};

	if (question6 == "fate") {
		correct++
	};

	if (question7 == "ad") {
		correct++
	};

	if (question8 == "Ti ricordi") {
		correct++
	};

	if (question9 == "una") {
		correct++
	};

	if (question10 == "ti") {
		correct++
	};

	if (question11 == "freddo") {
		correct++
	};

	if (question12 == "esco") {
		correct++
	};

	if (question13 == "andiamo") {
		correct++
	};

	if (question14 == "ci sono") {
		correct++
	};

	if (question15 == "da") {
		correct++
	};

	if (question16 == "a") {
		correct++
	};

	if (question17 == "a") {
		correct++
	};

	if (question18 == "alla") {
		correct++
	};

	if (question19 == "vi dovete alzare") {
		correct++
	};

	if (question20 == "sul") {
		correct++
	};

document.getElementById('showResults').style.visibility = "visible";

document.getElementById('showResults').innerHTML = "you got " + correct + " out of 20 correct  <br/> Q1:B <br> Q2:C <br/> Q3:D <br> Q4:D <br> Q5:C <br/> Q6:A <br/> Q7:D <br/> Q8:D <br/> Q9:B <br/> Q10:B <br/> Q11:C <br/> Q12:A <br/> Q13:A <br/> Q14:C <br/> Q15:B <br/> Q16:D <br/> Q17:C <br/> Q18:B <br/> Q19:A <br/> Q20:C"

alert("you got " + correct + " out of 20 correct. Refresh the page and try more questions")
};



