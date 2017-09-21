import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import bmk from './modules/bookmark'
import appPlugin from './plugin/appPlugin.js'
import searchPlugin from './plugin/searchPlugin.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    bmk
  },
  strict: true,
  plugins: [
    appPlugin,
    searchPlugin
  ]
})
