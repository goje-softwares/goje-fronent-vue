<script setup>

</script>

<template>
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

ul.nav{
  list-style: none;
  display: flex;
}
ul.nav a{
  padding: 8px;
  display: block;
}

</style>
