# vue-electron-gnavi

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

#### API Key入力
key取得：[ぐるなび API](http://api.gnavi.co.jp/api/)  
取得したkeyをここに入力
/vue-electron-gnavi/src/renderer/store/constants.js  
Line 9  
`export const KEY_ID = 'Your API Key'`


---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
