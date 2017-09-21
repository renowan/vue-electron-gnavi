<template>
  <div class="container-fluid list-navi">
    <template v-if="type === 'search'">
      <router-link tag="a" to="/result" class="btn-go-result-list"><i class="fa fa-angle-up"></i> 検索結果</router-link>
    </template>
    <template v-if="type === 'bookmark'">
      <router-link tag="a" to="/bookmark" class="btn-go-result-list"><i class="fa fa-angle-up"></i> ブックマーク</router-link>
      <!-- <h4 class="book-mark-title"><span class="pe-7s-notebook"></span> ブックマーク</h4> -->
    </template>

    <div class="row navi-body">
      <div class="col-xs-12 mt16 text-center" v-if="length > 0">

        <a href="javascript:void(0)"
        class="btn-result-list-dir"
        :class="{'text-success': !isPrevdIsabled}"
        @click="prev"
        :disabled="isPrevdIsabled">
          <i class="fa fa-angle-left fs14"></i>
        </a>

        <a href="javascript:void(0)"
        class="btn-result-list-dot"
        v-for="item in lengthArr"
        @click="onClickDot(item)">
          <i class="fa fa-circle" :class="{'text-success': item === detailIndex}"></i>
        </a>

        <a href="javascript:void(0)"
        class="btn-result-list-dir"
        :class="{'text-success': !isNextIsabled}"
        @click="next"
        :disabled="isNextIsabled">
          <i class="fa fa-angle-right fs14"></i>
        </a>

      </div>
    </div>

    <div class="row">
      <hr>
    </div>

  </div>
</template>

<script>
export default {
  name: 'list-navi',
  props: {
    detailIndex: {type: Number, default: 0},
    length: {type: Number, default: 0},
    type: {type: String, default: 'search'}
  },
  computed: {
    isPrevdIsabled () {
      return this.detailIndex === 0
    },
    isNextIsabled () {
      return this.detailIndex === (this.length - 1)
    }
  },
  data () {
    let lengthArr = []
    for (var i = 0; i < this.length; i++) {
      lengthArr.push(i)
    }
    return {
      lengthArr
    }
  },
  created() {
    window.addEventListener('keyup', this.previous)
  },
  methods: {
    onClickDot (index) {
      if (index === this.detailIndex) return
      if (index < 0) return
      if (index > (this.length - 1)) return
      this.$emit('on-click-dot', index)
    },
    prev () {
      this.onClickDot(this.detailIndex - 1)
    },
    next () {
      this.onClickDot(this.detailIndex + 1)
    },
    previous (e) {
      switch (e.keyCode) {
        case 37:
          this.prev()
          break
        case 38:
          console.log('ArrowUp')
          if (this.type === 'search') {
            this.$router.push('/result')
          }
          if (this.type === 'bookmark') {
            this.$router.push('/bookmark')
          }
          break
        case 39:
          this.next()
          break
        case 40:
          console.log('ArrowDown')
          break
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.previous)
  }
}
</script>

<style lang="scss" scoped>
.list-navi {
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 56px;
  background-color: #f1f3f6;

  > .row {
    position: relative;
  }

  .navi-body {
    height: 34px;
  }
}

.btn-go-result-list {
  position: absolute;
  top: 16px;
  left: 24px;
  z-index: 9999;
}

.book-mark-title {
  position: absolute;
  top: 6px;
  left: 24px;
  z-index: 9999;
}

.btn-result-list-dot {
  color: #D8D8D8;
  padding: 6px;
}

.btn-result-list-dir {
  padding: 6px;

  &:hover {
    color: #62cb31;
  }

  &[disabled] {
    cursor: not-allowed;
    color: #D8D8D8;
  }
}

hr {
  border-top: 1px solid #e4e5e7;
  margin-top: 16px;
  margin-bottom: 0;
}
</style>
