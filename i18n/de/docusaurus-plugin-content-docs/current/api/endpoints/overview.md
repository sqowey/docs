---
sidebar_position: 1
title: Übersicht
description: Übersicht über die Endpunkte
---

# Endpunkte - Übersicht

| Endpunkt | Methode | Tokens/Anfrage | Berechtigung | Authentifizierung | Beispiel |
| --- | --- | --- | --- | --- | --- |
| AUTH | POST | 100 | - | APP-SECRET und APP-ID | Get Authentication Token |
| USERS  | GET | 2 | - | AUTH-Token | Name eines Nutzers bekommen |
| USERS | PATCH | 5 | 1 mal pro 6 Monate | AUTH-Token | Status eines Nutzers setzen |
| STATISTICS | GET | 2 | - | AUTH-Token | Die Anzahl an registrierten Nutzern bekommen |
| SERVERS | GET | 5 | 1-Mal für immer | AUTH-Token | Name eines Servers bekommen |
| SERVERS | PATCH | 10 | 1 mal pro 6 Monate | AUTH-Token | Server berechtigungen einstellen |
| CLIENT | GET | 10 | - | AUTH-Token | Name der genutzen APP bekommen |
| CLIENT | POST | 10 | - | AUTH-Token | App Ausloggen |
| CLIENT | PATCH | 5 | - | AUTH-Token | Status der App setzen |
| CLIENT | DELETE | 1.000 | - | AUTH-Token ODER APP-SECRET und APP-ID | Notfall-Zurücksetzung der APP |
| MESSAGES | GET | 2 | - | AUTH-Token | Information über eine Nachricht bekommen |
| MESSAGES | POST | 3 | - | AUTH-Token | Eine Nachricht senden |
| MESSAGES | PATCH | 5 | - | AUTH-Token | Eine Nachricht bearbeiten |
| MESSAGES | DELETE | 5 | - | AUTH-Token | Eine Nachricht löschen |
| APPLICATIONS | GET | 25 | - | Entwickler-Secret | Informationen über eine Applikation bekommen |
| APPLICATIONS | POST | - | - | Entwickler-Secret | Eine neue Applikation erstellen |
| APPLICATIONS | PATCH | 50 | - | Entwickler-Secret | Eine Applikation umbenennen |
| APPLICATIONS | DELETE | - | - | Entwickler-Secret | Eine Applikation löschen |

:::note Unterschied zwischen /CLIENT/ und /APPLICATIONS/
Der /APPLICATIONS/-Endpunkt ist mit dem Entwickler-Token authentifiziert und wird von außerhalb der Applikation aufgerufen. 

Der /CLIENT/-Endpinkt soll von innerhalb der Applikation aufgerufen werden und liefert somit mehr sofort-aktionen (z.B. den Status) und wird mit dem AUTH-Token authentifiziert.
:::
