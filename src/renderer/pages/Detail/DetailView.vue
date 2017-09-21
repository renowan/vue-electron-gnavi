<template>
  <div>

    <!-- <list-navi
    :detail-index="2"
    :length="6">
    </list-navi> -->

    <list-navi
    :detail-index="app.detailIndex"
    :length="searchResult.length"
    @on-click-dot="onClickDot">
    </list-navi>

    <shop-detail
    v-if="data"
    :data="data"
    @on-change-book-mark="onChangeBookMark"
    :id-list="idList">
    </shop-detail>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import shopDetail from '../../components/ShopDetail'
import listNavi from '../../components/ListNavi'
import splash from '../../components/Splash'

export default {
  name: 'detail-view',
  components: {
    shopDetail,
    listNavi,
    splash
  },
  computed: Object.assign({},
    mapGetters({
      app: 'app',
      searchResult: 'searchResult',
      idList: 'bmk/idList',
    }),
    {
      data () {
        const searchResult = this.searchResult
        const detailIndex = this.app.detailIndex
        return searchResult[detailIndex]
      }
    }
  ),
  data () {
    return {
      id: null,
      // data: null
    }
  },
  created () {
    window.scrollTo(0, 0)
    this.id = this.$route.params.id
    // const searchResult = this.searchResult
    // const detailIndex = this.app.detailIndex
    // this.data = searchResult[detailIndex]
  },
  methods: {
    onClickDot (index) {
      this.$store.commit('APP_UPDATE_DETAIL_INDEX', index)
    },
    onChangeBookMark (val) {
      if (val.value) {
        this.$store.dispatch('bmk/add', val.id)
      } else {
        this.$store.dispatch('bmk/delete', val.id)
      }
    }
  }
}
</script>

<style scope>

</style>
