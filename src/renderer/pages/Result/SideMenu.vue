<template>
  <div id="side-menu-2">
    <div id="navigation" class="p16">


      <div class="mb4">
        <small>エリア選択</small>
      </div>

      <div class="btn-group btn-group-justified mb16">
        <v-select v-model="areacode_s"
        placeholder="エリア" search justified
        :options="app.garea_small"
        options-label="areaname_s"
        options-value="areacode_s">
      </v-select>
      </div>

      <div class="mb4">
        <small>業種</small>
      </div>

      <div class="btn-group btn-group-justified mb16">
        <v-select v-model="category_s"
        placeholder="業種" search justified
        :options="app.category_s"
        options-label="category_s_name"
        options-value="category_s_code">
        </v-select>
      </div>

      <div class="mb4">
        <small>検索キーワード</small>
      </div>
      <input type="text" class="form-control mb16" placeholder="キーワード" v-model="keyWord">

      <button type="button" class="btn btn-default btn-block btn-sm mb8" @click="reset">
        リセット
      </button>

      <button type="button" class="btn btn-primary btn-block btn-sm" :disabled="app.searchBtnDisabled" @click="search">
        検索
      </button>
      <!-- <button type="button" class="btn btn-primary btn-block btn-sm" @click="searchExeDmmy">
        検索Dmy
      </button> -->

      <hr>

      <small>検索結果: {{total_hit_count}}件</small>
      <nav aria-label="Page navigation">
        <ul class="pagination mt4">
          <li>
            <a href="javascript:void(0)" aria-label="Previous" @click="upateCurrentPage(-1)">
              <i class="fa fa-angle-left"></i>
            </a>
          </li>
          <li><a href="javascript:void(0)" class="pagination-display">{{pageSection}}</a></li>

          <li>
            <a href="javascript:void(0)" aria-label="Next" @click="upateCurrentPage(1)">
              <i class="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>

      <small>表示形式</small>
      <div>
        <div class="btn-group btn-group-justified mt4" role="group" aria-label="...">
          <div class="btn-group" role="group">
            <button type="button" :class="largeBtnCls" @click="changeListMode(0)"><i class="fa fa-th-large"></i></button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" :class="smallBtnCls" @click="changeListMode(1)"><i class="fa fa-list-ul"></i></button>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vSelect from 'vue-strap/src/Select'

