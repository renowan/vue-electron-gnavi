<template>

  <div>

    <div class="container-fluid">
      <div class="row mv8">
        <div class="col-xs-12">
          <h4><span class="pe-7s-notebook"></span> ブックマーク</h4>
        </div>
      </div>
    </div>

    <splash :active="true" type="block" v-if="isPageLoading"></splash>

    <div class="content pn clearfix" v-else>

    <div class="float-block">

      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12">
            <table class="table">
              <thead>
                <tr>
                  <td>店名</td>
                  <td>住所</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in shopDataList">
                  <td><a href="javascript:void(0)" class="detail-link" @click="goDetail(item)">{{item.name}}</a></td>
                  <td>{{item.address}}</td>
                  <td class="text-right" width="80">
                    <a href="javascript:void(0)" class="mr8" @click="deleteBookMark(item)"><i class="fa fa-times"></i> 削除</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div class="row">
          <div class="col-xs-12 text-right">

            <span class="mr8">{{paginationTxt}}</span>

            <button type="button" class="btn btn-default" @click="prev">
              <i class="fa fa-angle-left"></i>
            </button>
            <button type="button" class="btn btn-default" @click="next">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import shopDetail from '../../components/ShopDetail'
import resultList from './ResultList'
import splash from '../../components/Splash'

export default {
  name: 'book-mark-list-view',
  components: {
    shopDetail,
    resultList,
    splash
  },
  computed: Object.assign({},
    mapGetters({
      app: 'app',
      isPageLoading: 'isPageLoading',
      bmk: 'bmk/bmk',
      shopDataList: 'bmk/shopDataList'
    }),
    {
      paginationTxt () {
        const {currentPage, hit_per_page, registrValue} = this.bmk
        const max = Math.ceil(registrValue / hit_per_page)
        return `${currentPage} / ${max}`
      }
    }
  ),
  props: {

  },
  data () {
    return {
      id: null,
      data: null
    }
  },
  created () {
    // this.data = this.searchResult[0]
  },
  methods: {
    prev () {
      const page = this.bmk.currentPage - 1
      this.updateCurrentPage(page)
    },
    next () {
      const page = this.bmk.currentPage + 1
      this.updateCurrentPage(page)
    },
    updateCurrentPage (currentPage) {
      const {hit_per_page, registrValue} = this.bmk
      const max = Math.ceil(registrValue / hit_per_page)
      if (currentPage > 0 && currentPage <= max) {
        this.$store.commit('bmk/UPDATE_CURRENT_PAGE', currentPage)
        this.$store.dispatch('bmk/loadShopData')
      }
    },
    deleteBookMark (data) {
      // console.log(data)
      this.$store.dispatch('bmk/delete', data.id)
      this.$store.dispatch('bmk/loadShopData')
    },
    goDetail (data) {
      this.$store.dispatch('bmk/onChangeDetailIndex', data.id)
      this.$router.push(`/bookmark/detail/${data.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
a.detail-link {
  text-decoration: underline;
}
</style>
