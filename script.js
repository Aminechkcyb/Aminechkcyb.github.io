var bouton = document.getElementById("monBouton");
    var links = document.querySelectorAll('.navbar a');

    bouton.addEventListener("click", function() {
        // Toggle le display des liens dans la navbar lorsque le bouton est cliqué
        links.forEach(function(link) {
            link.style.display = (link.style.display === "none" || link.style.display === "") ? "block" : "none";
        });
    });

    // Ajouter un gestionnaire d'événements pour les liens dans la navbar
    links.forEach(function(link) {
        link.addEventListener("click", function() {
            // Fermer le header lorsqu'on clique sur un lien
            links.forEach(function(link) {
                link.style.display = "none";
            });
        });
    });