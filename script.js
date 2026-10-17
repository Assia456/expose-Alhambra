// Initialisation de la librairie d'animation AOS
AOS.init({
  duration: 800,
  once: true
});

// LISTE DES 5 QUESTIONS
const questions = [
  {
    question: "1. ¿En qué ciudad española se encuentra La Alhambra?",
    answers: [
      { text: "Sevilla", correct: false },
      { text: "Granada", correct: true },
      { text: "Córdoba", correct: false },
      { text: "Madrid", correct: false }
    ],
    explanation: "¡Correcto! La Alhambra está situada en la ciudad de Granada, en Andalucía."
  },
  {
    question: "2. ¿Qué dinastía musulmana construyó el palacio de la Alhambra?",
    answers: [
      { text: "La dinastía Nazarí", correct: true },
      { text: "La dinastía Omeya", correct: false },
      { text: "Los Almorávides", correct: false },
      { text: "Los Almohades", correct: false }
    ],
    explanation: "¡Muy bien! Fue la dinastía Nazarí entre los siglos XIII y XV."
  },
  {
    question: "3. ¿Qué significa la palabra 'Alhambra' en árabe?",
    answers: [
      { text: "El Palacio Dorado", correct: false },
      { text: "La Ciudad de los Reyes", correct: false },
      { text: "La Calavera", correct: false },
      { text: "La Roja (La Fortaleza Roja)", correct: true }
    ],
    explanation: "¡Exacto! Proviene del árabe 'Al-Hamra', que significa 'La Roja' por el color de sus murallas."
  },
  {
    question: "4. ¿Cómo se llama el palacio de descanso y sus famosos jardines al lado de la Alhambra?",
    answers: [
      { text: "El Generalife", correct: true },
      { text: "La Alcazaba", correct: false },
      { text: "El Albaicín", correct: false },
      { text: "La Mezquita", correct: false }
    ],
    explanation: "¡Excelente! El Generalife era la villa con jardines que utilizaban los reyes para descansar."
  },
  {
    question: "5. ¿En qué año histórico los Reyes Católicos tomaron Granada y la Alhambra?",
    answers: [
      { text: "1212", correct: false },
      { text: "1492", correct: true },
      { text: "1515", correct: false },
      { text: "1789", correct: false }
    ],
    explanation: "¡Correcto! Ocurrió en el famoso año de 1492, marcando el fin de la Reconquista."
  }
];

// VARIABLES DE GESTION DU QUIZ
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const feedbackElement = document.getElementById("feedback");
const quizContainer = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-btn");

// Démarrer le quiz au chargement de la page
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  nextButton.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn-quiz");
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  feedbackElement.innerText = "";
  feedbackElement.className = "feedback-text";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    feedbackElement.innerText = questions[currentQuestionIndex].explanation;
    feedbackElement.classList.add("correct-msg");
  } else {
    selectedBtn.classList.add("wrong");
    feedbackElement.innerText = "❌ Incorrecto. Inténtalo con la siguiente.";
    feedbackElement.classList.add("wrong-msg");
  }

  // Désactiver tous les boutons après le clic
  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // Affiche la bonne réponse
    }
    button.disabled = true;
  });

  // Afficher le bouton suivant
  if (currentQuestionIndex < questions.length - 1) {
    nextButton.classList.remove("hidden");
  } else {
    setTimeout(showResult, 1500);
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  feedbackElement.innerText = "";
  nextButton.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.innerText = `Has obtenido ${score} de ${questions.length} puntos. ¡Buen trabajo!`;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion();
});

restartButton.addEventListener("click", startQuiz);

// Lancement automatique
startQuiz();
