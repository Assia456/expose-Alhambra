// 1. ANIMATION DES ÉLÉMENTS AU DÉFILEMENT (FADE IN)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 2. GALERIE MODAL
const images = document.querySelectorAll('.galeria-img');
const modal = document.getElementById('modal-galeria');
const modalImg = document.getElementById('modal-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        if (modal && modalImg) {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        }
    });
});

if (modal) {
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// 3. QUIZ
function validerQuiz(btn, estCorrect) {
    const reponseDiv = document.getElementById('quiz-reponse');
    if (!reponseDiv) return;

    reponseDiv.classList.remove('hidden', 'bg-green-900/60', 'text-green-300', 'bg-red-900/60', 'text-red-300');
    
    if (estCorrect) {
        reponseDiv.textContent = "¡Correcto! 🎉 La Alhambra se desarrolló principalmente en el siglo XIII.";
        reponseDiv.classList.add('bg-green-900/60', 'text-green-300', 'border', 'border-green-500/30');
    } else {
        reponseDiv.textContent = "Incorrecto, ¡inténtalo de nuevo! ❌";
        reponseDiv.classList.add('bg-red-900/60', 'text-red-300', 'border', 'border-red-500/30');
    }
}
