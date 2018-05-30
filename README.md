# 104 首頁 POC 整招版 - F2E

[![Build Status](https://travis-ci.com/eden90267/104jb-c-ipoc-ceta-f2e.svg?branch=master)](https://travis-ci.com/eden90267/104jb-c-ipoc-ceta-f2e)
[![Coverage Status](https://coveralls.io/repos/github/eden90267/104jb-c-ipoc-ceta-f2e/badge.svg?branch=test_jonathan)](https://coveralls.io/github/eden90267/104jb-c-ipoc-ceta-f2e?branch=test_jonathan)

## 目錄

- [技術架構](#技術架構)
- [專案結構](#專案結構)
- [系統需求](#系統需求)
- [安裝](#安裝)
- [執行](#執行)
- [測試](#測試)
- [建置並打包](#建置並打包)
- [參考資料](#參考資料)

## 技術架構

- EJS
- Sass
- ES6
- Gulp
- Browser-sync
- json-server
- Bootstrap 4
- jQuery 3
- mocha
- power-assert

## 專案結構

```
104jb-c-ipoc-ceta-f2e
├── src
│   ├── img
│   ├── js
│   │    ├── mixins
│   │    │    └── *.js
│   │    ├── pages
│   │    │    ├── higher.js
│   │    │    └── index.js
│   │    └── utilities
│   │    │    └── *.js
│   ├── pages
│   │    ├── components
│   │    │    └── **
│   │    │         ├── *.ejs
│   │    │         ├── *.scss
│   │    │         └── *.js
│   │    ├── layout
│   │    │    ├── footer
│   │    │    │    ├── *.ejs
│   │    │    │    ├── *.scss
│   │    │    │    └── *.js
│   │    │    └── header
│   │    │         ├── *.ejs
│   │    │         ├── *.scss
│   │    │         └── *.js
│   │    ├── preview
│   │    │    ├── layout
│   │    │    │    └── *.ejs
│   │    │    └── *.ejs
│   │    ├── higher.ejs
│   │    └── index.ejs
│   └── sass
│        ├── base
│        │    ├── _mixin.scss
│        │    └── _typography.scss
│        ├── lib
│        │    └── bootstrap
│        │          └── *.scss
│        ├── pages
│        │    ├── higher.scss
│        │    └── index.scss
│        └── all.scss
├── test
│   └── js
│        └── **
│            └── *.test.js
├── .gitignore
├── data.json
├── gulpfile.js
├── package.json
├── package-lock.json
└── README.md
```

## 系統需求

- node 8
- npm 5 (or yarn 1)

## 安裝

```shell
$ npm install gulp -g
$ npm install
```

## 執行

```shell
$ npm start
```

## 測試

### 單元測試 (Unit Test)

```shell
$ npm test
```

### 單元測試涵蓋率 (Unit Test Coverage)

```shell
$ npm run cov
```

## 建置並打包

```shell
$ npm run build
```

## 參考資料

- [Bootstrap 4 一個實際案例探討](https://eden-liu.com/frontend/bootstrap-4-one-sample/)