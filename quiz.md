# Quiz App

__Opis__
* Kviz je aplikacija koja služi da proveri znanje korisnika kroz niz kategorisanih pitanja
* Aplikacija radi na sledeći način:
    __Main strana aplikacije__
    * Sadrži naslov aplikacije, opcije, tj. kategorije pitanja (određujemo naknadnim dogovorom) kao i opcije _Start Game_ i _Quit_
        * Detaljan izgled početne strane priložen u dokumentaciji (quizMain.jpg).
        * Izlaz iz aplikacije - opcija _Quit_
        * Nakon obaveznog odabira kategorije, klikom na opciju _Start Game_ startujemo aplikaciju
    __Content strana aplikacije__        
    * Nakon startovanja aplikacije otvara se content strana koja sadrži tekst pitanja (menjaju se nakon odgovora korisnika), 4 ponuđena odgovora na koje je moguće kliknuti i tajmer (izgled strane prikazan detaljnije u quizContent.jpg)    
        * Opcije _New Game_, _Quit_ i kategorije nakon startovanja se dalje ne prikazuju        
        * Korisnik ima mogućnost odabira jednog od 4 ponuđena odgovora
        * Ukoliko je korisnik tačno odgovorio, border kliknutog odgovora dobija zelenu boju (logika za odgovore detaljnije u nastavku)
        * Ukoliko je korisnik pogrešno odgovorio, border kliknutog odgovora dobija crvenu boju, a border tačnog zelenu
        * Interval prebacivanja na sledeće pitanje je 2 sekunde        
        * Nakon uspešno ili neuspešno završenog kviza (isteklo vreme), zaustavljamo odbrojavanje i prelazimo na završnu fazu aplikacije
    __Result strana aplikacije__
    * Sadrži ispise _GAME OVER_, _Rezultat_, i opcije _New Game_ (vraća na početnu stranu) i _Quit_ (detaljan izgled prikazan u quizResult.jpg)
    __Logika__
    * Aplikacija treba da sadrži 20 pitanja po kategoriji koje ćemo čuvati u bazi
        * Pitanja su u formatu:
         _pitanjeID_ : {
             _pitanje: value_
             _odgovor1: value_
             _odgovor2 : value_
             _odgovor3: value_
             _odgovor4: value_
             _tačanOdogovor : value_
         }
        * Content strana aplikacije prikazuje pitanja iz _pitanjeID.pitanje.value_, a odgovore iz _pitanjeID.odgovorRedniBroj.value_
        * Logika za odgovore
            * Nakon klika korisnika proverava se vrednost kliknutog elementa (text) i upoređuje sa _tačanOdgovor: value_, ukoliko su vrednosti iste odgovor je tačan, u suprotnom netačan. Takođe, na svaki tačan ili netačan odgovor povećavamo brojače koji su potrebni za prikaz rezultata. Svaki tačan odgovor nosi 10 poena, a netačan -5 poena.

__Metode__
* JavaScript:
    * renderPage => metoda služi da prikaže potrebnu stranicu u zavisnosti od prosleđenog argumenta (_mainPage_, _contentPage_, _resultPage_). Argument je id elementa koji želimo da prikažemo
    * addListener => dodajemo event listener na izabranu _stranu_
    * removeListener => brišemo event listener sa izabrane _strane_ 
    * generateMainPage => metoda se poziva ukoliko je prosleđen argument _mainPage_. Služi da prikaže elemente koji su navedeni (vidi liniju 6)
        * populateCategories => služi da prikaže kategorije koje se nalaze u bazi (select tag sa opcijama), na odabir opcije registrujemo vrednost u promenljivu _chosenCategory_ koja je potrebna metodi generateContentPage
        * showAndStartGame => prikaz dugmeta za startovanje aplikacije, klikom se poziva renderPage kojoj prosleđujemo argument _contentPage_
        * showAndQuitGame => prikaz dugmeta za izlazak iz aplikacije, klikom se zatvara prozor aplikacije
    * generateContentPage => metoda se poziva ukoliko je prosleđen argument _contentPage_, tačnije ovu metodu poziva metoda showAndStartGame. Služi da prikaže elemente koji su navedeni (tekst gore), na osnovu odabira kategorije iz _mainPage_. Za te potrebe smo kreirali promenljivu _chosenCategory_. Prikazivaće stranicu sve dok vreme nije isteklo i dok nisu sva pitanja odgovorena
        * getQuestionsAndAnswers => metoda koja na osnovu promenljive _chosenCategory_ izvlači iz baze potrebnu grupu pitanja i odgovora
        * showQuestionAndAnswers => metoda koja prikazuje pitanje i odgovore (redosled je rastući, od 1 do 20)
        * getCurrentQuestionID => metoda potrebna da se izvuče redni broj pitanja koje je na redu, ukoliko je redni broj veći od ukupnog broja poziva se metoda renderPage sa argumentom _resultPage_
        * showRemainingQuestions => metoda koja služi da prikaže preostali broj pitanja (format: getCurrentQuestionID / ukupan broj pitanja)
        * startCountdown => startujemo odbrojavanje koje je ograničeno na 10 minuta, ukoliko je došlo do 0 pozivamo metodu renderPage sa argumentom _ResultPage_
    * generateResultPage => poziva se ako je pozvana metoda renderPage sa argumentom _resultPage_. Služi da prikaže rezultat na osnovu odgovora korisnika, kao i ostale elemente, _New Game_ i _Quit Game_
        * showResult => metoda služi da prikaže rezultat ukoliko je igra uspešno završena, ukoliko je isteklo vreme ova metoda se neće pozivati
            * calculateResult => računa rezultat na osnovu priložene logike (vidi liniju 34)
        * showAndPlayAgain => metoda koja prikazuje dugme _New Game_, a klikom korisnika ukoliko želi ponovno igranje pozivamo renderPage sa argumentom _mainPage_
        * showAndQuitGame => već opisana metoda
