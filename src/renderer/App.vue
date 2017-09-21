<template>
  <div id="app" class="fixed-navbar fixed-sidebar">

    <!-- 全体ローディング -->
    <template v-if="isAppLoading">
      <splash :active="isAppLoading"></splash>
    </template>

    <!-- アプリ -->
    <template>
      <global-header :registr-value="registrValue"></global-header>

      <template>
        <router-view id="router-view" v-if="!isAppLoading" :class="routerViewCls"></router-view>
        <!-- <Links></Links> -->
      </template>

    </template>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import globalHeader from './components/GlobalHeader'
import Splash from './components/Splash'

export default {
  components: {
    globalHeader,
    Splash,
  },
  computed: Object.assign({},
    mapGetters({
      app: 'app',
      registrValue: 'bmk/registrValue'
    }),
    {
      isAppLoading () {
        return this.app.isAppLoading
      },
      isPageLoading () {
        return this.app.isPageLoading
      },
      routerViewCls () {
        let className = ''
        let routerName = this.$route.name
        switch (routerName) {
          case 'detail-view':
          case 'book-mark-detail-view':
            className = 'router-view-padding'
            break
          // default:
        }
        return className
      }
    },
  ),
  data () {
    return {
    }
  },
  created () {
    this.$store.commit('APP_LOAD_REQUEST')
  },
}
</script>

<style src="../../static/css/bootstrap.min.css"></style>
<style src="../../static/css/font-awesome.min.css"></style>
<style src="../../static/css/pe-icon-7-stroke-helper.css"></style>
<style src="../../static/css/pe-icon-7-stroke.css"></style>

<style src="../../static/css/helpers.scss"></style>
<style src="../../static/css/style.css"></style>

<style lang="scss">
body {
  background-color: #f1f3f6;
  font-family: 'メイリオ','Meiryo','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ Pro W3','Hiragino Kaku Gothic Pro','ＭＳ Ｐゴシック',Osaka,Helvetica,Arial,sans-serif;
}

#app {
  height: 100%;
}

.fixed-navbar #wrapper {
  top: 56px;
}

#wrapper {
  margin: 0;
  min-height: 500px;
}

#router-view {
  top: 56px;
  margin: 0;
  padding: 0;
  border-left: 1px solid #e4e5e7;
  // transition: all 0.4s ease 0s;
  position: relative;
  // min-height: 500px;
  &.router-view-padding {
    padding-top: 56px;
  }

}



.xx {
  height: 100px;
}
</style>
