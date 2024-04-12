document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Tutaj możesz użyć JavaScript do wysłania danych logowania do serwera lub lokalnej weryfikacji
    console.log("Username: ", username);
    console.log("Password: ", password);

    // Tutaj możesz dodać logikę przekierowania po zalogowaniu
  });
});