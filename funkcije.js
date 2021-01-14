"use strict";

var polje=[];

/*Funkcija, ki jo kličemo s parametri ime, priimek in starost.
S temi podatki ustvarite objekt, ki ga funkcija tudi vrne. Pred tem še preverite,
če kateri izmed parametrov manjka. V tem primeru sprožite napako.*/
function prva(ime,priimek,starost)
{
  if(ime!=null&&ime!=undefined&&priimek!=null&&priimek!=undefined&&starost!=null&&starost!=undefined)
  {
    var oseba={ ime:ime, priimek:priimek, starost:starost};
    return oseba;
  }
  else {
    throw new Error('Napaka');
  }
}

/*Funkcija, ki iterira po polju in vsak zapis izpiše v konzolo
(v obliki »Sem IME PRIIMEK.«). */
function druga()
{
  for(a in polje)
  {
    var name=polje[a].ime;
    var surname=polje[a].priimek;

    console.log("Sem" + ' ' + name.toUpperCase() + ' ' + surname.toUpperCase());
  }
}

/*Funkcija, ki jo kličemo z enim parametrom (tj. indeks polja).
Preverite, če obstaja zapis v polju s tem indeksom. V kolikor obstaja, izbrišite zapis na tem indeksu (uporabite splice),
v nasprotnem primeru pa sprožite napako.*/

function tretja(indeks)
{
  if(indeks>polje.length)
  {
    throw new Error("Indeksa ni!")
  }
  else {
    polje.splice(indeks, 1);
  }
}
