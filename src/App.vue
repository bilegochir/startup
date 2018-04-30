<template>
  <div id="app" class="bg-light">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div class="container">
        <router-link to="/" class="navbar-brand js-scroll-trigger" href="#page-top">
          <v-icon name="database"></v-icon> Service Database
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/addbusiness" class="nav-link js-scroll-trigger" href="#about">
                Add your business
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/account" class="nav-link js-scroll-trigger">Account</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/account" class="nav-link js-scroll-trigger">Help</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <notifications />

    <!-- Router-->
    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul class="list-inline mb-2">
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">⋅</li>
              <li class="list-inline-item">
                <a href="#">Contact</a>
              </li>
              <li class="list-inline-item">⋅</li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li class="list-inline-item">⋅</li>
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p class="text-muted small mb-4 mb-lg-0">© Your Website 2018. All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item mr-3">
                <a href="#">
                  <v-icon name="facebook"></v-icon>
                </a>
              </li>
              <li class="list-inline-item mr-3">
                <a href="#">
                  <v-icon name="instagram"></v-icon>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <v-icon name="twitter"></v-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>

</style>

