<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="name" id="name">
          </div>
          <div class="form-group">
            <label for="abn">ABN</label>
            <input type="text" class="form-control" v-model="abn" id="abn">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" v-model="description" id="description">
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" v-model="phone" id="phone">
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <input type="text" class="form-control" v-model="location" id="location">
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <input type="text" class="form-control" v-model="category" id="category">
          </div>
          <div class="form-group">
            <label for="subcategory">Sub Category</label>
            <input type="text" class="form-control" v-model="subcategory" id="subcategory">
          </div>
          <button type="submit" v-on:click="save" class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import graphQL from "../service/index";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
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
              text: `${result.data.data.createCompany.name} successfully saved.`,
              type: 'success'
            })
          })
          .catch(error => {
            this.$notify({
              text: error,
              type: 'error'
            })
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

