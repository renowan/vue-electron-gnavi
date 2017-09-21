import mutations from './mutations'
import actions from './actions'

// localStorageから取り出す
const localStorageIdList = JSON.parse(localStorage.getItem('idList')) || {}
let registrValue = 0
for (var id in localStorageIdList) {
  if (localStorageIdList.hasOwnProperty(id)) {
    registrValue ++
  }
}

const state = {
  // データ実態リスト
  shopDataList: [],
  // Cache
  cacheData: {

  },
  currentPage: 1,
  // 1ページ表示件数
  hit_per_page: 10,
  // 登録IDリスト
  idList: localStorageIdList,
  registrValue,

  detailIndex: 0
}



const getters = {
  bmk: state => state,
  idList: state => state.idList,
  currentPage: state => state.currentPage,
  shopDataList: state => state.shopDataList,
  registrValue: state => state.registrValue,
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
