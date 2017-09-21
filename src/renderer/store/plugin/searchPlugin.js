import axios from 'axios'
import * as constants from '../constants'
import restObjFormater from '../restObjFormater.js'

// axiosの設定
const axiosInstance = axios.create({
  timeout: constants.DEFAULT_AJAX_TIMEOUT_MS,
  headers: {'Content-Type': 'application/json;charset=utf-8'}
})

export default (store) => {

  store.subscribe((mutation) => {
    if (!mutation.type) return

    // ===================================
    // App 必要の情報をロード
    // ===================================
    if (mutation.type === 'APP_SEARCH_REQUEST') {

      const payload = mutation.payload

      // API URL store.state.app.isDebug
      let apiUrl = constants.getAPIURL('RestSearchAPI', false)

      // paramsのベース
      const params = constants.params

      let _params = Object.assign({}, params, payload.searchParams)
      const namespaced = payload.namespaced ? payload.namespaced + '/' : ''
      let successMutationType = namespaced + payload.success
      
      // 結果変数
      let _r

      store.commit('APP_UPDATE_IS_PAGE_LOADING', true)

      axiosInstance.get(apiUrl, {params: _params}).then((response) => {
        const rest = response.data.rest
        const total_hit_count = Number(response.data.total_hit_count)
        const data = response.data
        if (total_hit_count === 1) {
          // 検索結果1件のみ
          _r = [restObjFormater(data.rest)]

          store.commit(successMutationType, {
            total_hit_count,
            searchResult: _r
          })
        } else if (!rest) {
          // 検索結果なし
          _r = []
          store.commit(successMutationType, {
            total_hit_count: 0,
            searchResult: _r
          })
        } else {
          // 検索結果がある
          _r = rest.map((elm) => {
            // restデータをフォーマットする、 {} を '' に変換
            return restObjFormater(elm)
          })

          store.commit(successMutationType, {
            total_hit_count,
            searchResult: _r
          })
        }

        // ローディング終了
        store.commit('APP_UPDATE_IS_PAGE_LOADING', false)

      }).catch((err) => {
        console.log(err)

      })

    }
  })
}
