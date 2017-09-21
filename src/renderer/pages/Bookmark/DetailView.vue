<template>
  <div class="">

    <list-navi
    :detail-index="bmk.detailIndex"
    :length="shopDataList.length"
    @on-click-dot="onClickDot"
    type="bookmark">
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

export default {
  name: 'book-mark-detail-view',
  components: {
    shopDetail,
    listNavi
  },
  computed: Object.assign({},
    mapGetters({
      app         : 'app',
      bmk         : 'bmk/bmk',
      shopDataList: 'bmk/shopDataList',
      idList      : 'bmk/idList',
    }),
    {
      data () {
        const {shopDataList, detailIndex} = this.bmk
        return shopDataList[detailIndex]
      }
    }
  ),
  props: {

  },
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    onChangeBookMark (val) {
      if (val.value) {
        this.$store.dispatch('bmk/add', val.id)
      } else {
        this.$store.dispatch('bmk/delete', val.id)
      }
    },
    onClickDot (index) {
      this.$store.commit('bmk/UPDATE_DETAIL_INDEX', index)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
