<template>
  <header>
    <div class="container">
      <div class="row justify-content-center">
        <div class=" col-12 col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Add your business</h5>
              <div class="card-text">
                <hr>
                <div class="form-group">
                  <label for="name">Email</label>
                  <input type="email" class="form-control" v-model="email" id="email">
                </div>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" v-model="name" id="name">
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea v-model="description" id="description" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <label for="category">Category (icon)</label>
                  <input type="text" class="form-control" v-model="category" id="category">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" v-model="password" id="password">
                </div>
                <div class="form-group">
                  <label for="password">Confirm Password</label>
                  <input type="password" class="form-control">
                </div>
                <button type="submit" v-on:click="save" class="btn btn-success btn-block">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import graphQL from "../service/index";

export default {
  name: "AddBusiness",
  props: {
    msg: String
  },
  data() {
    return {
      email: '',
      password: '',
      isActive: true,
      name: "",
      abn: "",
      description: "",
      phone: "",
      location: "",
      category: "",
      subcategory: ""
    };
  },
  methods: {
    save() {
      try {
        graphQL
          .saveCompany(
            this.name,
            this.abn,
            this.description,
            this.phone,
            this.location,
            this.category,
            this.subcategory
          )
          .then(result => {
            this.$notify({
              text: `${
                result.data.data.createCompany.name
              } successfully saved.`,
              type: "success"
            });
          })
          .catch(error => {
            this.$notify({
              text: error,
              type: "error"
            });
          });
      } catch (err) {
        this.$notify(err, "error");
      }
    }
  }
};
</script>

<style scoped>

</style>

