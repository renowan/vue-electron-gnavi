<template>
  <div>
    <div class="bookmark-list">
      <ul>
        <li>
          <div class="shop-name">
            <a href="javascript:void(0)">産地直送 北海道 札幌駅前店</a>
          </div>
          <div class="address">
            〒060-0806  北海道札幌市北区北6条西1 uui
          </div>
        </li>
        <li>
          <div class="shop-name">
            産地直送 北海道 札幌駅前店
          </div>
          <div class="address">
            〒060-0806  北海道札幌市北区北6条西1
          </div>
        </li>
        <li>
          <div class="shop-name">
            産地直送 北海道 札幌駅前店
          </div>
          <div class="address">
            〒060-0806  北海道札幌市北区北6条西1
          </div>
        </li>
        <li>
          <div class="shop-name">
            産地直送 北海道 札幌駅前店
          </div>
          <div class="address">
            〒060-0806  北海道札幌市北区北6条西1
          </div>
        </li>
        <li>
          <div class="shop-name">
            産地直送 北海道 札幌駅前店
          </div>
          <div class="address">
            〒060-0806  北海道札幌市北区北6条西1
          </div>
        </li>
        <li>
          <div class="shop-name">
            産地直送 北海道 札幌駅前店
          </div>
          <div class="address">
            〒060-0806  北海道札幌市北区北6条西1
          </div>
        </li>
        <li>
          <div class="shop-name">
            産地直送 北海道 札幌駅前店
          </div>
          <div class="address">
            〒060-0806  北海道札幌市北区北6条西1
          </div>
        </li>
      </ul>
    </div>

    <nav aria-label="Page navigation" class="pagination-wrapper">
      <ul class="pagination mtn">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'result-list',
    components: {

    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.bookmark-list {
  margin: 24px;
  overflow-y: scroll;
  border: 1px solid #e4e5e7;
  background-color: #fff;
  height: 400px;

  > ul {
    padding: 0;
    > li {
      list-style: none;
      padding: 8px 12px;
      border-bottom: 1px solid #e4e5e7;

      .shop-name {
        font-size: 13px;
        font-weight: 500;
      }
      .address {
        font-size: 11px;
      }
    }
  }
}

.pagination-wrapper {
  margin: 16px 24px;
}
</style>
