async function gallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            throw new Error('Erreur HTTP ! Statut : ${response.status}');
        }

        const photos = await response.json();

        photos.slice(0, 50).forEach(photo => {
            const photoDiv = document.createElement('div');
            photoDiv.className = 'photo';

            const img = document.createElement('img');
            img.src = `https://picsum.photos/600/600?random=${photo.id}`;  // J'ai changé l'adresse car j'avais une erreur 404 me disant que les URLSs des images n'existaient plus ou étaient incorrectes
            img.alt = photo.title;

            const title = document.createElement('div');
            title.className = 'photo-title';
            title.textContent = photo.title;

            photoDiv.appendChild(img);
            photoDiv.appendChild(title);
            gallery.appendChild(photoDiv);
        });
    } catch (error) {
        console.error('Ìmpossible de charger les photos :', error);
        gallery.textContent = 'Impossible de charger les photos pour le moment. Veuillez réessayer plus tard.';
    }
}

// Appel de la fonction pour afficher les photos au chargement de la page
window.onload = gallery;
