# Lab6 - Zezwolenia i wierzytelnianie w DRF.

Uwierzytelnianie w DRF pomoże nam zarządzać rejstracjami oraz logowaniami do naszego DRF'a. Wykorzystana biblioteka dj-rest-auth
posiada wbudowane funkcjonalności do ułatwienia nam tego procesu.

![obraz](https://user-images.githubusercontent.com/56678518/150997498-294b517c-6bc3-4262-bdd1-9a26280f8d15.png)

Poprawne wykonanie rejestracji pokaże nam token autoryzacji oraz w konsoli zobaczymy wiadomość z potwierdzeniem maila.

![obraz](https://user-images.githubusercontent.com/56678518/151000405-3b56fdfe-c64b-46c2-8d0e-729c8b2f3d69.png)
![obraz](https://user-images.githubusercontent.com/56678518/146572117-86366999-60f1-4896-8a87-4be6f56e91a6.png)

### Cookies

Aby sprawdzić działanie cookies utworzyłem nową podstronę w projekcie. Dodajemy najpierw ścieżkę do naszego pliku `urls.py`

![obraz](https://user-images.githubusercontent.com/56678518/151001768-d4b190a4-96b9-45b4-b434-54539b43b47d.png)

Następnie korzystając z poradnika implementujemy w nowym pliku `views.py` metodę zarządzającą cookies. <br>
Metoda ta sprawdza, czy istnieją już nasze pliki cookies (strona była kiedyś odwiedzana), a następie:
- jeśli cookies istnieją
  - to edytujemy ostatnią wizytę na aktualną datę i godzinę,
  - jeśli minął dzień od ostatniej wizyty, zwiększamy ilość wizyt
- jeśli zmienna mówiąca metodzie, że zmieniamy ostatną wizytę jest true, to ustawiamy cookies na nowe wartości

![obraz](https://user-images.githubusercontent.com/56678518/151002087-ffd13eb9-098c-4804-8f54-6eba328c91ef.png)

Aby podejrzeć cookies w naszej przeglądace, przechodzimy do podstrony /cookie/ i w narzędziach dla programisty w zakładce dane wybieramy "Ciasteczka".
Na nw screenie, widać, że ostatnia wizyta była o godzinie 15:03 dnia 25-01-2022, a ilość wizyt wynosi 1. Jeśli poczekamy dzień i ponownie odwiedzimy naszą
stronę, to wskaźnik wizyt się zwiększy.

![obraz](https://user-images.githubusercontent.com/56678518/151002995-f4ad8c6e-21a4-47df-bd8b-3fc2adc24006.png)

### Filtrowanie i wyszukiwanie


![obraz](https://user-images.githubusercontent.com/56678518/151005145-38873074-04c8-40b8-a8e3-1210c3daedb6.png)

Po wybraniu filtrowania możemy zobaczyć, że strona się odświeżyła, a pasek adresu, jak i metoda GET nad spisem Postów się zmieniła.
Dodane zostało zapytanie, które filtruje nasze posty względem "-id", co oznacza, że kolejność jest ustawiana względem id w odwrotnej kolejności.

![obraz](https://user-images.githubusercontent.com/56678518/151005234-ed724d53-a618-4f38-8dc0-d50842b318b0.png)

Po dodaniu filtrowania do strony, kolejnym elementem który możemy dodać jest funkcja wyszukiwania postów.

![obraz](https://user-images.githubusercontent.com/56678518/151005824-c894aaa9-1104-444c-8d8e-b7022918e49c.png)

Wpisanie w polu tekstowym szukanej frazy ponownie odświeży stronę i tym razem dodane zostało słowo kluczowe "search", które wskazuje
że metodą filtrowania było wyszukanie frazy.
![obraz](https://user-images.githubusercontent.com/56678518/151005762-4aa40037-b53c-443f-9094-2cd885e2b9c6.png)

Aby upewnić się w jaki sposób działa to wyszukiwanie dodałem 4 post którego tytułem było słowo "Lorem".

![obraz](https://user-images.githubusercontent.com/56678518/151006307-5f820b63-e9ab-4945-84bc-fc6cfd5dd277.png)

Słowo to również było pierwszym wyrazem użytym w "body" pierwszego Postu. Po ponownym użyciu pola `Search` możemy zobaczyć
,że filtrowanie odbywa się wyłącznie na tytułach naszych postów, a część "body" nie jest brana pod uwagę.

![obraz](https://user-images.githubusercontent.com/56678518/151006652-d46ff449-4504-4077-a085-5db3cfec9002.png)

