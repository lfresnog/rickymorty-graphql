# rickymorty-graphql <img src="https://www.nebrija.com/lp/2019/inc/common/assets/img/logo_nebrija.png" height="50px" align="right" />

Ricky & Morty App is a Node.js app for consulting the characters of of the show using the command line.

![GitHub](https://img.shields.io/github/license/JaimeDordio/rickymorty)
![GitHub Release Date](https://img.shields.io/github/release-date/JaimeDordio/rickymorty)
![GitHub last commit](https://img.shields.io/github/last-commit/JaimeDordio/rickymorty)

## 📦 Install

All the necessary packages are in the `package.json` file.

To install them, run this command:

```js
npm install
```



## 🛠 Features

- Consult all characters

```js
npm start -- list --page=<page-number>
```




- Consult alive characters

```javascript
npm start -- list --status="alive"
```




- Consult dead characters

```javascript
npm start -- list --status="dead"
```




- Consult characters by name

```javascript
npm start -- list --search="<name-search>"
```




- Consult character data (ID is used for selecting the character)

```javascript
npm start -- view --id=<character-id>
```



*If page is not specified, program will show the first page.*



## ✔️ Examples

- Consult characters (Page 13)

```js
npm start -- list --page=13
```

###### Output

```console
foo@rickymorty:~$ npm start -- list --page=13

URL: https://rickandmortyapi.com/api/character/?page=13

LISTING ALL CHARACTERS:(Page 13)
ID: 241 -- Name: Mr. Marklovitz
ID: 242 -- Name: Mr. Meeseeks
ID: 243 -- Name: Mr. Needful
ID: 244 -- Name: Mr. Poopybutthole
ID: 245 -- Name: Mrs. Lipkip
ID: 246 -- Name: Mrs. Pancakes
ID: 247 -- Name: Mrs. Poopybutthole
ID: 248 -- Name: Mrs. Refrigerator
ID: 249 -- Name: Mrs. Sanchez
ID: 250 -- Name: Mrs. Sullivan
ID: 251 -- Name: Nancy
ID: 252 -- Name: Noob-Noob
ID: 253 -- Name: Numbericon
ID: 254 -- Name: Octopus Man
ID: 255 -- Name: Orthodox Jew
ID: 256 -- Name: Pat Gueterman
ID: 257 -- Name: Paul Fleishman
ID: 258 -- Name: Pawnshop Clerk
ID: 259 -- Name: Pencilvester
ID: 260 -- Name: Phillip Jacobs
```



- Consult *dead* characters

```javascript
npm start -- list --status="dead"
```

###### Output

```console
foo@rickymorty:~$ npm start -- location --name="Madrid"

URL: https://rickandmortyapi.com/api/character/?status=dead&page=undefined

LISTING DEAD CHARACTERS:
ID: 8 -- Name: Adjudicator Rick
ID: 9 -- Name: Agency Director
ID: 10 -- Name: Alan Rails
ID: 11 -- Name: Albert Einstein
ID: 12 -- Name: Alexander
ID: 16 -- Name: Amish Cyborg
ID: 25 -- Name: Armothy
ID: 31 -- Name: Baby Wizard
ID: 32 -- Name: Bearded Lady
ID: 33 -- Name: Beebo
ID: 40 -- Name: Beth's Mytholog
ID: 43 -- Name: Big Morty
ID: 44 -- Name: Body Guard Morty
ID: 47 -- Name: Birdperson
ID: 52 -- Name: Blue Footprint Guy
ID: 55 -- Name: Boobloosian
ID: 56 -- Name: Bootleg Portal Chemist Rick
ID: 59 -- Name: Brad Anderson
ID: 60 -- Name: Calypso
ID: 61 -- Name: Campaign Manager Morty
```




- Consult one character information

```javascript
npm start -- view --id=66
```

###### Output

```console
foo@rickymorty:~$ npm start -- view --id=66

URL: https://rickandmortyapi.com/api/character/66

SEARCHING CHARACTER WITH ID "66":
Name: Coach Feratu (Balik Alistane)
Status: Dead
Species: Vampire
Gender: Male
Origin: Earth (Replacement Dimension)
Location: Earth (Replacement Dimension)
```



## 📃 Changelog

Every release is documented on the [GitHub Releases page](https://github.com/JaimeDordio/rickymorty/releases).

## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/JaimeDordio/rickymorty/blob/master/LICENSE) file for details

**[⬆ back to top](#features)**
