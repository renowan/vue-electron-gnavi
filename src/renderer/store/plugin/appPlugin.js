import axios from 'axios'
import * as constants from '../constants'

// axiosの設定
const axiosInstance = axios.create({
  timeout: constants.DEFAULT_AJAX_TIMEOUT_MS,
  headers: {'Content-Type': 'application/json;charset=utf-8'}
})

// ダミーurlを使うか
let params = constants.params

export default (store) => {

  store.subscribe((mutation) => {
    if (!mutation.type) return

    // ===================================
    // App 必要の情報をロード
    // ===================================
    if (mutation.type === 'APP_LOAD_REQUEST') {
      // エリアSマスタAPI
      function getGAreaSmallSearchAPI (url, params) {
        return axiosInstance.get(url, {params})
      }
      // 小業態マスタ取得API
      function getCategorySmallSearchAPI (url, params) {
        return axiosInstance.get(url, {params})
      }
      
      const isDebug = store.state.app.isDebug
      const areaSUrl = constants.getAPIURL('GAreaSmallSearchAPI', isDebug)
      const categorySUrl = constants.getAPIURL('categorySmallAPIUrl', isDebug)

      axios.all([
        getGAreaSmallSearchAPI(areaSUrl, params),
        getCategorySmallSearchAPI(categorySUrl, params)
      ])
      .then(axios.spread(function (
        GAreaSmallSearchAPI,
        CategorySmallSearchAPI
      ) {
        // ロード完了
        const garea_small = GAreaSmallSearchAPI.data.garea_small
        const category_s = CategorySmallSearchAPI.data.category_s

        store.commit('APP_LOAD_SUCCESS', {
          garea_small,
          category_s,
        })

        store.commit('APP_UPDATE_IS_APP_LOADING', false)

      })).catch((e) => {
        console.log('error', e)
      })
    }
  })
}
