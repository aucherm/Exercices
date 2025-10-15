 document.querySelector('.email-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire

    const emailInput = document.getElementById('email');
    const message = document.getElementById('message');

    // Vérifie la validité de l'email
    if (emailInput.checkValidity()) {
      message.textContent = "Email valide !";
      message.style.color = "green";
      message.style.display = "block";
    } else {
      message.textContent = "Format d'email invalide.";
      message.style.color = "red";
      message.style.display = "block";
    }
  });