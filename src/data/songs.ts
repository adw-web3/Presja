export interface Song {
  id: number;
  title: string;
  slug: string;
  featuring?: string;
  story: string;
  lyrics: string;
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    tidal?: string;
    youtube?: string;
  };
  downloadUrl?: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Preludium",
    slug: "preludium",
    story: `\u201EPreludium\u201D pokazuje \u017cycie w nat\u0142oku wielu r\u00f3\u017cnych presji pojawiaj\u0105cych si\u0119 i znikaj\u0105cych na r\u00f3\u017cnych etapach dnia, roku i \u017cycia. To obraz chaosu my\u015bli powstaj\u0105cego wtedy, gdy kilka napi\u0119\u0107 nak\u0142ada si\u0119 na siebie jednocze\u015bnie. Z pozoru drobne rzeczy zaczynaj\u0105 tworzy\u0107 realny ci\u0119\u017car, trudny do zignorowania. Utw\u00f3r oddaje stan przeci\u0105\u017cenia i zagubienia, dobrze znany ka\u017cdemu z nas. To bezpo\u015brednia zapowied\u017a kolejnych utwor\u00f3w i presji, kt\u00f3re b\u0119d\u0105 si\u0119 stopniowo ujawnia\u0107.`,
    lyrics: `Ref.

Kiedy b\u0119dzie moja kolej
W ko\u0144cu przyjdzie moja kolej
M\u0119czy mnie
Medium
Presja

Zwrotka 1.

Wchodz\u0119 na wy\u017cyny zucha\u0142y p\u0119dz\u0119
Nie wiedzia\u0142am ile mog\u0119 wi\u0119cej
G\u0142owa mi m\u00f3wi potrzebujesz mie\u0107 to
Dlatego z rana mi kurier dor\u0119cza
Kupuj\u0119 znowu co\u015b troch\u0119 to m\u0119czy mnie
Ludzie jak wieszaki sprzedaj\u0105 mod\u0119 jak benz dealer
Po co mi lululemon
by potem \u017cy\u0107 w n\u0119dzy, nie?
\u017baby si\u0119 lepiej powodzi\u0142o stanowisko daj mi wi\u0119ksze

Daj mi awans
Ka\u017cdy z rodziny w tym wieku ju\u017c dzieci
Mnie presja m\u0119czy nadal
Powiadomienie zakrywa mi zegar
Wszyscy w tym wieku ju\u017c wywiad w gazetach
Mnie presja j\u0119zyka doje\u017cd\u017ca
Nawet w podr\u00f3\u017cy wyczuwane spi\u0119cia
Zm\u0119czone foty i za drogi bar
hotelowe \u0142\u00f3\u017cko pod wiecz\u00f3r mnie wkr\u0119ca
Za du\u017ce ci\u015bnienie mam
Nie widz\u0119 w tym sensu
Czasem presja to jest dar
A czasem to przekle\u0144stwo
nie widze w tym nic
nie widze nic
nie widze w tym nic
nie widze nic

Ref.

Kiedy b\u0119dzie moja kolej
W ko\u0144cu przyjdzie moja kolej
M\u0119czy mnie
Medium
Presja

Ref. 1.2

Kiedy b\u0119dzie moja kolej
W ko\u0144cu przyjdzie moja kolej
Czasem M\u0119czy, czasem nie
Medium
Presja`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/12OANt7tfrp3X43TPcQR2bRSdSClOKeKX/view?usp=sharing",
  },
  {
    id: 2,
    title: "Pracy",
    slug: "pracy",
    story: `Utw\u00f3r skupia si\u0119 na presji zwi\u0105zanej z prac\u0105, rozwojem i por\u00f3wnywaniem si\u0119 do innych. Kasia mierzy si\u0119 z oczekiwaniami awansu, wi\u0119kszych zarobk\u00f3w i \u201Elepszego \u017cycia\u201D, jednocze\u015bnie czuj\u0105c stagnacj\u0119 i zm\u0119czenie. Codzienno\u015b\u0107 zamienia si\u0119 w powtarzalny schemat, w kt\u00f3rym motywacja miesza si\u0119 z frustracj\u0105. Por\u00f3wnania do r\u00f3wie\u015bnik\u00f3w i medialnych sukces\u00f3w tylko pog\u0142\u0119biaj\u0105 poczucie, \u017ce jest w tyle. To historia o wy\u015bcigu, w kt\u00f3rym im szybciej biegniesz, tym trudniej zobaczy\u0107 sens.`,
    lyrics: `Zwrotka 1.

To nie czas
W kwiecie wieku nie chce wyp\u0142ywa\u0107 na l\u0105d
To ju\u017c czas
Ma\u0142a Kasia oceanu musi wyj\u015b\u0107 (gdzie?)
do pracy
Mamo nie chce
Wol\u0119 jak on I on (i on i on)
Mamo nie chce
Wol\u0119 jak on I on (i on i on)

Jestem jak znudzony winyl
Kurze si\u0119
Lawina news\u00f3w, wp\u0142ywa
Burze si\u0119
Porzucam l\u0105d
I demotywuje wzrok
Wszystkich m\u0142odszych, kt\u00f3rzy wy\u017cej wi\u0119cej dalej lepiej szybciej
Otwieram oczy i zamykam drugi biznes
Wsz\u0119dzie dobrze ale u mnie po staremu
Wielu mnie ocenia super ale te\u017c zazdroszcz\u0119 wielu
Czemu w moim wieku
Wide\u0142ki prac i p\u0142ac
i tak si\u0119 tak r\u00f3\u017cni\u0105

Chc\u0119 us\u0142ysze\u0107 Kasia awans
Ale nic jej nie wyr\u00f3\u017cnia
Znowu Praca praca praca
stale nowy Szef
8, 16 i 8, 16 i kolejny dzie\u0144
Wy\u017csza kasa kasa
Czasem
Daje motywacj\u0119
I tak si\u0119 nie zmieni wcale Kasi dzie\u0144
Nowa firma
Ni\u017csza flota
Za 3 miechy mo\u017ce b\u0119dzie jej lepiej

Ref.

Znowu praca mnie doje\u017cd\u017ca (mnie doje\u017cd\u017ca)
Zas\u0142uguj\u0119 na awans (na awans)
Wytrzymuje codzie\u0144 wi\u0119cej (i wi\u0119cej)
Stres dodaje mi ai (ai)
Zrobi\u0119 sobie MBA-jke (MBA-jke)
Przecie\u017c to mi doda hajs (hajs, hajs)
J.k Rowling daj serwetk\u0119 (J.k Rowling daj serwetk\u0119)
Chce mie\u0107 \u017cycie jak oprah

Zwrotka 2.

Znowu podr\u00f3\u017cuje bez sens
Skoro mog\u0119 cisn\u0105\u0107 prac\u0119
Budz\u0119 si\u0119 zaczynam przeddzie\u0144
Usun\u0119\u0142am ju\u017c tiktoka
(nie chce robi\u0107)
Chc\u0119 mie\u0107
Chc\u0119 mie\u0107 wi\u0119cej i wi\u0119cej (Usun\u0119\u0142am ju\u017c tiktoka)
i wi\u0119cej i wi\u0119cej i wi\u0119cej (powinno wystarczy\u0107)

W moim wieku ludzie Napoleon podbijaj\u0105 rynek pracy
Pokazywani w gazetach si\u0119 staczaj\u0105 potem kolejne wywiady
Zn\u00f3w artyku\u0142 o tym \u017ce zarabiam
mniej ni\u017c co drugi na tym stanowisku
Benefity omijaj\u0105 mnie jak
Nie
Presja levelowania
wy\u015bcig szczur\u00f3w widz\u0119 stale z bliska

Ref.

Znowu praca mnie doje\u017cd\u017ca (mnie doje\u017cd\u017ca)
Zas\u0142uguj\u0119 na awans (na awans)
Wytrzymuje codzie\u0144 wi\u0119cej (i wi\u0119cej)
Stres dodaje mi ai (ai)
Zrobi\u0119 sobie MBA-jke (MBA-jke)
Przecie\u017c to mi doda hajs (hajs, hajs)
J.k Rowling daj serwetk\u0119 (J.k Rowling daj serwetk\u0119)
Chce mie\u0107 \u017cycie jak oprah

Zwrotka 3.

Znowu tu chwal\u0105 mnie bliscy
Ja
Codziennie czuj\u0119 \u017ce schodz\u0119 na psy
Czy to ambicje
Nie chc\u0119 stagnacji
Sama se wchodz\u0119 na na \u0142eb
P\u00f3\u017an\u0105 noc\u0105 zamiast spa\u0107
Czytam o samotnej matce kt\u00f3ra dzi\u015b robi co chce

Ref.

Znowu praca mnie doje\u017cd\u017ca (mnie doje\u017cd\u017ca)
Zas\u0142uguj\u0119 na awans (na awans)
Wytrzymuje codzie\u0144 wi\u0119cej (i wi\u0119cej)
Stres dodaje mi ai (ai)
Zrobi\u0119 sobie MBA-jke (MBA-jke)
Przecie\u017c to mi doda hajs (hajs, hajs)
J.k Rowling daj serwetk\u0119 (J.k Rowling daj serwetk\u0119)
Chce mie\u0107 \u017cycie jak oprah`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1yayRFnUXk_dF5mFb1lgbkK_ejoFK3z5X/view?usp=sharing",
  },
  {
    id: 3,
    title: "Czasu",
    slug: "czasu",
    story: `Utw\u00f3r pokazuje presj\u0119 ci\u0105g\u0142ych bod\u017ac\u00f3w w postaci powiadomie\u0144 na zegarku. Za ka\u017cdym razem, gdy bohaterka chce sprawdzi\u0107 godzin\u0119, ekran zas\u0142aniaj\u0105 kolejne komunikaty. Nat\u0142ok informacji, kt\u00f3ry sama sobie stworzy\u0142a r\u00f3\u017cnorakimi aplikacjami, zaczyna przejmowa\u0107 kontrol\u0119 nad jej codzienno\u015bci\u0105. Brak chwili ciszy sprawia, \u017ce trudno si\u0119 zatrzyma\u0107 i z\u0142apa\u0107 oddech, a czas zaczyna przecieka\u0107 przez palce, niezauwa\u017calnie.`,
    lyrics: `Ref.

Prosz\u0119 ciszej
Zdrowie mi m\u00f3wi, \u017ce PMS
Prosz\u0119 Ciszej
Inpost mi m\u00f3wi, \u017ce sp\u00f3\u017ani\u0119 si\u0119
Prosz\u0119 ciszej
Chmura mi m\u00f3wi, \u017ce miejsca brak
B\u0142agam ciszej
Na instagrama mi wpada like
Prosz\u0119 ciszej
Zdrowie mi m\u00f3wi, \u017ce PMS
Prosz\u0119 Ciszej
Inpost mi m\u00f3wi, \u017ce sp\u00f3\u017ani\u0119 si\u0119
Prosz\u0119 ciszej
Chmura mi m\u00f3wi, \u017ce miejsca brak
B\u0142agam ciszej
Na instagrama wpada like

Zwrotka 1.

Wstaje mi garmin m\u00f3wi \u017ce za ma\u0142o snu mam
60 punkt\u00f3w fuck odrazu bardziej zm\u0119czona si\u0119 czu\u0142am
Pierwsza sobota dla siebie
Kt\u00f3ra godzina ju\u017c nie wiem
bo przychodzi powiadomienie

Ref.

Prosz\u0119 ciszej
Zdrowie mi m\u00f3wi, \u017ce PMS
Prosz\u0119 Ciszej
Inpost mi m\u00f3wi, \u017ce sp\u00f3\u017ani\u0119 si\u0119
Prosz\u0119 ciszej
Chmura mi m\u00f3wi, \u017ce miejsca brak
B\u0142agam ciszej
Na instagrama mi wpada like
Prosz\u0119 ciszej
Zdrowie mi m\u00f3wi, \u017ce PMS
Prosz\u0119 Ciszej
Inpost mi m\u00f3wi, \u017ce sp\u00f3\u017ani\u0119 si\u0119
Prosz\u0119 ciszej
Chmura mi m\u00f3wi, \u017ce miejsca brak
B\u0142agam ciszej
Na instagrama wpada like

Zwrotka 2.

Lec\u0119 do hebe po kule do wanny
Kt\u00f3ra na osi? za ile m\u00f3j bus?
Powiadomienie w Iranie zn\u00f3w ranni
Kt\u00f3ra godzina? Nie widz\u0119, bo push
Jeba\u0107 to hebe, jeba\u0107 ten garmin
Jeba\u0107 te streaki wracam na chawir

Ref.

Prosz\u0119 ciszej
Zdrowie mi m\u00f3wi, \u017ce PMS
Prosz\u0119 Ciszej
Inpost mi m\u00f3wi, \u017ce sp\u00f3\u017ani\u0119 si\u0119
Prosz\u0119 ciszej
Chmura mi m\u00f3wi, \u017ce miejsca brak
B\u0142agam ciszej
Na instagrama mi wpada like
Prosz\u0119 ciszej
Zdrowie mi m\u00f3wi, \u017ce PMS
Prosz\u0119 Ciszej
Inpost mi m\u00f3wi, \u017ce sp\u00f3\u017ani\u0119 si\u0119
Prosz\u0119 ciszej
Chmura mi m\u00f3wi, \u017ce miejsca brak
B\u0142agam ciszej
Na instagrama wpada like

Zwrotka 3.

Otwieram drzwi i zdejmuje wszystko
Mia\u0142 by\u0107 chill a nic nie wysz\u0142o

Ref.

Prosz\u0119 ciszej
Zdrowie mi m\u00f3wi, \u017ce PMS
Prosz\u0119 Ciszej
Inpost mi m\u00f3wi, \u017ce sp\u00f3\u017ani\u0119 si\u0119
Prosz\u0119 ciszej
Chmura mi m\u00f3wi, \u017ce miejsca brak
B\u0142agam ciszej
Na instagrama mi wpada like
Prosz\u0119 ciszej
Zdrowie mi m\u00f3wi, \u017ce PMS
Prosz\u0119 Ciszej
Inpost mi m\u00f3wi, \u017ce sp\u00f3\u017ani\u0119 si\u0119
Prosz\u0119 ciszej
Chmura mi m\u00f3wi, \u017ce miejsca brak
B\u0142agam ciszej
Na instagrama wpada like`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1o_3WuXNeM_HRn2t--ibVPEuKj7hjWXPE/view?usp=sharing",
  },
  {
    id: 4,
    title: "Finansowa",
    slug: "finansowa",
    story: `Utw\u00f3r skupia si\u0119 na presji finansowej i potrzebie posiadania rzeczy, kt\u00f3re definiuj\u0105 status. Kasia balansuje mi\u0119dzy realnymi mo\u017cliwo\u015bciami a ch\u0119ci\u0105 \u017cycia na poziomie, kt\u00f3ry widzi u innych. Zakupy przestaj\u0105 by\u0107 potrzeb\u0105, a zaczynaj\u0105 by\u0107 pr\u00f3b\u0105 dopasowania si\u0119 i nad\u0105\u017cania za trendami. Z czasem pojawia si\u0119 pytanie, czy to motywacja do rozwoju, czy ju\u017c presja, kt\u00f3ra przejmuje kontrol\u0119. To historia o tym, jak \u0142atwo pomyli\u0107 w\u0142asne potrzeby z tym, co narzuca \u015bwiat.`,
    lyrics: `Zwrotka 0.

To kolejna noc najlepiej wysypia materac od DUX nie taki jak ja mam
Do biegania skiety zwyczajne chce tak jak lewego Ania
Nie buty ON chocia\u017c je w\u0142a\u015bnie zak\u0142adam
Niby mam hajs przecie\u017c nie na to odk\u0142adam
Niby to hype na kt\u00f3ry chce sobie pozwala\u0107

Ref.

M\u0119czy presja finansowa
Chce torb\u0119 Longchamp
I north face
Bass taki jak Sonos
Skiety FALKE I Dyson

Liczy si\u0119 money money money boy
Nie chce Armani a vagabond
Jak si\u0119 okazja nadarzy to wezm\u0119 to i to i to
P\u00f3\u0142 wyp\u0142aty leci na to i to i to (toy, toi toi i to)

Zwrotka 1.

Chce buty axel arigato
Albo filling pieces
Chc\u0119 ju\u017c ciszy (w uszach szumi hajs)
Mam wisiorek Pani Samk\u00f3w
Gramofon z muz\u0105 Jida
od audiotechniki
Nie wiedzia\u0142am ile mog\u0119 wy\u015bni\u0107
Wszyscy bliscy
maj\u0105 (ja)
Nie chc\u0119 opiera\u0107 si\u0119 masom
Przed zakupem sprawdzam jak du\u017cy to brand (a dla mnie)
Ile godzin wygody, a ile pracy (czas wsta\u0107)

Ref.

M\u0119czy presja finansowa
Chce torb\u0119 Longchamp
I north face
Bass taki jak Sonos
Skiety FALKE I Dyson

Liczy si\u0119 money money money boy
Nie chce Armani a vagabond
Jak si\u0119 okazja nadarzy to wezm\u0119 to i to i to
P\u00f3\u0142 wyp\u0142aty leci na to i to i to (toy, toi toi i to)

Zwrotka 2.

Przed obiadem zak\u0142adam ciuchy sportowe od lulu cytryny
Tak drogie, \u017ce to s\u0105 moje jedyne
Brakuje stroju na zim\u0119
Przecie\u017c od\u0142o\u017cone mam
Niby to mnie nie zabije (ice ice)
Troch\u0119 porusza mnie brak
Ale nie znikn\u0105
Gdy o nich ucichnie
Kupi\u0119 je taniej drip cheap gang
Kupie to nawet na vinted
Pytanie czemu to chce
(czemu to chce)
Pytanie czemu to chce
(czemu to chce)

Ref.

M\u0119czy presja finansowa
Chce torb\u0119 Longchamp
I north face
Bass taki jak Sonos
Skiety FALKE I Dyson

Liczy si\u0119 money money money boy
Nie chce Armani a vagabond
Jak si\u0119 okazja nadarzy to wezm\u0119 to i to i to
P\u00f3\u0142 wyp\u0142aty leci na to i to i to (toy, toi toi i to)

Zwrotka 3.

Gdyby na jeden dzie\u0144 przesta\u0142y m\u0119czy\u0107 finanse
Nie to \u017ce ma\u0142o mam
Ale naprawd\u0119
Czy serio kupi\u0119 co\u015b tylko przez brand
Czy Sonos serio ma tak dobry bass
Czy lepiej pracuje dyson
Mo\u017ce to szajs jest
Mo\u017ce po prostu zwyczajny
Chodzi mi o to
czy po zakupie poczuje si\u0119 nietauralnie

Chce tak jak oni
buty On
Dior perfumy
Oled tv wok\u00f3\u0142 niema\u0142y dom
Skiety Falke w nowym Birkenstock
Chc\u0119 o to walczy\u0107
Poddaje presji si\u0119 czy motywacji
Poddaje presji si\u0119 a mo\u017ce tylko z ni\u0105 ta\u0144cz\u0119
(ca\u0142\u0105 noc)

Ref.

M\u0119czy presja finansowa
Chce torb\u0119 Longchamp
I north face
Bass taki jak Sonos
Skiety FALKE I Dyson

Liczy si\u0119 money money money boy
Nie chce Armani a vagabond
Jak si\u0119 okazja nadarzy to wezm\u0119 to i to i to
P\u00f3\u0142 wyp\u0142aty leci na to i to i to (toy, toi toi i to)`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1EtuIo7AQLji19Q74FCJkVwjNl42lz_Ok/view?usp=sharing",
  },
  {
    id: 5,
    title: "Spo\u0142eczna",
    slug: "spoleczna",
    story: `Utw\u00f3r pokazuje presj\u0119 \u017cycia w social mediach i potrzeb\u0119 ci\u0105g\u0142ego bycia widzianym. Kasia zaczyna traktowa\u0107 codzienno\u015b\u0107 jak content, a w\u0142asne \u017cycie jak projekt do pokazania innym. Granica mi\u0119dzy byciem sob\u0105 a kreowaniem wizerunku stopniowo si\u0119 zaciera. Por\u00f3wnania, lajki i obserwacja innych nap\u0119dzaj\u0105 spiral\u0119 napi\u0119cia i poczucie, \u017ce wci\u0105\u017c trzeba wi\u0119cej. To historia o tym, jak \u0142atwo zgubi\u0107 siebie w \u015bwiecie, w kt\u00f3rym wszystko jest na pokaz.`,
    lyrics: `Zwrotka 1.

Ludzie uton\u0119li w lajkach postach to nie vibe
Sk\u0105d wy bierzecie hajs na
Takie wakacje
Je\u015bli \u017cyjecie w podobny spos\u00f3b co ja
Jak ma co\u015b robi ton\u0119 zdj\u0119\u0107
I ton\u0119 w ch\u0142amie ca\u0142y dzie\u0144
Od samego ranka

Zak\u0142adam buty i lec\u0119 na \u015bniadanie \u0142adne
Pudruje nosek dla obcych
Wstawiam to dla kole\u017canek
Na instagramie jest ca\u0142a \u015bmietanka

\u017bycie spo\u0142eczne to blockchain
Lepsze gdy przejrzyste jak \u0142za
Moje sociale to krypto projekt
Finansuje mnie tw\u00f3j like
Co si\u0119 ze mna dzieje
Odpicuje si\u0119 bez foty
Zmarnowany outfit
Presji ulegam

Ref.

Powiem to tylko raz
Daj mi czas na to
Chc\u0119 to sobie przepracowa\u0107
Ale Nic po za tym
Kiedy m\u00f3wi\u0119 rzeczy na g\u0142os
Brzmi\u0105 inaczej
Chc\u0119 to sobie przepracowa\u0107
Ale Nic po za tym

Zwrotka 2.

Jeste\u015b mark\u0105 swoj\u0105 w\u0142asn\u0105
Ale b\u0105d\u017a sob\u0105
To jest wielka konspiracja
Chcesz to b\u0105d\u017a mn\u0105
Jak co\u015b robisz mo\u017ce wychodzi\u0107 ci szybko albo chuj mnie to
Bo wszystko w tym \u015bwiecie wolno (fota fota)
Jak czego\u015b nie wiesz no to zamknij mord\u0119
(Fota fota)
Fajny outfit, fajne wakacje, fajna obr\u0105czka
Fajne \u015bniadanie, co dzie\u0144 relacja
widzi ig multum Twoich wspomnie\u0144

Kiedy\u015b mo\u017ce to szczypa\u0142o
Teraz na to pluj\u0119 z\u0142otem
(Fota fota fota)
Walcz\u0119 z presj\u0105 czasem
Jak widz\u0119 co\u015b fajnego
Chce przynajmniej na te zielon\u0105 relacj\u0119
Czasem
Najwi\u0119cej fot wlatuje przed obiadem
(Fota fota fota)
A co na kolacje?
(Fota fota)

Ref.

Powiem to tylko raz
Daj mi czas na to
Chc\u0119 to sobie przepracowa\u0107
Ale Nic po za tym
Kiedy m\u00f3wi\u0119 rzeczy na g\u0142os
Brzmi\u0105 inaczej
Chc\u0119 to sobie przepracowa\u0107
Ale Nic po za tym

Zwrotka 3.

Ale nic poza tym
Dalej zwalczam strachy
Bacznie obserwuje twoje flow
Witam dzie\u0144
I demotywuje insta rolls
Chc\u0119 mie\u0107 chat\u0119 jak Monroe
Bujam dzi\u015b w ob\u0142okach tak jak ca\u0142y blok
Znowu kto\u015b
Widzi wi\u0119cej ja dostrzegam pierwszy raz

Jak zarobi\u0107 \u017ceby stworzy\u0107 nowy start
Zapisuje by obejrze\u0107 jeszcze raz
W nowy dzie\u0144 zapomina
Eskaluje nowy spos\u00f3b zarabiania
Musz\u0119 bardziej si\u0119 postara\u0107
Ka\u017cdy nowy M\u0142ody sukces mnie postarza
Chc\u0119 to zrobi\u0107 ale nie chce przy tym stara\u0107

x2
Dzi\u015b mam relax
To moja nowa domena
Nie chce mi si\u0119 wybiera\u0107
Losowe powiadomienia`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1h_GwGbj4EPuMQ0P3Zo7QnNVd-f7NeYlU/view?usp=sharing",
  },
  {
    id: 6,
    title: "Interludium",
    slug: "interludium",
    story: `Utw\u00f3r skupia si\u0119 na pr\u00f3bie wyhamowania i pouk\u0142adania nagromadzonej presji. Kasia zaczyna zauwa\u017ca\u0107, jak bardzo wci\u0105gn\u0119\u0142o j\u0105 ci\u0105g\u0142e \u201Ewi\u0119cej\u201D i potrzeba levelowania \u017cycia. Pojawia si\u0119 refleksja, \u017ce nie ilo\u015b\u0107, a jako\u015b\u0107 ma realne znaczenie. Mimo tego nadal balansuje mi\u0119dzy ch\u0119ci\u0105 zmiany a starymi nawykami. To moment pierwszej pr\u00f3by odzyskania kontroli i z\u0142apania dystansu.`,
    lyrics: `Ref.

Przyszed\u0142 czas ju\u017c
Na podsumowanie dni
Przyszed\u0142 czas ju\u017c
M\u00f3wi\u0119 to for reel
Na wy\u015brodkowanie presji
liczy jako\u015b\u0107 si\u0119 nie ilo\u015b\u0107
Po co by\u0142y mi te nerwy
Aplikuj\u0119 w siebie reels

Zwrotka 1.

Zdrowy Habbit
Daj mi wi\u0119cej porad
Po o pierdole te porady
Presja levelowania
To m\u00f3j g\u0142upi nawyk

Ref.

Przyszed\u0142 czas ju\u017c
Na podsumowanie dni
Przyszed\u0142 czas ju\u017c
M\u00f3wi\u0119 to for reel
Na wy\u015brodkowanie presji
liczy jako\u015b\u0107 si\u0119 nie ilo\u015b\u0107
Po co by\u0142y mi te nerwy
Aplikuj\u0119 w siebie mi\u0142o\u015b\u0107

Zwrotka 2.

Chc\u0119 wi\u0119cej do\u015bwiadcza\u0107
Kiedy widz\u0119 fajne ciuchy
czasem liczy si\u0119 te\u017c marka
Dlaczego mnie ponaglasz
Sama wydam i zmarnuje
Chce odpocz\u0105\u0107 na wakacjach`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1CGlK68vB1sFtjEygCExsJMaUH4q93TUc/view?usp=sharing",
  },
  {
    id: 7,
    title: "J\u0119zyka",
    slug: "jezyka",
    story: `Utw\u00f3r porusza temat presji zwi\u0105zanej z j\u0119zykiem, trendami i sposobem komunikacji. Kasia realnie nie rozumie cz\u0119\u015bci anglicyzm\u00f3w, ale czuje potrzeb\u0119 u\u017cywania ich, \u017ceby dopasowa\u0107 si\u0119 do otoczenia. Granica mi\u0119dzy autentyczno\u015bci\u0105 a kreacj\u0105 zaczyna si\u0119 zaciera\u0107. Bohaterka czuje niemoc i ma wra\u017cenie, \u017ce nie ma na to wp\u0142ywu. Zaczyna wierzy\u0107, \u017ce jedynym wyj\u015bciem jest dostosowanie si\u0119 i oczekiwanie na zmian\u0119 \u201Emody\u201D.`,
    lyrics: `Ref.

Me, oh my
Czy to tylko posta\u0107?
Me, oh my
M\u00f3wi\u0119 po to by wygl\u0105da\u0107
Me, oh my
Czy to tylko posta\u0107?
Me, oh my
M\u00f3wi\u0119 po to by wygl\u0105da\u0107

Zwrotka 1.

Kiedy m\u00f3wisz "for real?"
Czy to bana\u0142?
Mo\u017ce chcesz si\u0119 wykreowa\u0107?
Id\u0119 na dat\u0119, babe spill ten tea
Spr\u00f3buj si\u0119 zrekowerowa\u0107
Bierzemy \u015blub\u2026
(Si\u0119 budz\u0119)
Chce usypia\u0107 zn\u00f3w\u2026
(Si\u0119 budz\u0119)

Nienawidz\u0119 substytut\u00f3w
Tylko gdy to s\u0142owa
czy to moja wina \u017ce si\u0119 musz\u0119 w focusowa\u0107
Mus to mus ale wiesz never mind vibe reality check tbh lowkey troch\u0119 nie potrzebne
i Was like

Ref.

Me, oh my
Czy to tylko posta\u0107?
Me, oh my
M\u00f3wi\u0119 po to by wygl\u0105da\u0107
Me, oh my
Czy to tylko posta\u0107?
Me, oh my
M\u00f3wi\u0119 po to by wygl\u0105da\u0107

Zwrotka 2.

Zawsze gdy m\u00f3wisz mam delay
Znowu nowy sport lepiej poka\u017c jaki pace
W po\u0142udnie zn\u00f3w si\u0119 zgubi\u0142am MIA
(M, I, A)
Ju\u017c si\u0119 z tym nie kryjesz zn\u00f3w podnosisz mi poprzeczk\u0119
Przecie\u017c to mnie nie zabije gdy podniesiesz mi poprzeczk\u0119

Pure joy
Workout
Pays off
Jeste\u015b my fav
Kiedy\u015b by\u0142a\u015b random
Chcesz i\u015b\u0107 na hike
Jeste\u015b show off
So far focus
Pe\u0142en mind fuck
Co do za mindset
Co to w og\u00f3le znaczy

Ref.

Me, oh my
Czy to tylko posta\u0107?
Me, oh my
M\u00f3wi\u0119 po to by wygl\u0105da\u0107
Me, oh my
Czy to tylko posta\u0107?
Me, oh my
M\u00f3wi\u0119 po to by wygl\u0105da\u0107

Zwrotka 3.

Ty Podchodzisz ja confused
Daj wprowadzi\u0107 si\u0119 w ten mood
Ko\u0144cz\u0119 dzie\u0144 chce ju\u017c happy ending
Wracam na House w drodze Krusz\u0119 swoje z\u0119by
Czy to jaka\u015b nowa moda
Dzi\u015b zdemotywowa\u0142 j\u0119zyk mnie
Jak mam opowiedzie\u0107 dzie\u0144, s\u0142owami kt\u00f3rych nie znam?
Jak mam opowiedzie\u0107 dzie\u0144, s\u0142owami kt\u00f3rych nawet nie pami\u0119tam?

Ref.

Me, oh my
Czy to tylko posta\u0107? (co to w og\u00f3le znaczy?)
Me, oh my
M\u00f3wi\u0119 po to by wygl\u0105da\u0107 (co to w og\u00f3le znaczy?)
Me, oh my
Czy to tylko posta\u0107? (co to w og\u00f3le znaczy?)
Me, oh my
M\u00f3wi\u0119 po to by wygl\u0105da\u0107 (co to w og\u00f3le znaczy?)`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1MUmFlfpb23-ygXGcMzvLeN-7IgV3uME8/view?usp=sharing",
  },
  {
    id: 8,
    title: "Rodziny",
    slug: "rodziny",
    story: `Utw\u00f3r porusza temat presji dorastania i ci\u0105g\u0142ego poczucia, \u017ce trzeba chcie\u0107 wi\u0119cej. Refren, inspirowany klimatem \u201EWszystko, czego dzi\u015b chc\u0119\u201D Izabeli Trojanowskiej, pokazuje zderzenie marze\u0144 z realnym napi\u0119ciem i oczekiwaniami. Motyw \u201Eoderwać wzd\u0142u\u017c linii\u201D staje si\u0119 symbolem momentu, w kt\u00f3rym powinni\u015bmy \u201Ezrobi\u0107 wszystko dobrze\u201D i w ko\u0144cu dorosn\u0105\u0107. Zamiast spokoju pojawia si\u0119 jednak kolejne pytanie \u2014 czy to naprawd\u0119 nasz wyb\u00f3r, czy tylko odpowied\u017a na presj\u0119. To historia o \u017cyciu, w kt\u00f3rym ka\u017cdy kolejny etap nie daje ulgi, tylko zmienia form\u0119 napi\u0119cia.`,
    lyrics: `Zwrotka 1.1

(obu\u017a si\u0119)
Zmartwiona dusza ucieka to sos
nie presja rodziny
mi w g\u0142owie szpanuje na wskro\u015b
Gdy widz\u0119 jak inny ju\u017c swoje dostali to los
Nie brakuje czasu to wiem
Nowe \u017cyciorysy s\u0105 tworzone noc\u0105
Zapytasz czemu to chce
Tak d\u0142ugo szukam, \u017ce nie wiem ju\u017c po co

Zwrotka 1.2

Dzisiaj trac\u0119 zmys\u0142y
Gdy zadaj\u0119 ci pytanie
Czemu odpowiadasz jako my
Nowy trigger by mnie zniszczy\u0142
Wizja absolutnej ciszy psuje mnie

Ref.

Wszystko czego dzi\u015b chcesz
czego dzi\u015b chcesz
czego dzi\u015b chcesz
czego dzi\u015b chcesz
Wszystko x8
czego dzi\u015b chcesz
czego dzi\u015b chcesz

Zwrotka 2.1

(wyjd\u017a z domu)
Pierwsze lato z w\u0142asn\u0105 chat\u0105
Ca\u0142y dzie\u0144 z kacem, zero werwy (presja rodziny mnie w\u0142a\u015bnie\u2026)

Prosz\u0119 ciszej
g\u0142owa krzyczy \u017ce musz\u0119 chcie\u0107 wi\u0119cej
Jak JP
26 no kids
(presja rodziny doje\u017cd\u017ca)
Gdzie m\u00f3j babe i moje baby
Wszystko gra
Wci\u0105\u017c malowany \u015bwiat na dole mam
Ta m\u0142odo\u015b\u0107 to raj, czemu m\u00f3wisz stop?

Ref.

Wszystko czego dzi\u015b chcesz
czego dzi\u015b chcesz
czego dzi\u015b chcesz
czego dzi\u015b chcesz
Wszystko x8
czego dzi\u015b chcesz
czego dzi\u015b chcesz

Zwrotka 3.

Wszystko gra?
Czy ja chce jak inni
Ka\u017cdego \u017cycie to kartka
Kiedy oderwa\u0107 wzd\u0142u\u017c linii?
Kiedy oderwa\u0107 wzd\u0142u\u017c linii mam?
Czy to wszystko jest na niby
Gdy wchodzimy do kabiny
Wtedy us\u0142yszysz me s\u0142owa bez presji rodziny
Inny \u015bwiat
Ka\u017cdy ma na mnie ju\u017c pomys\u0142
Tylko mi si\u0119 on nie widzi
Tylko mi si\u0119 on nie widzi
Ka\u017cdego \u017cycie to po\u0142ysk
Veni, vidi i perdidi
Veni, vidi i perdidi
Nikt nie chce by\u0107 sam

Ref.

Wszystko czego dzi\u015b chcesz
czego dzi\u015b chcesz
czego dzi\u015b chcesz
czego dzi\u015b chcesz
Wszystko x8
czego dzi\u015b chcesz
czego dzi\u015b chcesz`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1siajVtiy11fX6Sl4V83kmNBgky1fU6m5/view?usp=sharing",
  },
  {
    id: 9,
    title: "Podr\u00f3\u017cy",
    slug: "podrozy",
    story: `Utw\u00f3r porusza temat presji do\u015bwiadcze\u0144 i \u017cycia \u201Ena maksa\u201D, nap\u0119dzanego przez FOMO i trendy. Kasia chce prze\u017cy\u0107 wszystko, podr\u00f3\u017ce, smaki i miejsca, ale z czasem zaczyna si\u0119 w tym gubi\u0107. Zamiast wolno\u015bci pojawia si\u0119 po\u015bpiech i poczucie, \u017ce trzeba robi\u0107 wi\u0119cej, zobaczy\u0107 wi\u0119cej i do\u015bwiadczy\u0107 jak najwi\u0119cej. Nawet odpoczynek przestaje by\u0107 naturalny, bo staje si\u0119 kolejnym punktem do zaliczenia, w kt\u00f3ry mimo \u017ce to wakacje nie op\u0142aca si\u0119 inwestowa\u0107 czasu. To historia o tym, jak \u0142atwo pomyli\u0107 prawdziwe prze\u017cycia z presj\u0105 ich kolekcjonowania.`,
    lyrics: `Ref.

Chce zje\u015b\u0107 pizze w Mediolanie
W Lugano i\u015b\u0107 na d\u0142ugi hike, to m\u00f3j cel jest
Zjara\u0107 blanta w Amsterdamie
W Adriatyku k\u0105pa\u0107 si\u0119 pieprzy\u0107 presje

Zwrotka 1.

Co to za posta\u0107
z rana wybiera gdzie najlepiej sp\u0119dza\u0107 czas
Co to za posta\u0107
W po\u0142udnie z ceg\u0142y wychodzi w soboty i \u015bwi\u0119ta
Co to za posta\u0107
Pod wiecz\u00f3r ma pe\u0142ny portfel gorszy stan
Czy to jest przykre
Myj\u0119 si\u0119 z my\u015bl\u0105, \u017ce musz\u0119 wyjecha\u0107
A to oczywiste
Jak kebab w berlinie
A to oczywiste
Jak stek w Argentynie
A to oczywiste
Jak w Pugli po primitaivie
A to oczywiste

Ref.

Chce zje\u015b\u0107 pizze w Mediolanie
W Lugano i\u015b\u0107 na d\u0142ugi hike, to m\u00f3j cel jest
Zjara\u0107 blanta w Amsterdamie
W Adriatyku k\u0105pa\u0107 si\u0119 pieprzy\u0107 presje

Zwrotka 2.

Nie mog\u0119 traci\u0107 czasu
Bilety hotel gdy zamulam trac\u0119 kas\u0119
W po\u0142udnie znowu w tras\u0119
Nie lubi\u0119 g\u0142upich zasad
Gdy nie mam si\u0142y na wyj\u015bcie
Przecie\u017c wszyscy ju\u017c na mie\u015bcie
Nie bior\u0119 nawet ubera swoimi nogami najwi\u0119cej do\u015bwiadcze
W pary\u017cu wychodz\u0119 na obiad
(co to kurwa jest?)
Zupa cebulowa
Czy musz\u0119 na pewno tam i\u015b\u0107 tam je\u015b\u0107
Ale szkoda nie spr\u00f3bowa\u0107
Po co fomo ryzykowa\u0107?
(W Adriatyku k\u0105pa\u0107 si\u0119 pieprzy\u0107 presje)

Ref.

Chce zje\u015b\u0107 pizze w Mediolanie
W Lugano i\u015b\u0107 na d\u0142ugi hike, to m\u00f3j cel jest
Zjara\u0107 blanta w Amsterdamie
W Adriatyku k\u0105pa\u0107 si\u0119 pieprzy\u0107 presje

Zwrotka 3.

Spiesz\u0119 si\u0119 goni mnie mrok
Je\u015bli to Czechy to cz\u0119stuj mnie Holb\u0105
Czemu zalewasz si\u0119 bordo
Przecie\u017c najlepsze jest w Bordo
Spiesz\u0119 si\u0119 goni mnie trend
Influencerki zwierzaj\u0105 si\u0119 hordzie
Czemu dro\u017ceje flamenco
Tak popularne \u017ce nie na m\u00f3j portfel
Troch\u0119 to przykre jest
(troch\u0119 to)

Ref.

Chce zje\u015b\u0107 pizze w Mediolanie
W Lugano i\u015b\u0107 na d\u0142ugi hike, to m\u00f3j cel jest
Zjara\u0107 blanta w Amsterdamie
W Adriatyku k\u0105pa\u0107 si\u0119 pieprzy\u0107 presje

Zwrotka 4.

Brakuje plan\u00f3w na wiecz\u00f3r
Presji zrobimy na przek\u00f3r
Dzi\u015bj nie
id\u0119 po wzorcach (oj nie)
Najlepsza kawa to nie ta
Z internetowych polece\u0144
a tam gdzie dziadek z gazet\u0105
Chce ju\u017c wyj\u015b\u0107 sama
P\u00f3\u017an\u0105 noc\u0105 troch\u0119 risky
Mo\u017ce nam\u00f3wi\u0119 reszt\u0119
Spacer nie klub dla turysty
ale to na nic
Lepszy z\u0142y plan ni\u017c go brak (serio?)
Mo\u017ce zostan\u0119
w domu \u0142apie fomo what the fuck

Ref.

Chce zje\u015b\u0107 pizze w Mediolanie
W Lugano i\u015b\u0107 na d\u0142ugi hike, to m\u00f3j cel jest
Zjara\u0107 blanta w Amsterdamie
W Adriatyku k\u0105pa\u0107 si\u0119 pieprzy\u0107 presje`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1YVHfjK2pTJJWGLxhQhW9ZduDU1nFeHX-/view?usp=sharing",
  },
  {
    id: 10,
    title: "Zdrowego \u017cycia",
    slug: "zdrowego-zycia",
    story: `Utw\u00f3r porusza temat presji \u017cycia \u201Ezdrowo\u201D i ci\u0105g\u0142ego doskonalenia siebie. Kasia pr\u00f3buje stosowa\u0107 wszystkie zasady i dobre nawyki, ale z czasem zaczyna odczuwa\u0107 ich ci\u0119\u017car. Zamiast r\u00f3wnowagi pojawia si\u0119 kontrola i poczucie, \u017ce zawsze mo\u017cna robi\u0107 wi\u0119cej. Ka\u017cda kolejna rada i trend zamienia si\u0119 w obowi\u0105zek, kt\u00f3ry zamiast pomaga\u0107 zaczyna przyt\u0142acza\u0107. To historia o tym, jak dbanie o siebie mo\u017ce sta\u0107 si\u0119 kolejn\u0105 form\u0105 presji.`,
    lyrics: `Ref.

Powiedz jak \u017cy\u0107 zdrowo
10k krok\u00f3w, 8h snu
Powiedz jak zdrowo \u017cy\u0107
10k krok\u00f3w, 8h snu

Zwrotka 1.1

Powiem tylko raz
wstaj\u0119 rano i woda
(To za ma\u0142o)
Kreatyna raz (To za ma\u0142o ma\u0142o)
bior\u0119 magnez (to za du\u017co)
K\u0142ad\u0119 spa\u0107 o 22
To jest Madness

Zwrotka 1.2

Jak ci to opisa\u0107?
Zimny prysznic stawia mnie na nogi
Ma\u0142y screen time
Uchem obserwuje muz\u0119 kiedy my\u015bl\u0119
Nie podjadam bo to ciemna strona akolita
Czuj\u0119 si\u0119 jak m\u0142oda Leja znam maraton nie od dzisiaj

Ref.

Powiedz jak \u017cy\u0107 zdrowo
10k krok\u00f3w, 8h snu
Powiedz jak zdrowo \u017cy\u0107
10k krok\u00f3w, 8h snu

Zwrotka 2.

Na obiad niema\u0142y brainstorm
Nie za du\u017co spieczonego mi\u0119sa
Pod\u0105\u017cam trendem
Z ka\u017cdej godziny 5 minut zabieram na \u015bwie\u017ce powietrze
10 minut medytacji 5 posi\u0142k\u00f3w dziennie
Nie mam ju\u017c czasu \u017ceby ugotowa\u0107 bo kolejna rada nie jedz po 20
Jak czego\u015b nie zrobi\u0119 to gorzej si\u0119 czuj\u0119 bo mog\u0119 rozwali\u0107 te serie
Jak robi si\u0119 ciemno ograniczam \u015bwiat\u0142o niebieskie (jak)
Nie wiem czemu
To w\u0142a\u015bnie m\u00f3j spos\u00f3b na jeban\u0105 presj\u0119 (presje)

Ref.

Powiedz jak \u017cy\u0107 zdrowo
10k krok\u00f3w, 8h snu
Powiedz jak zdrowo \u017cy\u0107
10k krok\u00f3w, 8h snu

Zwrotka 3.

Zimny o ya
Prysznic
Po co to robi\u0119 to na pokaz
Skoro nikt nie widzi
Skoro nikt nie s\u0142yszy
Wchodz\u0119 w Nowy stan
Cia\u0142o kocha czasem nienawidzi
Jak widzi innych
Mog\u0119 wi\u0119cej

Mog\u0119 wi\u0119cej
Stale mog\u0119 wi\u0119cej
Ka\u017cdej nocy nowy bieg
Bacznie obserwuj\u0119 nowy trend
P\u00f3\u0142maraton \u017cycia budzi nowy l\u0119k
Sport to lek jest

Ref. x2

Powiedz jak \u017cy\u0107 zdrowo
10k krok\u00f3w, 8h snu
Powiedz jak zdrowo \u017cy\u0107
10k krok\u00f3w, 8h snu

Zwrotka 4.

Po ka\u017cdych 7 minutach patrzenia w monitor, minimum 3 spojrze\u0107 w dal
Po ka\u017cdych 10 minutach siedzenia, wsta\u0107 wykona\u0107 12 przysiad\u00f3w
Raz na godzin\u0119 zrobi\u0107 15 minutow\u0105 przerw\u0119 na regeneracj\u0119
5 minut medytacji
5 minut marszu w miejscu
5 minut afirmacji
Co 90 minut zmieni\u0107 pozycj\u0119 cia\u0142a
Nie pracuj wi\u0119cej ni\u017c p\u00f3\u0142 godziny na godzin\u0119
20 g\u0142\u0119bokich oddech\u00f3w
Nie jedz, nie pij, nie pal
Nie martw si\u0119
Nie patrz na innych
Chyba \u017ce robi\u0105 to dobrze
Nie pracuj wi\u0119cej ni\u017c 12 minut dziennie
Po prostu \u017cyj zdrowo`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1906kMZhyZOcQZuo02ZtR0mdD9mJKt-vq/view?usp=sharing",
  },
  {
    id: 11,
    title: "To ostatnie ludium",
    slug: "to-ostatnie-ludium",
    story: `Utw\u00f3r porusza temat bezradno\u015bci i potrzeby wsparcia w \u015bwiecie pe\u0142nym presji. Kasia czuje, \u017ce powinna radzi\u0107 sobie sama, ale jednocze\u015bnie nie potrafi unie\u015b\u0107 wszystkiego w pojedynk\u0119. To moment, w kt\u00f3rym wszystkie presje z ca\u0142ego albumu nak\u0142adaj\u0105 si\u0119 na siebie. Pojawia si\u0119 wewn\u0119trzny konflikt mi\u0119dzy potrzeb\u0105 niezale\u017cno\u015bci a pragnieniem, \u017ceby kto\u015b j\u0105 uratowa\u0142. To najbardziej intymny punkt historii, w kt\u00f3rym napi\u0119cie osi\u0105ga swoje maksimum.`,
    lyrics: `Zwrotka 1.

Nie umiem sama
Nie potrafi\u0119 wyj\u015b\u0107

Je\u015bli skorzystam
Z Twojej pomocy
Prosz\u0119 milcz
Prosz\u0119
Z tym si\u0119 mijam

Prosz\u0119 odezwij si\u0119
Je\u015bli potrzebujesz jej
je\u015bli uratujesz mnie x2

Ref.

Prosz\u0119 odezwij si\u0119
je\u015bli uratujesz mnie

Zwrotka 2.

Czuj\u0119 luz
Styka but
W bardzo stylowej podeszwie
Boli czas mnie
Cho\u0107 nawet w po\u0142owie nie jestem
\u017bycia
te presje zn\u00f3w czuje co wiecz\u00f3r
a nie chc\u0119 (a nie chc\u0119)

Dogorywam ta\u0144cz\u0119
To nie Dance macabre
Si\u0119 potykam cz\u0119sto
Dlaczego wci\u0105\u017c musz\u0119 sta\u0107
Si\u0119 samodzielna
Znowu czego\u015b pragn\u0119
Czasem x3
Nie chc\u0119 tego przerwa\u0107

Mo\u017cesz mi pom\u00f3c
Je\u015bli tego chcesz
Radz\u0119 ci z presj\u0105
Przesta\u0107 stale si\u0119
Zaprzyja\u017ania\u0107

To koniec

Ref.

Prosz\u0119 odezwij si\u0119
je\u015bli uratujesz mnie`,
    streamingLinks: {},
    downloadUrl: "https://drive.google.com/file/d/1AhHyRbs_-AqYty-BrPN3JaW-TqWX3IUC/view?usp=sharing",
  },
];

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find((song) => song.slug === slug);
}

export function getAllSongSlugs(): string[] {
  return songs.map((song) => song.slug);
}
