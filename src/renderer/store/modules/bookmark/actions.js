import axios from 'axios'
import * as types from './mutationsTypes'
import {cloneDeep} from 'lodash'

export default {
  add ({ commit, state }, id) {
    const idList = cloneDeep(state.idList)
    idList[id] = {data: null}
    commit(types.UPDATE_IDLIST, idList)
  },
  delete ({ commit, state }, id) {
    const idList = cloneDeep(state.idList)
    delete idList[id]
    commit(types.UPDATE_IDLIST, idList)
  },
  // updateCurrentPage ({ commit, state }, currentPage) {
  //   const {hit_per_page, registrValue} = state
  //   // ページ送りの上限
  //   const max = Math.ceil(registrValue / hit_per_page)
  //   if (currentPage > 0 && currentPage <= max) {
  //     commit(types.UPDATE_CURRENT_PAGE, currentPage)
  //   }
  // },
  loadShopData ({ commit, state, rootState }) {
    const {hit_per_page, currentPage} = state
    const startPoint = (currentPage - 1) * hit_per_page
    const endPoint = startPoint + hit_per_page - 1

    let idStr = ''
    let idList = cloneDeep(state.idList)
    let counter = 0
    for (var id in idList) {
      if (idList.hasOwnProperty(id)) {
        if (counter >= startPoint && counter <= endPoint) {
          idStr += id + ','
        }
        counter ++
      }
    }

    idStr = idStr.slice(0, idStr.length - 1)

    commit('APP_SEARCH_REQUEST', {
      searchParams: {
        // hit_per_page,
        offset: 1,
        id: idStr
      },
      namespaced: 'bmk',
      success: 'SEARCH_SUCCESS'
    }, {root: true})
  },
  onChangeDetailIndex ({commit, state}, id) {
    const shopDataList = state.shopDataList
    let newIndex = 0
    shopDataList.forEach((elm, index) => {
      if (id === elm.id) {
        newIndex = index
      }
    })
    commit(types.UPDATE_DETAIL_INDEX, newIndex)
  }
}
