// 1. Initialisation des animations au défilement (AOS)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        once: false, // L'animation se relance si on remonte/descend la page
        offset: 120, // Déclenche l'animation un peu avant que l'élément soit entièrement visible
        duration: 1000 // Vitesse de l'animation en millisecondes
    });
});

// 2. Gestion du Quiz interactif
function validerQuiz(btn, estCorrect) {
    // On récupère ou crée un conteneur pour afficher le résultat du quiz
    let resultatDiv = document.getElementById('quiz-resultat');
    
    if (!resultatDiv) {
        resultatDiv = document.createElement('div');
        resultatDiv.id = 'quiz-resultat';
        resultatDiv.style.marginTop = "20px";
        resultatDiv.style.padding = "12px";
        resultatDiv.style.borderRadius = "8px";
        resultatDiv.style.fontWeight = "bold";
        resultatDiv.style.textAlign = "center";
        
        // On l'ajoute juste après les boutons de réponse
        const zoneBoutons = btn.parentElement;
        zoneBoutons.appendChild(resultatDiv);
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
