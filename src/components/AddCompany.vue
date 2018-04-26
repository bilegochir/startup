<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="name" id="name">
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <input type="text" class="form-control" v-model="location" id="location">
          </div>
          <button type="submit" v-on:click="saveCompany" class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      isActive: true,
      name: '',
      location: ''
    };
  },
  methods: {
    saveCompany() {
      axios.post("http://localhost:4000/graphql", {
        query: `
          mutation { 
            createCompany(name: "${this.name}", location: "${this.location}") {
              name
              location
            } 
          }`
      }).then(result => {
        this.$notify({
          title: 'Company created',
          text: `Hello ${result.data.data.createCompany.name}! Thanks for joining with us!`,
          type: 'success',
        });
      })
      
    }
  }
};
</script>

<style scoped>

</style>

