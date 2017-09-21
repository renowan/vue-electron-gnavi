import axios from 'axios'
import * as types from './mutationsTypes'



export default {
  rsvSearch ({ commit, state, rootState }) {

  },
  onChangeDetailIndex ({commit, state}, id) {
    const searchResult = state.searchResult
    let newIndex = 0
    searchResult.forEach((elm, index) => {
      if (id === elm.id) {
        newIndex = index
      }
    })
    commit('APP_UPDATE_DETAIL_INDEX', newIndex)
  }
}
