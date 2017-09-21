<template>
  <div id="side-menu-2">
    <div id="navigation" class="p16">

      <div class="bookmark-list">
        <ul>
          <li>おおごご<br>あぼあｒぼいｈぼはｂ</li>
          <li>おおごご<br>あぼあｒぼいｈぼはｂ</li>
          <li>おおごご<br>あぼあｒぼいｈぼはｂ</li>
        </ul>
      </div>

      <button type="button" class="btn btn-primary btn-block btn-sm">
        検索
      </button>

      <hr>

      <small>検索結果: 999件</small>
      <nav aria-label="Page navigation">
        <ul class="pagination mt6">
          <li>
            <a href="#" aria-label="Previous">
              <i class="fa fa-angle-left"></i>
              <!-- <span aria-hidden="true">&laquo;</span> -->
            </a>
          </li>
          <li><a href="javascript:void(0)" class="pagination-display">111/115</a></li>

          <li>
            <a href="#" aria-label="Next">
              <i class="fa fa-angle-right"></i>
              <!-- <span aria-hidden="true">&raquo;</span> -->
            </a>
          </li>
        </ul>
      </nav>


    </div>
  </div>
</template>

<script>
import vSelect from 'vue-strap/src/Select'

export default {
  name: 'side-menu',
  components: {
    vSelect
  },
  props: {

  },
  data () {
    return {
      selectValue: null,
      options: ['foo', 'bar', 'reno']
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#side-menu-2 {
  width: 180px;
  bottom: 0;
  float: left;
  left: 0;
  position: absolute;
  top: 56px;
  transition: all 0.4s ease 0s;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 180px;
  border-right: 1px solid #e4e5e7;
  background-color: #f7f9fa;
}

.pagination-display {
  // width: 68px;
}

.pagination {
  .pagination-display {
    width: 86px;
    text-align: center;
  }
}

.bookmark-list {
  width: 100%;
  overflow-y: scroll;
  height: 180px;
  margin-bottom: 16px;

  ul {
    padding: 0;

  }
  li {
    list-style: none;
    font-size: 11px;
    border-bottom: 1px solid #e4e5e7;
    padding: 4px 4px;

  }
}
</style>
