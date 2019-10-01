<template>
  <div id="app">
    <!-- Header -->
        <div class="navbar-fixed" v-show="!$route.name.includes('Impressão')">
            <nav>
            <div id="head-nav" class="nav-wrapper">
                <a href="#" data-target="slide-out" class="sidenav-trigger left show-on-medium-and-up"><i class="material-icons">menu</i></a>
                <span>{{ $route.name }}</span>
            </div>
            </nav>
        </div>
    <!-- Menu Celular -->
        <ul id="slide-out" class="sidenav">
            <li>
               <div class="user-view">
                    <img src="imgs/logo.gif">
                </div>
            </li>
            
            <div class="divider"></div>
            <li :class="$route.name == 'espelho' ? 'active' : ''"><router-link class="sidenav-close" :to="{name: 'Espelho', params: $route.params }">Espelho</router-link></li>
            <li :class="$route.name == 'medicao' ? 'active' : ''"><router-link class="sidenav-close" :to="{name: 'Medição', params: $route.params }">Medição</router-link></li>
            <li :class="$route.name == 'graficos' ? 'active' : ''"><router-link class="sidenav-close" :to="{name: 'Gráficos', params: $route.params }">Gráficos</router-link></li>
        </ul>
    <div id="corpo">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
  });
  },
   watch: {
        $route(to, from) {
            document.title = this.$route.name + ' - Perbras ';
        },
    }
}
</script>


<style>
  #head-nav {
    background-color: #F2F2F2;
  }

  #head-nav span {
    text-transform: uppercase;
    color: #0388A6;
    font-size: 24px;
  }

  #head-nav a {
    color: #0388A6;
  }

  .btn-small, h6, .btn {
    background-color: #0388A6;
  }

  .tfoot {
        background-color: #0388A6;
  }

  body {
    padding-bottom: 100px;
  }

  .loader {
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid #0388A6;
  }

  #corpo {
    margin-top: 40px;
  }
</style>
