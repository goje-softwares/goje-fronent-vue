<template>
  <div id="wrapper">
    <!--    sidebar-->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div class="sidebar-brand-icon ">
          <div class="mx-3">گوجه</div>
        </div>
      </a>
      <hr class="sidebar-divider my-0">

      <li class="nav-item" v-for="navItem in navLinks">
        <router-link :to="{ name: navItem.name }" class="nav-link">
          <i class="icon-fw icon-plus"></i>
          <span>{{ navItem.title }}</span></router-link>
      </li>

      <hr class="sidebar-divider d-none d-md-block">
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
    <!--    sidebar-->
    <!--    // main content-->
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <!--        // header-->

        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="icon-menu"></i>
          </button>
        </nav>
        <!--         header -->
        <!--         main -->
        <div class="container-fluid">
          <h1 class="h3 mb-2 text-gray-800">{{ title }}</h1>


          <slot></slot>
        </div>
        <!--         main -->
      </div>
      <!--       footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>By <a target="_blank" href="/">goje</a></span>
          </div>
        </div>
      </footer>
      <!--       footer -->

    </div>
    <!--     main content -->
  </div>

</template>

<script>
import "./../assets/css/admin.css"
import "./../assets/css/base.css"

export default {
  name: "Dashboard",
  props: ['title', 'navLinks'],
  mounted() {
    console.log(this.navlinks)

  }
}
</script>

<style scoped>

</style>