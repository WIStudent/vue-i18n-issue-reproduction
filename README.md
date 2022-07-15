# vue-i18n-issue-reproduction

Minimal vue project to reproduce https://github.com/kazupon/vue-i18n/issues/1522

## Steps to reproduce
1. Install dependencies: `npm ci`
2. Start vue dev server: `npm run serve`
3. Open http://localhost:8080 in a browser

You should now see a blank page. The browser console should contain the following error:
```
Uncaught TypeError: Cannot read properties of undefined (reading 'config')
    at VueI18n._initVM (vue-i18n.esm.js?a4e8:1353:1)
    at new VueI18n (vue-i18n.esm.js?a4e8:1292:1)
    at createI18n (index.mjs?7d40:6:1)
    at eval (main.ts?5e60:7:1)
    at ./src/main.ts (app.js:197:1)
    at __webpack_require__ (app.js:257:33)
    at app.js:1379:109
    at __webpack_require__.O (app.js:303:23)
    at app.js:1380:53
    at app.js:1382:12
```
