<template>
  <header>
    <div class="container mb-3">
      <div class="row">
        <div class="col-12">
          <form>
            <div class="form-row">
              <div class="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" class="form-control form-control-lg" placeholder="carpenter, steelfixer, cleaner, etc...">
              </div>
              <div class="col-12 col-md-3">
                <button type="submit" class="btn btn-block btn-lg btn-success">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-group">
        <router-link v-for="(item, i) in companies" :key="i" :to="{ name: 'company', params: { id: item._id} }" href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="row">
            <div class="col-1 mob-hide">
              <img data-src="holder.js/75x75" class="rounded" alt="75x75" style="width: 75px; height: 75px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2275%22%20height%3D%2275%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2075%2075%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162fbedba59%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162fbedba59%22%3E%3Crect%20width%3D%2275%22%20height%3D%2275%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2219.34375%22%20y%3D%2242.15%22%3E75x75%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
            </div>
            <div class="col">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{i}}. {{ item.name }} - {{ item._id }}</h5>
                <small>{{ item.location }}</small>
              </div>
              <p class="mb-1">{{ item.description }}</p>
              <div class="d-flex w-100 justify-content-between">
                <small>{{ item.category }}</small>
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
import axios from 'axios'

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      isActive: true,
      companies: []
    }
  },
  created() {
    this.getCompanies()
  },
  methods: {
    async getCompanies () {
      const res = await axios.post(
        'http://localhost:4000/graphql', {
        query: `{
          getCompanies {
            _id
            name
            abn
            description
            phone
            location
            category
            subcategory
          }
        }`
      })
      this.companies = res.data.data.getCompanies
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
  width: 16px;
}
small .icon.rank {
  color: #ffc107;
}
@media (max-width: 992px) {
  .mob-hide {
    display: none;
  }
}
</style>

