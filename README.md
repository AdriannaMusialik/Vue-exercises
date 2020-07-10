# zadania

Ćwiczenia z Vue: 

1. Lista:
a) Wygeneruj listę <li> z numerami 1-10.
b) Wygeneruj nagłówki odpowiadające elelementom z listy
c) za pomocą vue-lorem-ipsum https://www.npmjs.com/package/vue-lorem-ipsum dorzuć pod każdy nagłówek akapit losowego tekstu
d) podepnij każdy element listy anchor linkiem do odpowiadającego mu nagłówka
npm
vue-lorem-ipsum
Lorem ipsum text generatog based on lorem.js for vue.js

2. Wracamy do listy, teraz zmień swoją aplikację tak, żeby lista była na stronie głównej, a kliknięcie w jej element przenosiło użytkownika do podstrony z odpowiednim nagłówkiem i losowym akapitem. Dodaj link wstecz

3. Vuetify: dodaj do projektu, elementy listy są teraz horyzontalnym nagłówkiem, wejście na stronę przekierowuje cię do url /1/, działanie jak w 2, ale ostylowane Vuetify

4. Dane lokalne: zapisuj w ciastku lub local storage aktualnie odwiedzaną stronę, po wejściu na stronę znowu powinien się wczytać ostatnio odwiedzony element z listy

5. Historia: każde otwarcie strony i spacerowanie po liście powinno odkładać historię chodzenia po liście. Powinna to być tablica przechowywana w Vuex. Dodajcie komponent z historią użytkownika w stopce strony. Historia powinna wyświetlać się w następującym formacie: 5 -> 4 -> 1 -> 6 itd. w zależności na którym elemencie listy byliście. Historia znika po odświeżeniu strony.

6. Porzucamy listę. Możecie użyć już istniejącej aplikacji lub napisać nową. Korzystając z API Zomato (https://developers.zomato.com/api?lang=pl) i axiosa, stwórz listę 20 najlepszych restauracji w twojej okolicy. Na wzór: https://pwkknz32vx.csb.app/#/