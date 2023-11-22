const quizData = [
   {
   	question:"What does HTML stand for?",
   	a: "Hyper Text Markup Language",
   	b: "Hyperlinks and Text Markup Language",
   	c: "Home Tool Markup Language",
   	d: "Hyper Technical Markup Language",
   	correct: "a",
   },
   {
   	question:"Which tag is used to define a hyperlink in HTML?",
   	a: "<a>",
   	b: "<link>",
   	c: "<href>",
   	d: "<url>",
   	correct: "a",
   },
   {
   	question:"What is the purpose of CSS in web design?",
   	a: "To create interactive web pages",
   	b: "To structure the content of a web page",
   	c: "To define the visual appearance of a web page",
   	d: "To manage server-side operations",
   	correct: "c",
   },
   {
   	question:" Which CSS property is used to control the spacing between letters?",
   	a: "font-size",
   	b: "text-indent",
   	c: "line-height",
   	d: "letter-spacing",
   	correct: "d",
   },
   {
   	question:"What is the purpose of media queries in responsive web design?",
   	a: "To optimize website performance",
   	b: "To apply different styles based on the device screen size",
   	c: "To add animation effects",
   	d: "To validate HTML code",
   	correct: "b",
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