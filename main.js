// On attend que la page soit bien chargée avant de faire quoi que ce soit
document.addEventListener("DOMContentLoaded", () => {
    
    // On récupère tous les cercles qui ont une classe "circle"
    const circles = document.querySelectorAll(".circle");

    // Pour chaque cercle trouvé, on ajoute une action au clic
    circles.forEach(circle => {
        circle.addEventListener("click", () => {
            // On récupère le nom de la note définie dans le HTML (ex: "do", "re", etc.)
            const note = circle.getAttribute("data-note");
            
            // On crée le chemin vers le fichier son (ex: "sons/do.mp3")
            // Attention : assure-toi que tes fichiers s'appellent bien do.mp3, re.mp3, etc.
            const audio = new Audio(`./sons/${note}.mp3`);
            
            // On joue le son
            audio.play();
        });
    });
});
