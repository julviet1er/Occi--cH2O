// Fonction pour charger le header et footer
function loadIncludes() {
    // Charger le header
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error('Header non trouvé');
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Erreur chargement header:', error);
            // Fallback : afficher le header en dur si fetch échoue
            document.getElementById('header-placeholder').innerHTML = `
                <header>
                    <nav>
                        <div class="logo">
                            <img src="logo.png" alt="Logo Occi-écH2O" class="logo-img">
                            <span>Occi-écH2O</span>
                        </div>
                        <ul class="nav-links">
                            <li><a href="index.html">Accueil</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="processus.html">Notre Processus</a></li>
                            <li><a href="aides.html">Aides Financières</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            `;
        });

    // Charger le footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Footer non trouvé');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Erreur chargement footer:', error);
            // Fallback : afficher le footer en dur si fetch échoue
            document.getElementById('footer-placeholder').innerHTML = `
                <footer>
                    <p><strong>Occi-écH2O</strong> - Solutions de récupération d'eau de pluie en Occitanie</p>
                    <p>Toulouse & région | Email : contact@occiech2o.fr | Tél : 05 56 89 47 31</p>
                    <p>© 2025 Occi-écH2O - Projet CEV - Tous droits réservés</p>
                </footer>
            `;
        });
}

// Charger dès que le DOM est prêt
document.addEventListener('DOMContentLoaded', loadIncludes);