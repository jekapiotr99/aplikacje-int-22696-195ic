# aplikacje-int-22696-195ic

##3. Różne sposoby uwierzytelniania

Link do strony na PaaS'ie:

https://piotrjeka.pythonanywhere.com

Wybrane 3 sposoby logowania to:
- Facebook
- Google
- Github

####Główny wygląd strony:
![obraz](https://user-images.githubusercontent.com/56678518/144288857-a123e3ad-754e-41a5-8490-0cc31aeb89e5.png)

##Facebook:

Problemy napotkane przy tworzeniu logowania za pomocą facebook:
- wymagane było utworzenie certyfikatu prywatności ( autoryzacja wymagała protokołu https/ssl jako jedyna z 3 wybranych metod),
- Rediret URI nie był wymagany podczas logowań na localhost'cie, natomiast gdy przeniosłem stronę na hosting PaaS, autoryzacja nie przekierowywała poprawnie.

![obraz](https://user-images.githubusercontent.com/56678518/144289058-d0f1718f-b59a-4d89-8b5f-a794b0a431ed.png)

##Google:

Problemynapotkane przy tworzeniu logowania za pomocą google:
- Najtrudniejsza konfiguracja API ( ilość pól do wypełnienia, wymaganie dodania API z biblioteki),
- Najlepsza konfiguracja danych logowania ( możliwość dodawania wielu identyfikatorów na raz, każdy identyfikator może mieć wiele source'ów i callback'ów - co umożliwia konfiguracje jednocześnie na PaaS'ie i localhost'cie).

![obraz](https://user-images.githubusercontent.com/56678518/144290373-5cad0530-4ef6-4b35-ae84-ca0043a5c793.png)

##Github:

Problemynapotkane przy tworzeniu logowania za pomocą google:
- Najprostsza oraz najszybsza konfiguracja ze wszystkich,
- Problematyczne odnalezenie api - trzeba wejść w ustawienia konta oraz wybrać ostatnią opcję (?). Wszystkie pozostałe serwisy społecznościowe mają dedykowaną stronę do swojego API, tutaj jest ten feature ukryty.
![obraz](https://user-images.githubusercontent.com/56678518/144296042-2135a488-f5bc-4b6d-9cf9-4ec75192ab56.png)
