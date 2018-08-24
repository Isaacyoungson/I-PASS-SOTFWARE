function myResult() {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var correct = 0;

	if (question1 == "24") {
		correct++
	};

	if (question2 == "36") {
		correct++
	};

document.getElementById('showResults').style.visibility = "visible";

document.getElementById('showResults').innerHTML = "you got " + correct + " out of 50 correct"

alert("you got " + correct + " out of 50 correct. Try more questions")
};



