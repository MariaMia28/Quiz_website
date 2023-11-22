const quizData = [
   {
   	question:"Which tag is used to define the main heading in HTML?",
   	a: "<h1>",
   	b: "<head>",
   	c: "<header>",
   	d: "<main>",
   	correct: "a",
   },
   {
   	question:"Which CSS property is used to add space between the content and the border of an element?",
   	a: "margin",
   	b: "padding",
   	c: "border",
   	d: "spacing",
   	correct: "b",
   },
   {
   	question:"Which color code represents the color white in CSS?",
   	a: "#000000",
   	b: "#FFFFFF",
   	c: "#FF0000",
   	d: "#00FF00",
   	correct: "b",
   },
   {
   	question:"Which attribute is used to specify the URL of a hyperlink in HTML",
   	a: "href",
   	b: "src",
   	c: "link",
   	d: "url",
   	correct: "a",
   },
   {
   	question:"Which programming language is primarily used for client-side scripting in web development?",
   	a: "JavaScript",
   	b: "PHP",
   	c: "Python",
   	d: "Ruby",
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

;

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

