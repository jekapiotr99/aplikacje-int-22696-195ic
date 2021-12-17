# aplikacje-int-22696-195ic

## 3. REST API z DRF

Po zainstalowaniu REST API za pomocą plików pakietu rest-framework w dalszym ciągu możemy korzystać z podstawowego panelu 
administratora django. Dodane zostały takie modele jak: Posts, Groups, Users, Sites oraz Tokens. W celu sprawdzenia połączenia
między django na naszym API możemy utworzyć post w adminie i zobaczyć jego wyświetlanie w panelu REST'a.

![obraz](https://user-images.githubusercontent.com/56678518/146564093-32827858-4e82-4b8d-9354-12113922d427.png)

Po przejściu do panelu REST'a za pomocą ścieżki : /api/v1 ,możemy zobaczyć, że lista obiektów postów jest pusta - 
co sugerują pusty klamry JSON'a. Po dodaniu nowego posta za pomocą django admina możemy zobaczyć, że dodany został nowy wpis.
![img](https://user-images.githubusercontent.com/56678518/146564021-36973c22-c9ec-4ecd-b30c-a0d323f8a4ea.png)

Widzimy wszystkie wpisane przez nas informacje, przy czym dodana została nowa zmienna Obiektu - created_at pobierająca datę utworzenia obiektu
![obraz](https://user-images.githubusercontent.com/56678518/146563996-62200e8d-e3c8-4946-af2c-75e15ddf5566.png)

Możemy również dodawać posty w panelu API. Pokazane są te same pola co w podstawowym panelu Django, ale również możemy zmienić
zakładkę na "Raw data" i wpisywać dane w formacie JSON.

![obraz](https://user-images.githubusercontent.com/56678518/146564227-6dd8fb5d-72f3-44fc-ad3b-cb3c3b8f9d2d.png)

Odświeżenie strony skutkuje wylistowaniem wszystkich obiektów tej klasy w formacie JSON.
![obraz](https://user-images.githubusercontent.com/56678518/146564757-bb469005-1c99-4462-8722-58c6970a6706.png)

Możemy również podejrzeć dane za pomocą przycisku: GET -> json. Pozwoli nam to otworzyć nowe okno z wypisanymi
danymi odnośnie naszych obiektów.
![obraz](https://user-images.githubusercontent.com/56678518/146565212-6809bcde-56bd-46ca-87fa-eab38b12b97e.png)

Po zainstalowaniu pakietu dj-rest-auth mamy 2 sposoby dodawania użytkowników - piotr2 zostanie dodany za pomocą UserList
za pomocą ścieżki /api/v1/users - użytkownikowi będziemy mogli nadać tylko i wyłącznię nazwę. 
![obraz](https://user-images.githubusercontent.com/56678518/146566711-e1c94897-c995-405e-b42e-c047fb087fc4.png)
Gdy podejrzymy dane za pomocą panelu admina możemy zobaczyć, że konto to nie ma ustawionego hasła:

Użytkownik Piotr3 zostanie dodany drugim sposobem - z wykorzystaniem nowo zainstalowanego pakietu dj-rest-auth, za pomocą ścieżki: 
/api/v1/dj-rest-auth/registration przechodzimy do widoku który pozwoli nam na wpisanie wszystkich pól, które były uwzględnione w 
podstawowym panelu administratora.
![obraz](https://user-images.githubusercontent.com/56678518/146572745-7885e578-9b31-4788-9b3e-54f305f61263.png)

Po zatwierdzeniu formularza wyświetlony zostanie token oraz mail z potwierdzeniem konta:
![img](https://user-images.githubusercontent.com/56678518/146571427-3832d64d-16b9-46a9-90d1-6a1e727ba7b2.png)
![obraz](https://user-images.githubusercontent.com/56678518/146572117-86366999-60f1-4896-8a87-4be6f56e91a6.png)

Możemy porównać hasła użytkowników piotr2 i piotr3. Jak widzimy, hasło stworzone za pomocą rest-auth jest automatycznie
zabezpieczione algorytmami szyfrowania.
![obraz](https://user-images.githubusercontent.com/56678518/146573499-fcdbf404-addb-4529-96c5-fa35e6b99b57.png)

Możemy teraz wylogować się z konta administratora i zalogować się na innego użytkownika.

![obraz](https://user-images.githubusercontent.com/56678518/146571398-dbdd1d01-4106-4f5f-825d-915819f13e2d.png)

Po poprawnym zalogowaniu możemy zobaczyć, że wszystkie funkcje są nadal dostępne.
![obraz](https://user-images.githubusercontent.com/56678518/146566249-20c12c15-8a07-48f9-990a-effcc538bcac.png)

Za pomocą ścieżki /redoc możemy podejrzeć dokumentacje naszego API. Możemy testować oraz przeglądać utworzone przez nas
funkcje REST'a
![obraz](https://user-images.githubusercontent.com/56678518/146566985-3a0e0f7c-169c-444d-a1d6-f8a8288fdd01.png)

Tak samo za pomocą ścieżki /swagger możemy podejrzeć inną dokumentację naszego projektu.
![obraz](https://user-images.githubusercontent.com/56678518/146567071-b67e2c80-37b1-4c63-941a-001ee4bd5fb9.png)

Pakiet rest_framework posiada w sobie wbudowane filtry, aby z nich korzystać należy je zaimportować. 
![obraz](https://user-images.githubusercontent.com/56678518/146574440-d764c90f-a965-485d-b240-af2b032d73dd.png)

