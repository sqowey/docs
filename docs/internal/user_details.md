---
title: User details
sidebar_position: 2
---

### User details
| Detail | Minimal length | Maximal length | Allowed string | Specials |
| --- | --- | --- | --- | --- |
| ID | 3 | 12 | A-Z <br/> a-z <br/> 0-9 <br/> _ | - |
| Displayname | 3 | 12 | A-Z <br/> a-z <br/> 0-9 <br/> _ | - |
| Username | 3 | 12 | a-z <br/> 0-9 <br/> _ | The same string as Displayname but lowercase! |
| eMail-Adress | - | - | Email Adress | An eMail-Adress can only be registered 3 Times |
| Password | 8 | 255 | A-Z <br/> a-z <br/> 0-9 <br/> !"§$%&/()=?+*~#' | - |
| Salt | 32 | 32 | a-z <br/> 0-9 | - |
| Phone number | 8 | 20 | A-Z <br/> a-z <br/> 0-9 <br/> !"§$%&/()=?+*~#' | Needs to start with + |