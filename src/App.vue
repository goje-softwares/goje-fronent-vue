<script>

import Dashboard from "./layouts/Dashboard.vue";
import Empty from "./layouts/Empty.vue";

export default {
  name: 'App',
  components: {Empty, Dashboard},
  data() {
    return {
      userLogged: false,
      navlinks: {
        home: {
          name: 'home',
          title: 'داشبورد',
          icon: 'book'
        },
        productCreate: {
          name: 'product.create',
          title: 'ایجاد محصول',
          icon: 'book'
        },
        login: {
          name: 'login',
          title: 'login',
          icon: 'book'
        },
        register: {
          name: 'register',
          title: 'register',
          icon: 'book'
        }
      }
    }
  }, mounted() {
    this.userLogged = !!(localStorage.getItem('auth.token'));
  }
}
</script>

<template>
  <dashboard v-if="userLogged" title="tet" :nav-links="navlinks">
    <router-view></router-view>
  </dashboard>
  <empty v-if="!userLogged">
    <header>
      <ul class="nav">
        <li>
          <router-link :to="{name:'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name:'product.create'}">create product</router-link>
        </li>
        <li>
          <router-link :to="{name:'login'}">login</router-link>
        </li>
        <li>
          <router-link :to="{name:'register'}">register</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </empty>


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

ul.nav {
  list-style: none;
  display: flex;
}

ul.nav a {
  padding: 8px;
  display: block;
}

</style>
