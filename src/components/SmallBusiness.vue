<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 bg-white p-4 details fixed">
          <h4>{{ company.name }}</h4>
          <small>
            <v-icon name="star" class="rank"></v-icon>
            <v-icon name="star" class="rank"></v-icon>
            <v-icon name="star" class="rank"></v-icon>
            <v-icon name="star"></v-icon>
            <v-icon name="star"></v-icon>
          </small>
          <hr>
          <p>Senior Steelfixer</p>
          <p><strong>George Doubble</strong></p>
          <p>george@monmagnet.com</p>
          <p>0437 760 531</p>
          <hr>
          <p>Accountant</p>
          <p><strong>Bill Clinton</strong></p>
          <p>bill@monmagnet.com</p>
          <p>0437 760 531</p>
        </div>
        <div class="col-12 col-md-9 p-4 bg-white scrollit">
          <div class="timeline">
            <ul>
              <li class="item">
                <h6>09 July, 2015</h6>
                <p>{{ company.description }}</p>
              </li>
              <li class="item">
                <h6>09 July, 2015</h6>
                <p>{{ company.description }}</p>
                <div class="row project-img">
                  <div class="col">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                </div>
              </li>
              <li class="item">
                <h6>09 July, 2015</h6>
                <p>{{ company.description }}</p>
              </li>
              <li class="item">
                <h6>09 July, 2015</h6>
                <p>{{ company.description }}</p>
                <div class="row project-img">
                  <div class="col-4">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col-4">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col-4">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col-4">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col-4">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col-4">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                </div>
              </li>
              <li class="item">
                <h6>09 July, 2015</h6>
                <p>{{ company.description }}</p>
                <div class="row project-img">
                  <div class="col">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                  <div class="col">
                    <img class="img-fluid img-thumbnail" src="http://placehold.it/500x300" alt="">
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
      company: ""
    };
  },
  created() {
    this.fetchData();
    this.company = JSON.parse(localStorage.getItem("company"));
  },
  methods: {
    async fetchData() {
      graphQL
        .getCompany(this.$route.params.id)
        .then(result => {
          if (result.data.data.getCompany) {
            localStorage.setItem(
              "company",
              JSON.stringify(result.data.data.getCompany)
            );
            this.company = result.data.data.getCompany;
          }
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
.icon {
  width: 18px;
}
small .icon.rank {
  color: #ffc107;
}
.col-4 {
  margin-bottom: 10px;
}
hr {
  margin-bottom: 30px;
}
</style>
