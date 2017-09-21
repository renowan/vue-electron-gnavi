import mutations from './mutations'
import actions from './actions'

const state = {
  isDebug: true,

  // app
  isAppLoading: true,
  isPageLoading: false,
  isBlockLoading: false,

  // search
  garea_small: null,
  areaOption: [], // select用 いらない？
  category_s: null,
  searchOpt: {
    category: null,
    area: null,
    keyWord: ''
  },
  currentPage: 1,
  hit_per_page: 10,
  offset: 0, //request用、開始位置
  searchBtnDisabled: true,

  // result
  searchResult: [],
  total_hit_count: 0,
  listMode: 0, // 0 = Large, 1 = small
  detailIndex: 0 // 何番目の詳細か
}

const getters = {
  app: state => state,
  isPageLoading: state => state.isPageLoading,
  searchOpt: state => state.searchOpt,
  searchResult: state => state.searchResult,
  total_hit_count: state => state.total_hit_count,
}

export default {
  state,
  getters,
  actions,
  mutations
}
