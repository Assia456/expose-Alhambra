// 1. Initialisation des animations au défilement (AOS)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        once: false, // L'animation se relance à chaque fois qu'on zoome ou défile sur la section
        offset: 100, // Déclenche l'animation au bon moment
        duration: 1000 // Durée de l'effet fondu en millisecondes
    });
});

// 2. Gestion du Quiz interactif de la dernière page
function validerQuiz(btn, estCorrect) {
    let resultatDiv = document.getElementById('quiz-resultat');
    
    // Si la boîte de résultat n'existe pas encore sous les boutons, on la crée dynamiquement
    if (!resultatDiv) {
        resultatDiv = document.createElement('div');
        resultatDiv.id = 'quiz-resultat';
        resultatDiv.style.marginTop = "20px";
        resultatDiv.style.padding = "12px";
        resultatDiv.style.borderRadius = "8px";
        resultatDiv.style.fontWeight = "bold";
        resultatDiv.style.textAlign = "center";
        
        // On l'ajoute à l'intérieur de la boîte de quiz
        const zoneQuiz = btn.closest('.content-overlay');
        zoneQuiz.appendChild(resultatDiv);
    }

    // Affichage du message selon la réponse
    if (estCorrect) {
        resultatDiv.textContent = "¡Correcto! 🎉 La Alhambra se construyó principalmente en el siglo XIII.";
        resultatDiv.style.color = "#2e7d32";
        resultatDiv.style.backgroundColor = "#e8f5e9";
        resultatDiv.style.border = "1px solid #a5d6a7";
    } else {
        resultatDiv.textContent = "Incorrecto, ¡inténtalo de nuevo! ❌";
        resultatDiv.style.color = "#c62828";
        resultatDiv.style.backgroundColor = "#ffebee";
        resultatDiv.style.border = "1px solid #ffcdd2";
    }
}
