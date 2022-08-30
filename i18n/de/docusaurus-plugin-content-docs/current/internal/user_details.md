---
title: Nutzer-details
sidebar_position: 2
---

### Nutzer-details
| Detail | Minimallänge | Maximallänge | Textvalidierung | Besonderheiten |
| --- | --- | --- | --- | --- |
| ID | 3 | 12 | A-Z <br/> a-z <br/> 0-9 <br/> _ | - |
| Displayname | 3 | 12 | A-Z <br/> a-z <br/> 0-9 <br/> _ | - |
| Nutzername | 3 | 12 | a-z <br/> 0-9 <br/> _ | Derselbe Text wie der Displayname aber in Kleinbuchstaben! |
| eMail-Adresse | - | - | Valide Email Adressse | Eine eMail-Adresse kann nur 3x genutzt werden! |
| Passwort | 8 | 255 | A-Z <br/> a-z <br/> 0-9 <br/> !"§$%&/()=?+*~#' | - |
| Salt | 32 | 32 | a-z <br/> 0-9 | - |
| Telefonnummer | 8 | 20 | A-Z <br/> a-z <br/> 0-9 <br/> !"§$%&/()=?+*~#' | Muss mit + starten |