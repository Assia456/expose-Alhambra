// ==========================================
// 1. GESTION DE LA GALERIE D'IMAGES (MODAL)
// ==========================================
const images = document.querySelectorAll('.galeria-img');
const modal = document.getElementById('modal-galeria');
const modalImg = document.getElementById('modal-img');

// Clic sur une image de la galerie pour l'ouvrir en grand
images.forEach(img => {
    img.addEventListener('click', () => {
        if (modal && modalImg) {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        }
    });
});

// Clic sur le fond noir pour fermer l'image grand format
if (modal) {
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// ==========================================
// 2. LOGIQUE DU QUIZ INTERACTIF
// ==========================================
function validerQuiz(btn, estCorrect) {
    const reponseDiv = document.getElementById('quiz-reponse');
    if (!reponseDiv) return;

    // Réinitialise les classes de message
    reponseDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    
    if (estCorrect) {
        reponseDiv.textContent = "¡Correcto! 🎉 La Alhambra se desarrolló principalmente en el siglo XIII.";
        reponseDiv.classList.add('bg-green-100', 'text-green-800');
        btn.classList.add('bg-green-500', 'text-white');
    } else {
        reponseDiv.textContent = "Incorrecto, ¡inténtalo de nuevo! ❌";
        reponseDiv.classList.add('bg-red-100', 'text-red-800');
    }
}
