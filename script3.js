const quizData = [
   {
   	question:"What is the purpose of the <head> element in an HTML document?",
   	a: "It contains the main content of the webpage.",
   	b: "It defines the layout and structure of the webpage.",
   	c: "It contains metadata and provides instructions to the browser.",
   	d: "It is used to include external JavaScript files.",
   	correct: "c",
   },
   {
   	question:"What does CSS stand for?",
   	a: "Computer Style Sheets",
   	b: "Creative Style Sheets",
   	c: "Cascading Style Sheets",
   	d: "Colorful Style Sheets",
   	correct: "c",
   },
   {
   	question:"Which CSS property is used to control the position of an element?",
   	a: "display",
   	b: "position",
   	c: "float",
   	d: "margin",
   	correct: "b",
   },
   {
   	question:"Which attribute is used to specify the URL of a hyperlink in HTML",
   	a: "<ol>",
   	b: "<li>",
   	c: "<div>",
   	d: "<ul>",
   	correct: "d",
   },
   {
   	question:"What is the purpose of the box-sizing CSS property?",
   	a: "It defines how the width and height of an element are calculated.",
   	b: "It controls the size of the margin box for an element.",
   	c: "It specifies the font family for an element.",
   	d: "It determines the visibility of an element.",
   	correct: "a",
   },
   

];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit') 

let currentQuiz = 0
let score = 0

loadQuiz();

function redirectToProfile() {
  window.location.href = "user_profile.php";
}

function loadQuiz(){

	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}


function getSelected() {

	let answer
	answerEls.forEach(answerEl => {
		if (answerEl.checked) {
			answer = answerEl.id
		}
	})

	return answer
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected()
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++
		}

		currentQuiz++

		if (currentQuiz < quizData.length) {
			loadQuiz()
		} else {
			quiz.innerHTML = `  
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>

         <button onclick="location.reload()">Reload</button>
         <button onclick="redirectToProfile()">Done</button>
			`
		}

	}
})