var bouton = document.getElementById("monBouton");
var links = document.querySelectorAll('.navbar a');

function toggleNavbar() {
    // Toggle le display des liens dans la navbar lorsque le bouton est cliqué
    links.forEach(function(link) {
        link.style.display = (link.style.display === "none" || link.style.display === "") ? "block" : "none";
    });
}

// Ajouter un gestionnaire d'événements pour le clic sur le bouton
bouton.addEventListener("click", function() {
    toggleNavbar();
});

// Aucun besoin de gestionnaire d'événements pour les liens dans la navbar si vous ne voulez pas les cacher lorsqu'ils sont cliqués
