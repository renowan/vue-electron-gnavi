<template>
  <div>

    <div class="container-fluid">

      <div class="row">
        <div class="col-xs-12 text-center mv24">
          <h2>Gnavi API レストラン検索</h2>
        </div>
      </div>

      <div class="row">

        <div class="col-md-5 col-xs-6 col-md-offset-1">
          <area-panel @selected="selectArea" :list="garea_small"></area-panel>
        </div>

        <div class="col-md-5 col-xs-6">
          <category-panel @selected="selectCategory" :list="category_s"></category-panel>
        </div>

        <div class="col-md-10 col-xs-12 col-md-offset-1 text-center mb32">
          <button type="button" class="btn btn-default btn-lg btn-block" :disabled="searchBtnDisabled" @click="search">
            検索
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import areaPanel from './AreaPanel.vue'
import categoryPanel from './CategoryPanel.vue'

export default {
  name: 'top-view',
  components: {
    areaPanel,
    categoryPanel
  },
  computed: Object.assign({},
    mapGetters({
      app: 'app',
      searchResult: 'searchResult',
    }),
    {
      garea_small () {
        return this.$store.state.app.garea_small
      },
      category_s () {
        return this.$store.state.app.category_s
      },
      searchOpt () {
        return this.$store.state.app.searchOpt
      },
      searchBtnDisabled () {
        return this.$store.state.app.searchBtnDisabled
      }
    }
  ),
  data () {
    return {
      // garea_small: [
      //   {areaname_s: 'areaname_s1', areacode_s: 'areacode_s1'}
      // ]
    }
  },
  created () {

  },
  methods: {
    selectArea (obj) {
      this.$store.commit('APP_UPDATE_SEARCH_OPT', {
        area: obj
      })
    },
    selectCategory (obj) {
      this.$store.commit('APP_UPDATE_SEARCH_OPT', {
        category: obj
      })
    },
    search () {
      const offset = 1
      const hit_per_page = this.app.hit_per_page
      const category_s_code = this.searchOpt.category.category_s_code
      const areacode_s = this.searchOpt.area.areacode_s
      this.$store.commit('APP_UPDATE_CURRENT_PAGE', offset)
      this.$store.commit('APP_SEARCH_REQUEST', {
        searchParams: {
          offset,
          hit_per_page,
          category_s: category_s_code,
          areacode_s
        },
        success: 'APP_SEARCH_SUCCESS'
      })
      this.$router.push('/result')
    }
  }
}
</script>

<style>

</style>