export default {
  name: 'side-menu',
  components: {
    vSelect
  },
  computed: Object.assign({},
    mapGetters({
      app: 'app',
      searchResult: 'searchResult',
      total_hit_count: 'total_hit_count',
      searchOpt: 'searchOpt',
    }),
    {
      isBlockLoading () {
        return this.app.isBlockLoading
      },
      isPageLoading () {
        return this.app.isPageLoading
      },
      largeBtnCls () {
        return this.app.listMode === 0 ? 'btn btn-primary btn-sm' : 'btn btn-default btn-sm'
      },
      smallBtnCls () {
        return this.app.listMode === 1 ? 'btn btn-primary btn-sm' : 'btn btn-default btn-sm'
      },
      keyWord: {
        get () {
          return this.app.searchOpt.keyWord
        },
        set (val) {
          this.$store.commit('APP_UPDATE_SEARCH_OPT', {keyWord: val})
        }
      },
      pageSection () {
        const {currentPage, hit_per_page, total_hit_count} = this.app
        if (total_hit_count === 0) return '0'
        const a = (currentPage - 1) * hit_per_page + 1
        let b = a + hit_per_page - 1
        if (b > total_hit_count) {
          b = total_hit_count
        }
        return `${a} ~ ${b}`
      },
      areacode_s: {
        get () {
          const area =  this.app.searchOpt.area
          if (!area) return null
          return area.areacode_s
        },
        set (val) {
          let obj = {}
          this.app.garea_small.forEach(elm => {
            if (elm.areacode_s === val) {
              obj = elm
            }
          })
          this.$store.commit('APP_UPDATE_SEARCH_OPT', {area: obj})
        }
      },
      category_s: {
        get () {
          const category =  this.app.searchOpt.category
          if (!category) return null
          console.log('category.category_s_code', category.category_s_code)
          return category.category_s_code
        },
        set (val) {
          let obj = {}
          this.app.category_s.forEach(elm => {
            if (elm.category_s_code === val) {
              obj = elm
            }
          })
          this.$store.commit('APP_UPDATE_SEARCH_OPT', {category: obj})
        }
      }
    },
  ),
  created () {

  },
  methods: {
    changeListMode (val) {
      this.$store.commit('APP_UPDATE_LIST_MODE', val)
    },
    search () {
      if (this.isPageLoading) return
      this.$store.commit('APP_UPDATE_CURRENT_PAGE', 1)
      this.searchExe()
    },
    upateCurrentPage (val) {
      if (this.isPageLoading) return
      const {currentPage, hit_per_page, total_hit_count} = this.app
      const max = Math.ceil(total_hit_count / hit_per_page)
      let _currentPage = this.app.currentPage
      _currentPage = currentPage + val

      // 条件外、処理しない
      if (_currentPage < 1) return
      if (_currentPage > max) return
      this.$store.commit('APP_UPDATE_CURRENT_PAGE', _currentPage)
      this.searchExe()
    },
    searchExe () {
      const {hit_per_page, currentPage} = this.app
      const searchOpt = this.searchOpt
      // const category_s_code = this.searchOpt.category.category_s_code
      // const areacode_s = this.searchOpt.area.areacode_s

      let searchParams = {
        hit_per_page,
        offset: (currentPage - 1) * hit_per_page + 1,
      }

      if (searchOpt.category) {
        searchParams.category_s = searchOpt.category.category_s_code
      }

      if (searchOpt.area) {
        searchParams.areacode_s = searchOpt.area.areacode_s
      }

      if (searchOpt.keyWord !== '') {
        searchParams.name = searchOpt.keyWord
      }

      this.$store.commit('APP_SEARCH_REQUEST', {
        searchParams,
        success: 'APP_SEARCH_SUCCESS'
      })
    },
    reset () {
      this.$store.commit('APP_UPDATE_SEARCH_OPT', {
        area: null,
        category: null,
        keyWord: ''
      })
    }
    // searchExeDmmy () {
    //   const {hit_per_page, offset} = this.app
    //   const category_s_code = 'xxx'
    //   const areacode_s = 'xxx'
    //   this.$store.commit('APP_SEARCH_REQUEST', {
    //     searchParams: {
    //       hit_per_page,
    //       offset,
    //       category_s: category_s_code,
    //       areacode_s
    //     },
    //     success: 'APP_SEARCH_SUCCESS'
    //   })
    // }
  }
}
</script>

<style lang="scss">
#side-menu-2 {
  width: 180px;
  bottom: 0;
  float: left;
  left: 0;
  position: absolute;
  top: 56px;
  transition: all 0.4s ease 0s;
  position: fixed;
  // overflow-x: hidden;
  // overflow-y: hidden;
  border-right: 1px solid #e4e5e7;
  background-color: #f7f9fa;
  z-index: 999;

  .dropdown-menu {
    width: 400px;
    height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 9999;
  }

  .pagination-display {
    // width: 68px;
    padding-left: 0;
    padding-right: 0;
  }

  .pagination {
    .pagination-display {
      width: 86px;
      text-align: center;
    }
  }
}





// .area-list {
//   height: 140px;
//   overflow-y: scroll;
//   overflow-x: hidden;
//   background-color: #fff;
//   border-top: 1px solid #e4e5e7;
//   border-bottom: 1px solid #e4e5e7;
//
//   -webkit-user-select: none !important;
//   -moz-user-select: none !important;
//   -ms-user-select: none !important;
//   user-select: none !important;
//
//   ul {
//     padding: 0;
//   }
//   li {
//     list-style: none;
//     padding: 4px 10px;
//     font-size: 11px;
//     font-weight: 400;
//     color: #949494;
//   }
// }
</style>
