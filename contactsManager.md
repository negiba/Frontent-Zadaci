# Contacts Manager App

__Opis__
* Contacts Manager je aplikacija koja služi za čuvanje i prikaz kontakata osoba
* Aplikacija radi na sledeći način:
    __Main strana__
    * Izgled stranice priložen u dokumentaciji (contactsManager.jpg)
    * Sadrži naslov aplikacije, dugme za dodavanje kontakta, searh polje za pretragu kontakata, listu kontakata sa jedinstvenim tekstualnim identifikacijama (lista se ažurira nakon svakog dodatog kontakta)
    __Opcija za dodavanje kontakta__ 
    * Klikom na dugme za dodavanje kontakta ispod prikazujemo okvir sa novim opcijama
        * Izgled dodavanja kontakta priložen u dokumentaciji (addContact.jpg)
            * Sadrži polje za unos jedinstvenog identifikatora tj ime kontakta
            * Sadrži 2 polja u koja se unose ime naloga (npr gmail) i kontakt (npr example@gmail.com)
            * Sadrži dugme za dodavanje novog naloga koji će opet prikazati iznad opisana polja ali samo u slučaju da je prethodni nalog pravilno popunjen, ukoliko nije pravilno popunjen, neće kreirati nova polja veće će prebaciti fokus na polja koja nisu prethodno popunjena
            * Sadrži dugme za čuvanje kontakta - nakon klika, kontakt sa upisanim nalozima dodajemo u prethodno kreiranu bazu, a ukoliko kontakt postoji ažuriramo bazu
            * Sadrži dugme cancel - ukoliko ipak ne želimo da kreiramo ili ažuriramo nalog, vraćamo se na početno stanje
    __Search polje__
    * Polje za pretragu kontakata
        * Izgled search polja priložen u dokumentaciji (searchField.jpg)
        * Tokom kucanja imena ispod search polja prikazujemo kontakte koji počinju sa zadatim karakterima (npr otkucano Ne prikazuje sve kontakte koji počinju sa Ne)
        * Klikom na predloženi kontakt, prebacuje fokus na listu kontakata i prikazuje ga kao da smo na njega kliknuli direktno iz liste, ono što je ukucano u searh polju se briše
        * Klikom van search polja ili escape tastera vraćamo se na početno stanje
    __Lista kontakata__
    * Lista sa imenima (jedinstveni identifikacioni broj)
        * Sadrži listu sa maksimum 10 kontakata koja je raspoređena od A do Z, ukoliko ih ima više prikazuje se paginacija na dnu liste (contactList.jpg)
        * Klikom na kontakt iz liste širi se okvir u kojem se nalazi kontakt i prikazuju se svi pripadajući podaci (contact.jpg)
        * Ukoliko se klikne na otvoreni kontakt okvir, vraćamo se na početno stanje
        * Klikom van liste ili escape tastera vraćamo se na početno stanje
        * Prelaskom miša preko kontakta (hover) pirakzujemo delete i edit dugme sa kojim brišemo ili editujemo kontakt
            * Delete dugme briše kontakt iz baze
            * Edit dugme seli izabrani kontakt u okvir za dodavanje kontakta (fokus), sa razlikom da prikazuje podatke koje su već kreirani

__Metode__
* JavaScript:
    * 