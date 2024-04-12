#!/bin/bash

# Pobierz dane z formularza
username=$1
password=$2

# Sprawdź poprawność danych (tutaj przykładowa logika)
if [ "$username" == "admin" ] && [ "$password" == "password" ]; then
  echo "Login successful!"
  # Tutaj możesz dodać przekierowanie do kolejnej strony po zalogowaniu
else
  echo "Login failed. Please try again."
fi