
export const MIN_LOADING_ANIMATION_MS = 600
export const DEFAULT_AJAX_TIMEOUT_MS = 10000

// ドメイン
export const DOMAIN = process.env.NODE_ENV === 'development' ? '' : 'http://api.gnavi.co.jp'
// dev mode
const IS_DEVMODE = process.env.NODE_ENV === 'development'
export const KEY_ID = 'Your API Key'
export const IS_USE_STATIC_JSON = false
export const params = {
  keyid: KEY_ID,
  format: 'json'
}
export const getAPIURL = (apiName, isDebug) => {
  const endPoint = {
    GAreaSmallSearchAPI: {
      prod: '/master/GAreaSmallSearchAPI/20150630',
      debug: '/static/json/garea_small.json'
    },
    categorySmallAPIUrl: {
      prod: '/master/CategorySmallSearchAPI/20150630',
      debug: '/static/json/category_small.json'
    },
    RestSearchAPI: {
      prod: '/RestSearchAPI/20150630/',
      debug: '/static/json/dmmyRest.json'
    }
  }
  let key = 'prod'
  if (IS_DEVMODE && isDebug) key = 'debug'

  return DOMAIN + endPoint[apiName][key]
}
