# Text-Editor-Module-19-Challenge

Progressive Web Applications: Text Editor

## Description

A text editor that can be run online or installed locally and run offline.

Technologies used are Node.js, Express.js, IndexedDB, idb, webpack, babel, concurrently and workbox.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Repository](#repository)

## Installation

To install the repository. first you will need to clone it from GitHub:
```
git clone git@github.com:TalanvorD/Text-Editor-Module-19-Challenge.git
```
Next, you will need to install the required dependencies via node.js, in the root folder:
```
npm install
```
Finally, to build the dist folder and start the server:
```
npm run start
```
At which point you should be able to connect to the server by opening a web browser and navigating to http://localhost:3000/

## Usage

Usage is fairly straightforward. When first opening up the text editor there should be a window displaying a JATE header where text may be entered and an Install button.

Clicking on the install button will ask the user if they wish to install the app locally so it can be used offline if needed.

Entering text into the field will be automatically saved to the indexedDB any time the window loses focus and will persist between sessions.

## License

[MIT License](https://spdx.org/licenses/MIT.html)

## Contributing

IndexedDB [https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) Database for local client storage.

idb [https://www.npmjs.com/package/idb](https://www.npmjs.com/package/idb) IndexedDB wrapper with improved usability.

webpack [https://webpack.js.org/](https://webpack.js.org/) Webpack is used to bundle modules.

babel [https://babeljs.io/](https://babeljs.io/) JavaScript compiler.

concurrently [https://www.npmjs.com/package/concurrently](https://www.npmjs.com/package/concurrently) Run multiple commands in node.js, *concurrently*!

workbox [https://www.npmjs.com/package/workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin) Service worker for caching assests.

express [https://expressjs.com/](https://expressjs.com/) Web framework for Node.js

Node.js [https://nodejs.org/en](https://nodejs.org/en) Runtime enviroment for JavaScript applications

## Tests

Try/catch calling to find errors.

## Questions

For any questions:

Find me on [github](https://github.com/talanvord)!

Send me an [email](mailto://talanvor_divine@yahoo.com)!

## Repository

[https://github.com/TalanvorD/Text-Editor-Module-19-Challenge](https://github.com/TalanvorD/Text-Editor-Module-19-Challenge)

## Screenshot

![screenshot](https://raw.githubusercontent.com/TalanvorD/Text-Editor-Module-19-Challenge/main/screenshot.jpg)
