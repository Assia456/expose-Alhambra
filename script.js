AOS.init({
    duration: 1000,
    once: false
});

VanillaTilt.init(document.querySelectorAll(".content-overlay"), {
    max: 6,
    speed: 400,
    glare: true,
    "max-glare": 0.15
});

const quizData = [
    {
        question: "¿Qué significa 'Al-Hamra' en árabe?",
        options: ["La Blanca", "La Roja", "El Castillo", "La Verde"],
        correct: 1
    },
    {
        question: "¿En qué siglo se construyó la Alhambra nazarí?",
        options: ["Siglo X", "Siglo XIII", "Siglo XV", "Siglo XVIII"],
        correct: 1
    },
    {
        question: "¿Qué parte de la Alhambra era la fortaleza militar?",
        options: ["El Generalife", "Los Palacios Nazaríes", "La Alcazaba", "El Patio de los Leones"],
        correct: 2
    },
    {
        question: "¿Qué famosa serie se inspiró en los jardines del Generalife?",
        options: ["Juego de Tronos", "La Casa de Papel", "Stranger Things", "Vikingos"],
        correct: 0
    },
    {
        question: "¿En qué año cayó Granada tras la Reconquista?",
        options: ["1212", "1492", "1789", "1984"],
        correct: 1
    },
    {
        question: "¿Cómo se llamaba la zona urbana de la Alhambra donde vivían los artesanos y comerciantes?",
        options: ["La Alcazaba", "La Medina", "El Generalife", "El Albaicín"],
        correct: 1
    },
    {
        question: "¿Qué sistema de agricultura y riego heredamos de la época de Al-Ándalus?",
        options: ["Los invernaderos", "Las acequias", "Los molinos de viento", "Los cultivos hidropónicos"],
        correct: 1
    },
    {
        question: "¿Qué famoso barrio de Granada fue añadido en 1994 a la declaración de la UNESCO junto a la Alhambra?",
        options: ["El Albaicín", "Triana", "Sacromonte", "El Realejo"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackText = document.getElementById("quiz-feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    feedbackText.textContent = "";
    nextBtn.style.display = "none";
    optionsContainer.innerHTML = "";

    const q = quizData[currentQuestion];
    questionText.textContent = `${currentQuestion + 1}. ${q.question}`;

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const q = quizData[currentQuestion];
    const buttons = optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.correct) {
        feedbackText.textContent = "¡Correcto! 🎉";
        feedbackText.style.color = "#4ade80";
        score++;
    } else {
        feedbackText.textContent = `¡Incorrecto! ❌ La respuesta era: ${q.options[q.correct]}`;
        feedbackText.style.color = "#f87171";
    }

    if (currentQuestion < quizData.length - 1) {
        nextBtn.style.display = "inline-block";
    } else {
        setTimeout(showFinalScore, 1500);
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});

function showFinalScore() {
    questionText.textContent = "¡Quiz Completado! 🏆";
    optionsContainer.innerHTML = "";
    feedbackText.textContent = `Puntuación final: ${score} / ${quizData.length}`;
    feedbackText.style.color = "#ffffff";
    nextBtn.style.display = "none";
}

loadQuestion();
