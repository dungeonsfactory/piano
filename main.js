// Exemple simple pour jouer un son quand on clique sur un bouton
function jouerSon(nomDuFichier) {
    const audio = new Audio(`./sons/${nomDuFichier}`);
    audio.play();
}
