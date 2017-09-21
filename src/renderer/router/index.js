import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/top',
      name: 'top-view',
      component: require('@/pages/Top/TopView.vue')
    },
    // {
    //   path: '/network',
    //   name: 'network',
    //   component: require('@/pages/Network/NetworkView.vue')
    // },
    {
      path: '/result',
      name: 'result-view',
      component: require('@/pages/Result/ResultView.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail-view',
      component: require('@/pages/Detail/DetailView.vue')
    },
    {
      path: '/bookmark',
      name: 'book-mark',
      component: require('@/pages/Bookmark/BookmarkView.vue'),
      children: [
        {
          path: '/',
          name: 'list-view',
          component: require('@/pages/Bookmark/ListView.vue')
        },
        {
          path: 'detail/:id',
          name: 'book-mark-detail-view',
          component: require('@/pages/Bookmark/DetailView.vue')
        },
      ],
    },
    {
      path: '*',
      redirect: '/top'
    }
  ]
})
