# aplikacje-int-22696-195ic
##2. Rejestracja użytkowników

Link do działającej strony z serwisem logowania: http://piotrjeka.pythonanywhere.com/

Pierwszym widokiem który ujrzymy na stronie jest system logowania się użytkownika. Widoki dostępne z tej podstrony to: 
rejstracja, logowanie lub przypominanie hasła. Podczas pierwszego odwiedzienia strony nie mamy żadnych uprawnień, 
dlatego pierwszym krokiem będzie rejstracja.
![obraz](https://user-images.githubusercontent.com/56678518/142683737-38220560-c8f9-4876-935f-cfc795dac12f.png)

Pierwszy krok to rejstracja, po przejściu na widok rejstracji ujrzymy formularz. Po wypełnieniu pól takich jak username, 
imię, nazwisko, email oraz hasło utworzy nam się nowe konto na stronie.
![obraz](https://user-images.githubusercontent.com/56678518/142684442-3fe0840d-005d-461f-9631-8eb4dae3c0d7.png)

Po wypełnieniu pól utworzy nam się konto. Następnym krokiem będzie logowanie się.
![obraz](https://user-images.githubusercontent.com/56678518/142684632-eaa29ed9-2f05-49a3-8cd0-3539856c88b7.png)

Po zalogowaniu widzimy kolejny widok - edycja konta.
![obraz](https://user-images.githubusercontent.com/56678518/142686239-4311bf45-8f61-4050-bf3a-bd94d07a0c97.png)

Możemy tutaj zmienić email, imię, nazwisko. Możemy również dodać swoją datę urodzenia oraz dodać zdjęcie.
![obraz](https://user-images.githubusercontent.com/56678518/142686893-64af8feb-c22a-4b2a-9c4e-1323b6ea9777.png)

Drugim widokiem który możemy zobaczyć po zalogowaniu się jest widok do zmiany hasła. Po podaniu starego hasła oraz nowego dwukrotnie 
nasze hasło zostanie zmienione.
![obraz](https://user-images.githubusercontent.com/56678518/142687469-544e1077-a687-4a5d-90f5-718b1a244186.png)

Po wylogowaniu się, na ekranie logowania możemy również zobaczyć widok do przypomnienie hasła. Po podaniu maila, na naszą
skrzynkę pocztową powinna przyjść wiadomość z linkiem do restartu hasła. W praktyce to nie zachodzi ponieważ nie mamy serwera
pocztowego zaimplementowanego. Natomiast możemy tę funkcjonalość przetestować w konsoli.
![obraz](https://user-images.githubusercontent.com/56678518/142687874-1ea96082-b5ab-4a01-bc1e-d5300b192689.png)

W konsoli pojawi się link, który po odwiedzeniu przeniesie nas na stronę do resetowania hasła.
![obraz](https://user-images.githubusercontent.com/56678518/142688834-fdbcb2ea-ae6f-4f1a-9e1d-96d40d1f52ee.png)

Po odwiedzeniu linku ukaże nam się taka sama strona do resetowania hasła, jaką ujrzał użytkownik zalogowany.
![obraz](https://user-images.githubusercontent.com/56678518/142688950-8b13ceb4-915e-4400-9945-d7e621004b53.png)