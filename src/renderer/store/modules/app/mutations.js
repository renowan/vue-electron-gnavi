import * as types from './mutationsTypes'

export default {
  [types.APP_UPDATE_IS_APP_LOADING] (state, data) {
    state.isAppLoading = data
  },
  [types.APP_UPDATE_IS_PAGE_LOADING] (state, data) {
    state.isPageLoading = data
  },
  [types.APP_UPDATE_IS_BLOCK_LOADING] (state, data) {
    state.isBlockLoading = data
  },
  [types.APP_LOAD_REQUEST] (state, data) {
    // console.log('APP_LOAD_REQUEST')
  },
  [types.APP_LOAD_SUCCESS] (state, data) {
    state.garea_small = data.garea_small
    state.category_s = data.category_s
  },
  [types.APP_UPDATE_SEARCH_OPT] (state, data) {
    state.searchOpt = Object.assign(state.searchOpt, data)

    let searchBtnDisabled = true
    if (state.searchOpt.area !== null) searchBtnDisabled = false
    if (state.searchOpt.category !== null) searchBtnDisabled = false
    if (state.searchOpt.keyWord !== '') searchBtnDisabled = false
    state.searchBtnDisabled = searchBtnDisabled
    // state.searchBtnDisabled = !(state.searchOpt.area !== null && state.searchOpt.category !== null)
  },
  [types.APP_SEARCH_REQUEST] (state, data) {

  },
  [types.APP_SEARCH_SUCCESS] (state, data) {
    state.searchResult = data.searchResult
    state.total_hit_count = data.total_hit_count
  },
  [types.APP_COMMON_ERROR] (state, data) {
    console.log('APP_COMMON_ERROR', data)
  },
  [types.APP_UPDATE_CURRENT_PAGE] (state, data) {
    state.currentPage = data
  },
  [types.APP_UPDATE_LIST_MODE] (state, data) {
    state.listMode = data
  },
  [types.APP_UPDATE_DETAIL_INDEX] (state, index) {
    state.detailIndex = index
  },
  // [types.APP_UPDATE_KEYWORD] (state, index) {
  //   state.searchOpt. = index
  // }
}
