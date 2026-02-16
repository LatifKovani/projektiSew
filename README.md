# Punësohu

**Punësohu** është një uebaplikacion që ka për qëllim të lehtësojë dhe optimizojë procesin e punësimit ndërmjet punëdhënësve dhe punëkërkuesve. Platforma fokusohet në filtrimin paraprak të aplikantëve bazuar në aftësitë primare dhe sekondare, duke siguruar që aplikimet të jenë relevante dhe procesi i përzgjedhjes të jetë më efikas.

---

## Tech Stack
<img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" />



## Qëllimi i Platformës

Qëllimi kryesor i **Punësohu** është:

* Të reduktojë aplikimet jo-relevante.
* Të automatizojë filtrimin e aplikantëve përmes validimit të aftësive.
* Të lehtësojë komunikimin ndërmjet punëdhënësve dhe aplikantëve.
* Të krijojë një proces të strukturuar dhe transparent të punësimit.

---

## Struktura e Aplikacionit

Platforma përbëhet nga dy module kryesore:

### Moduli i Aplikantit

* Regjistrim dhe kyçje
* Verifikim i email-it
* Menaxhim i profilit
* Shtim i aftësive
* Aplikim në shpallje
* Menaxhim i aplikimeve
* Shikimi i statusit të aplikimeve

### Moduli i Punëdhënësit

* Regjistrim dhe kyçje
* Verifikim i email-it
* Menaxhim i profilit të kompanisë
* Publikim i shpalljeve
* Menaxhim i shpalljeve
* Menaxhim i aplikimeve
* Shikim dhe kontaktim i aplikantëve

---

## Regjistrimi dhe Autentikimi

### Regjistrimi

* **Punëdhënësi** regjistrohet me:

  * Emrin e kompanisë
  * Email
  * Fjalëkalim

* **Aplikanti** regjistrohet me:

  * Emër
  * Mbiemër
  * Email
  * Fjalëkalim

Pas regjistrimit:

* Dërgohet një kod verifikimi në email.
* Përdoruesi duhet të verifikojë email-in për të aktivizuar llogarinë.

### Validimi i Fjalëkalimit

* Validimi i fjalëkalimit ndodh gjatë regjistrimit.
* Validimi zbatohet edhe gjatë ndryshimit të fjalëkalimit në konfigurimet e llogarisë.

---

## Shpalljet e Punës

Kur një punëdhënës krijon një shpallje, ai plotëson:

* Pozita e punës
* Paga
* Përshkrimi i punës
* Aftësitë primare
* Aftësitë sekondare

### Sistemi i Aftësive

* Nëse aplikanti nuk posedon aftësitë primare, ai nuk mund të aplikojë.
* Nëse aplikanti nuk posedon aftësitë sekondare, ai mund të aplikojë.

Ky mekanizëm mundëson:

* Filtrim automatik paraprak
* Reduktim të aplikimeve jo të përshtatshme
* Lehtësim të procesit të shqyrtimit

---

## Modifikimi i Shpalljeve

* Punëdhënësi mund të modifikojë ose fshijë shpalljen.
* Nëse ndryshohen aftësitë primare:

  * Dërgohet email njoftues aplikantëve.
  * Nëse aplikanti i posedon aftësitë e reja, aplikimi mbetet aktiv.
  * Nëse nuk i posedon, aplikimi fshihet automatikisht dhe aplikanti njoftohet.

---

## Afati i Shpalljeve

* Çdo shpallje është aktive për 30 ditë.
* Gjatë kësaj periudhe:

  * Punëdhënësi nuk mund të pranojë ose refuzojë aplikime.
* Pas skadimit:

  * Punëdhënësi mund të ndryshojë statusin e aplikimeve.

---

## Statuset e Aplikimit

Aplikimet mund të kenë këto statuse:

* Në Pritje
* Pranuar
* Refuzuar

Aplikanti mund t’i shohë statuset në seksionin "Menaxho Aplikimet".

---

## Kërkimi dhe Filtrimi

Platforma ofron funksionalitet kërkimi për:

* Shpallje pune
* Aplikantë
* Kompani

---

## Menaxhimi i Profilit

### Aplikanti mund të modifikojë:

* Emrin
* Mbiemrin
* Numrin e telefonit
* Lidhjet sociale
* Profesionin
* Aftësitë

### Punëdhënësi mund të modifikojë:

* Emrin e kompanisë
* Numrin e telefonit
* Lidhjet sociale
* Përshkrimin e kompanisë

---

## Njoftimet me Email

Platforma dërgon email për:

* Verifikim të email-it gjatë regjistrimit
* Konfirmim të aplikimit
* Ndryshim të statusit të aplikimit
* Ndryshim të aftësive primare në shpallje
* Fshirje automatike të aplikimit (nëse nuk plotësohen aftësitë primare)

---

## Logjika Kryesore e Platformës

Punësohu implementon një sistem filtrimi ku:

* Aplikantët aplikojnë vetëm në pozita për të cilat janë të përgatitur.
* Punëdhënësit shqyrtojnë vetëm aplikime relevante.
* Procesi i punësimit bëhet më i shpejtë, më efikas dhe më transparent.

---

## Përfundim

**Punësohu** synon të krijojë një ekosistem të strukturuar të punësimit, ku përputhja ndërmjet aftësive dhe kërkesave të tregut të punës është prioritet.

Platforma redukton kohën e përzgjedhjes, rrit cilësinë e aplikimeve dhe përmirëson përvojën e përdoruesve nga të dyja anët e procesit të punësimit.
