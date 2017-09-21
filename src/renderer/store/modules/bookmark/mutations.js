import * as types from './mutationsTypes'

export default {
  [types.UPDATE_IDLIST] (state, idList) {
    state.idList = idList
    let registrValue = 0
    for (var id in idList) {
      if (idList.hasOwnProperty(id)) {
        registrValue ++
      }
    }
    // stateに保存
    state.registrValue = registrValue
    localStorage.setItem('idList', JSON.stringify(idList))
  },
  [types.SEARCH_SUCCESS] (state, data) {
    // let obj = {}
    // data.searchResult.map(elm => {
    //   obj[elm.id] = elm
    // })
    state.shopDataList = data.searchResult

    // state.idList = data
  },
  [types.UPDATE_CURRENT_PAGE] (state, data) {
    state.currentPage = data
  },
  [types.UPDATE_DETAIL_INDEX] (state, index) {
    state.detailIndex = index
  }
}
