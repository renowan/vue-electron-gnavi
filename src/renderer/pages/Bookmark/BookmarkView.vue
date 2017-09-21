<template>
  <div>

    <div id="content-wrapper wide">

      <!-- <div class="container-fluid">
        <div class="row mv8">
          <div class="col-xs-12">
            <h3><span class="pe-7s-notebook"></span> Book Mark</h3>
          </div>
        </div>
      </div> -->




      <router-view></router-view>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import splash from '../../components/Splash'
import listNavi from '../../components/ListNavi'

export default {
  name: 'book-mark-view',
  components: {
    splash,
    listNavi
  },
  computed: Object.assign({},
    mapGetters({
      app: 'app',
      isPageLoading: 'isPageLoading',
      shopDataList: 'bmk/shopDataList',
      registrValue: 'bmk/registrValue',
    }),
    {

    }
  ),
  data () {
    return {
      isBlockLoading: true
    }
  },
  created () {
    const {shopDataList, registrValue} = this
    if (registrValue > 0) {
      this.$store.commit('bmk/UPDATE_CURRENT_PAGE', 1)
      this.$store.dispatch('bmk/loadShopData')
    }
  },
  methods: {
    test1 () {
      this.$store.commit('APP_UPDATE_IS_APP_LOADING', true)
    },
    load () {
      this.$store.dispatch('bmk/loadShopData')
    },
    onClickDot () {

    }
  }
}
</script>

<style lang="scss" scoped>
.bookmark-tool-bar {
  padding: 12px 26px;
  background-color: #eaeaea;
  border-bottom: 1px solid #e4e5e7;
}


#content-wrapper {
  &.wide {
    margin: 0;
  }
}

</style>
