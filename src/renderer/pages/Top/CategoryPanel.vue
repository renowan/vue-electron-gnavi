<template>

  <div class="hpanel panel-group">
    <div class="panel-body" :class="{'is-select': isSelect}">
      <div class="text-center text-muted font-bold">業種検索 - {{selected.category_s_name || '未選択'}}</div>
    </div>

    <div class="panel-section">

        <div class="input-group">
          <input type="text" class="form-control" placeholder="エリア検索" v-model="searchWord">
           <span class="input-group-btn">
                <button class="btn btn-default" type="button"><i class="fa fa-search"></i> </button>
           </span>
        </div>

    </div>

    <div class="collapse in scroll-body" aria-expanded="true" style="">

      <div class="panel-body note-link" v-for="item in areaList" :class="{active: item.category_s_code === selected.category_s_code}" @click="select(item)">
        <a href="#note1" data-toggle="tab">
        <!-- <div class="small">
          {{item.garea_large.areaname_l}} > {{item.garea_middle.areaname_m}}
        </div> -->
            <h5 class="mt6 mbn">{{item.category_s_name}}</h5>
        </a>
      </div>

    </div>

</div>

</template>

<script>
export default {
  name: 'CategoryPanel',
  props: {
    list: {type: Array, default: []}
  },
  computed: {
    areaList () {
      const searchWord = this.searchWord
      const gareaSmall = this.list
      if (searchWord === '') {
        return gareaSmall
      } else {
        let _list = []
        gareaSmall.forEach((elm, index) => {
          if (elm.category_s_name.indexOf(searchWord) > -1) {
            _list.push(elm)
          }
        })
        return _list
      }
    },
    isSelect () {
      return this.selected.category_s_name !== ''
    }
  },
  data () {
    return {
      searchWord: '',
      selected: {
        category_s_name: '',
        category_s_code: ''
      }
    }
  },
  methods: {
    select: function (e) {
      // let category_s_name = e.category_s_name
      // let category_s_code = e.category_s_code
      this.selected = e
      this.$emit('selected', e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.scroll-body {
  position: relative;
  height: 300px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  border-left: 1px solid #e4e5e7;
  border-right: 1px solid #e4e5e7;
  border-bottom: 1px solid #e4e5e7;
  background-color: #f7f9fa;

  .active {
    background-color: #f7f9fa;
  }
}

.hpanel {

  .is-select {
    background-color: #dcffcc;
  }

  .scroll-body{
    .panel-body {
      border-left: 0;
      border-right: 0;
      padding: 15px 20px 17px;
    }
    .panel-body:first-child {
      border-top: 0;
    }
    .panel-body:last-child {
      border-bottom: 0;
    }
  }
}
</style>
