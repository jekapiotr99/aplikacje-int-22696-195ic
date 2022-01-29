### Django + REACT (Aplikacja ToDo)

Poprzednie zadanie z aplikacji, jak i wszystkie zadania z serwisów internetowych wykonane zostały przy użyciu Vue.
Po wykonaniu tych zadań oraz zapoznaniu się z problemami tego frameworku postanowiłem spróbować swoich sił w React'cie.

Problemy z Vue - 
- Brak wsteczniej kompatybilności do bibliotek,
- Problemy z force'owaniem istalacji starych bibliotek,
- Brak dokumentacji dla powstałych bibliotek (Vue3Bootstrap, Vue3Materials, Vuetify3 (wersja Alpha))
- Gdy biblioteki już dało się zaimportować ich funkcjonalność była ograniczona, np.:
  - Vuetify2 posiada `<md-button>` a Vuetify3 `<vm-button>` - lecz nie ma dokumentacji do Vuetify3,
  - Vuetify2 posiada `<md-icon>` a Vuetify3 powinien posiadać `<vm-icon>`, lecz ten komponent nie działał 
  (próbowałem również inne metody zapisania przycisku oraz przeprowadziłem research),
  - Żaden inny komponent nie zadziałał.

Po rozmowie z prowadzącym inny przedmiot postanowiłem spróbować Reacta.

### Widok aplikacji:

![obraz](https://user-images.githubusercontent.com/56678518/151676273-03f10b8f-d3dc-4751-ae7d-69b46a7b9a27.png)

Dodane featury:
- Zliczanie ilości wykonanych ToDo,
- Zliczanie ilości niewykonanych ToDo,
- Zliczanie ilości wszystkich ToDo,
- Dodanie zakładki `All` (wyświetlająca taski gotowe i niegotowe),
- Wypisanie Opisu pod tytułem ToDo,
- Dodanie do modelu w Django pola `DateTimeField` z automatycznym ustawianiem daty,
- Wypisywanie daty pod opisem ToDo.

### Zliczanie ilości tasków:

Zliczanie tasków polega na przefiltrowaniu listy z ToDo za pomocą filtra, który sprawdzi czy pole `completed` jest true/false.
<br>Zliczanie wszystkich tasków nie wymaga filtracji.

![obraz](https://user-images.githubusercontent.com/56678518/151676633-df04f229-46b7-4804-882d-1eda2498f1d5.png)

Następnie wypisywane są dane z renderze zakładek. Dane o ilości przechowywane są w danych komponentu.

![obraz](https://user-images.githubusercontent.com/56678518/151676677-d55a042a-acbd-4f53-800c-7c8ae2712347.png)

### Dodanie zakładki `All`
Poprzednie rozwiązanie z ustawianiem `viewCompleted` jako boolean nie pozwalało na poszerzenie o nowe featury. Zamieniłem dane
na inta, i zakres zakładek zmienił się na:
- 0: ToDo do zrobienia,
- 1: ToDo zrobione,
- 2: Wszystkie ToDo

Aby wyświetlać nasze dane potrzebne było ternary operation. 
- Jeśli zakładka All to: wyświetli się lista toDo bez filtrów,
- Jeśli zakładka Complete/InComplete to wyświetli się lista toDo przefiltrowana po polu `completed`

![obraz](https://user-images.githubusercontent.com/56678518/151676807-ab5dc462-7a3b-49cb-9eb1-b9695105655b.png)

### Dodanie pola DateTime
Poszerzony model ToDo:

![obraz](https://user-images.githubusercontent.com/56678518/151676935-d92cea1e-5ce7-46f1-b66f-b63757a6a73c.png)

Widok nowego pola modelu na API: 

![obraz](https://user-images.githubusercontent.com/56678518/151676973-7632044d-1715-4e32-bbdc-44521dfaba20.png)

Dane w API:

![obraz](https://user-images.githubusercontent.com/56678518/151677003-c87c644b-5bf6-41b7-b556-6fa9e0640f21.png)

Dane zapisywane w naszym api odnośnie daty dodania zawierają informacje, które nas do końca nie interesują, możemy przefiltrować
nasze dane za pomocą metody `DateTimeFormat`:

![obraz](https://user-images.githubusercontent.com/56678518/151677044-59abc3d3-0c6a-41de-8872-97e202e65b29.png)

