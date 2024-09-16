# Grandslam Archive
Grandslam Archive is a personal project where a user can fuzzy search for grandslam winners and runners-up by year, name, or tournament.
My friends and I **always always always** end up discussing past grandslam winners at parties. "Who's the GOAT?", "How many grandslams has Federer won again?", "Okay, name an obscure Wimbledon Ladies Champion!". I built this app as an all in one data resource so we could quickly search the answers we require!

## Client
I wanted a framework free, dependency free implementation to the client. I am a big fan of javascript frameworks (Vue specifically) but for small, personal projects there is nothing like building a fully functional app with a good old `index.html`, `index.js` and `style.css` file. Always choose the technology that is right for your project!

I write the client in TypeScript and use the command line to watch for changes.

```bash
tsc index.ts --watch --target ES6
```

## Server
The server is built using object-oriented PHP. A collector class can be executed via the command line by targeting the `serve.php` file in the server directory.

The PHP scrapes the following ESPN resources and writes them to a local `db.json`:

* [Men](https://www.espn.com/tennis/history)
* [Women](https://www.espn.com/tennis/history/_/type/women)

```bash
php server/serve.php
```

## Future Development
I will continue to run the server collection after every grandslam result to keep the database accurate. I will monitor ESPN for markup changes.

## Top Tips
Add the website as a shortcut on phone's home screen to access the client quickly. Otherwise, the client can be viewed at [https://danieldrave.github.io/grandslam-archive/client/](https://danieldrave.github.io/grandslam-archive/client/)

## Acknowledgements
* This is just for fun and not for profit. All data is courtesy of [ESPN](https://www.espn.com/).
* Thanks to Github for Github Pages. What a fantastic resource!
* Thanks to the squad for the inspiration! Long may our tennis debates continue!