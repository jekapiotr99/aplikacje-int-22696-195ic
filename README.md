### Django + React (aplikacja CRUD)

Widok startowy strony:

![obraz](https://user-images.githubusercontent.com/56678518/151056943-9a85803c-a80d-4af5-aa9a-10d547834012.png)

Na stronie zostały dodane 4 wpisy do zaprezentowania funkcjonalności. Aplikacja po stronie klienta działa na porcie
8081, natomiast backend działa na porcie 8000. Możemy te dane podejrzeć również w podglądzie JSON'a:

![obraz](https://user-images.githubusercontent.com/56678518/151057162-676105bf-9f21-482f-b362-ccdecfd41ec0.png)

Połączenie axios w pliku http-common.js:

![obraz](https://user-images.githubusercontent.com/56678518/151057274-7a40159f-078d-4262-ae44-991246539812.png)

#### Modyfikacje kodu

Najważniejszą modyfikacją jest usunięcie komponentu 'Tutorial.vue'. Zastąpiony zostanie modalem, zaprezentowanym później.
Dodanie kolejnej podstrony do modyfikacji wydawało się staromodne i zastąpiłem to bardziej eleganckim rozwiązaniem.

Wybrany element podświetla się, usunięty został podgląd z prawej strony, natomiast zostały dodane 2 ikony służące jako przyciski.
Opcja usuwania z prawego panelu została przeniesona do funkcji wykonywanej po wciśnięciu przycisku kosza (ikony po lewej).
![obraz](https://user-images.githubusercontent.com/56678518/151058749-dc873a94-1406-4dd3-a203-4a88c0c213c7.png)

Druga ikona otwiera nam modal(okienko na styl popup), które zawiera wszystkie informacje do edycji.

![obraz](https://user-images.githubusercontent.com/56678518/151060575-5811faf8-f131-4544-919d-600fb320f68f.png)

Okienko modalu prezentuje się w ww. sposób. Tytuł i opis będzie automatycznie aktualizowany. Zamknięcie modalu zaktualizuje dane w bazie danych.

Na górze znajduje się pasek wyszukiwania, który sortuje po tytułach.

![obraz](https://user-images.githubusercontent.com/56678518/151070150-6df6fd7a-1be4-49d3-90ec-e003312a0187.png)

Widok po posortowaniu.

![obraz](https://user-images.githubusercontent.com/56678518/151070283-99c8d865-c224-4996-a187-a42274d4bcce.png)