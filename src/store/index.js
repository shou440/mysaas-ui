import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import area from './modules/area'
import room from './modules/room'
import meter from './modules/meter'
import wmeter from './modules/wmeter'
import setting from './modules/setting'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    user,
    setting,
    area,
    room,
    meter,
    wmeter
  },
  getters
})

export default store
