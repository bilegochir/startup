<template>
  <header>
    <div class="container mb-3">
      <div class="row">
        <div class="col-12">
          <div class="form-row">
            <div class="col-12 mb-2 mb-md-0">
              <input type="text" v-model="search" class="form-control form-control-lg" placeholder="Search">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-group">
        <router-link v-for="(item, i) in companies" :key="i" :to="{ name: 'company', params: { id: item._id} }" href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="row">
            <div class="col-1 mob-hide text-center">
              <img style="width: 75px; height: 75px;" :src="'icons/' + item.category + '.png'">
              <small>{{ item.category }}</small>
            </div>
            <div class="col">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{i+1}}. {{ item.name }}</h5>
                <small>{{ item.location }}</small>
              </div>
              <p class="mb-1">{{ item.description }}</p>
              <div class="d-flex w-100 justify-content-between">
                <small>{{ item.subcategory }}</small>
                <small>
                  <v-icon name="star" v-bind:class="{ rank: (i > 0) }"></v-icon>
                  <v-icon name="star" v-bind:class="{ rank: (i > 2) }"></v-icon>
                  <v-icon name="star" v-bind:class="{ rank: (i > 4) }"></v-icon>
                  <v-icon name="star" v-bind:class="{ rank: (i > 6) }"></v-icon>
                  <v-icon name="star" v-bind:class="{ rank: (i > 7) }"></v-icon>
                </small>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import graphQL from "../service/index";

export default {
  name: "BusinessList",
  data() {
    return {
      isActive: true,
      companies: [],
      search: ""
    };
  },
  created() {
    this.fetchData(this.search);
  },
  watch: {
    search: function(value) {
      this.fetchData(value);
    }
  },
  methods: {
    fetchData(val) {
      graphQL.getCompanies(val).then(result => {
        this.companies = result.data.data.getCompanies;
      });
    }
  }
};
</script>

<style scoped>
.col-1 {
  margin-right: 15px;
}
header {
  color: white;
}
.pagination {
  margin-top: 20px;
}
.icon {
  width: 70%;
}
small .icon {
  width: 20px;
}
small .icon.rank {
  color: #ffbd07;
}
.mob-hide small {
  margin-left: 5px;
}
@media (max-width: 992px) {
  .mob-hide {
    display: none;
  }
}
</style>

