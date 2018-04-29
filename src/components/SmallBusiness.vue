<template>
  <header>
    <div class="container">
      <!-- Heading Row -->
      <div class="row">
        <div class="col-lg-6 mb-4">
          <h1 class="mb-5">{{ company.name }}
            <span class="float-right">
              <v-icon name="star"></v-icon>
              <v-icon name="star"></v-icon>
              <v-icon name="star"></v-icon>
              <v-icon name="star"></v-icon>
              <v-icon name="star"></v-icon>
            </span>
          </h1>
          <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
          <ul v-for="n in 4" :key="n">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <img class="img-fluid img-thumbnail rounded" src="http://www.unasurcds.org/wp-content/uploads/2017/03/tg2wed7c6ywed7u22.jpg" alt="">
        </div>
      </div>
      <!-- /.row -->

      <h4 class="mt-5">Projects</h4>
      <hr>

      <!-- Content Row -->
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Project One</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary float-right">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Project Two</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary float-right">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Project Three</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary float-right">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Project Three</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary float-right">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Project Three</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary float-right">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->

      </div>
      <!-- /.row -->

    </div>
  </header>
</template>

<script>
import graphQL from "../service/index";

export default {
  name: "SmallBusiness",
  props: {
    msg: String
  },
  data() {
    return {
      company: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      graphQL
        .getCompany(this.$route.params.id)
        .then(result => {
          this.company = result.data.data.getCompany;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
