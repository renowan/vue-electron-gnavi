<template>
  <div id="header">
    <div id="logo" class="light-version">
      <span>
        Gnavi API
      </span>
    </div>

    <nav role="navigation">

            <div class="small-logo">
                <span class="text-primary">Gnavi API</span>
            </div>

            <div class="navbar-right">
                <ul class="nav navbar-nav no-borders">

                    <li class="">
                        <router-link class="dropdown-toggle" to="/">
                            <i class="pe-7s-home"></i>
                        </router-link>
                    </li>

                    <li class="">
                        <router-link class="dropdown-toggle" to="/result">
                            <i class="pe-7s-search"></i>
                        </router-link>
                    </li>

                    <!-- <li class="">
                        <router-link class="dropdown-toggle" to="/detail/123499">
                            <i class="pe-7s-news-paper"></i>
                        </router-link>
                    </li> -->


                    <li class="">
                        <router-link class="dropdown-toggle label-menu-corner" to="/bookmark">
                            <i class="pe-7s-notebook"></i>
                            <span class="label label-success">{{registrValue}}</span>
                        </router-link>
                    </li>

                    <li class="gnavi-logo">
                      <img src="http://apicache.gnavi.co.jp/image/rest/b/api_265_65.gif" width="137" alt="">
                    </li>

                </ul>
            </div>
        </nav>

  </div>
</template>

<script>
  export default {
    name: 'global-header',
    props: {
      registrValue: {type: Number, default: 0}
    }
  }
</script>

<style lang="scss" scope>
#header {
  height: 56px;
  background-color: #f7f9fa;
  #logo {
    border-right: 1px solid #e4e5e7;
  }
}

.gnavi-logo {
  padding: 10px 10px 0;
  margin-right: 16px;
}

.label-menu-corner .label {
  right: 2px;
}

// .nav.navbar-nav li a.router-link-active,
// .nav.navbar-nav li a.router-link-exact-active {
//   color: #62cb31;
// }
</style>
