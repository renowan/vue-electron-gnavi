<template>

  <div class="hpanel panel-group">
    <div class="panel-body" :class="{'is-select': isSelect}">
      <div class="text-center text-muted font-bold">エリア検索 - {{selected.areaname_s || '未選択'}}</div>
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

      <div class="panel-body note-link" v-for="item in areaList" :class="{active: item.areacode_s === selected.areacode_s}" @click="select(item)">
        <a href="#note1" data-toggle="tab">
        <div class="small">
          {{item.garea_large.areaname_l}} > {{item.garea_middle.areaname_m}}
        </div>
            <h5 class="mt6 mbn">{{item.areaname_s}}</h5>
        </a>
      </div>

    </div>

</div>

</template>

<script>
export default {
  name: 'AreaPanel',
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
          const areaname_s = elm.areaname_s
          const areaname_m = elm.garea_middle.areaname_m
          const areaname_l = elm.garea_large.areaname_l
          if (areaname_s.indexOf(searchWord) > -1 || areaname_m.indexOf(searchWord) > -1 || areaname_l.indexOf(searchWord) > -1) {
            _list.push(elm)
          }
        })
        return _list
      }
    },
    isSelect () {
      return this.selected.areaname_s !== ''
    }
  },
  data () {
    return {
      searchWord: '',
      selected: {
        areaname_s: '',
        areacode_s: ''
      }
    }
  },
  methods: {
    select: function (e) {
      // let areaname_s = e.areaname_s
      // let areacode_s = e.areacode_s
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
