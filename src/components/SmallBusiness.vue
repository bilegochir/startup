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
          <p>
            <strong>George Doubble</strong>
          </p>
          <p>{{ company.email }}</p>
          <p>0437 760 531</p>
          <hr>
          <p>Accountant</p>
          <p>
            <strong>Bill Clinton</strong>
          </p>
          <p>bill@monmagnet.com</p>
          <p>0437 760 531</p>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-secondary">Edit Your Details</button>
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#projectModal">Add Your Projects</button>
          </div>
        </div>
        <div class="col-12 col-md-9 p-4 bg-white scrollit">
          <div class="timeline">
            <ul>
              <li class="item">
                <h6>09 July, 2015</h6>
                <p>{{ company.description }}</p>
              </li>
              <li class="item" v-for="(item, index) in projects" :key="index">
                <h6>
                  {{ item.start_date }}
                  <div class="btn-group float-right" role="group">
                    <button @click="editProject(item._id)" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#projectModal">Edit</button>
                    <button type="button" class="btn btn-warning btn-sm">Delete</button>
                  </div>
                </h6>
                
                <p>{{ item.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectModalLabel">Add your awesome project</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="start_date">Start Date</label>
              <input type="date" class="form-control" v-model="start_date" id="start_date">
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" v-model="name" id="name">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea v-model="description" id="description" class="form-control"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveProject">Save changes</button>
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
      company: '',
      start_date: '',
      description: '',
      name: '',
      projects: []
    };
  },
  created() {
    this.fetchData()
    this.company = JSON.parse(localStorage.getItem("company"))
    this.fetchProjects()
  },
  methods: {
    fetchData() {
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
    },
    saveProject() {
      try {
        graphQL
          .saveProject(
            this.name,
            this.start_date,
            this.description,
            this.company._id
          )
          .then(result => {
            this.$notify({
              text: `${
                result.data.data.createProject.name
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
    },
    fetchProjects() {
      graphQL.getProjects(this.company._id).then(result => {
        this.projects = result.data.data.getProjects
      });
    },
    editProject(id) {
      graphQL.getProject(id).then(result => {
        this.name = result.data.data.getProject.name
        this.start_date = result.data.data.getProject.start_date
        this.description = result.data.data.getProject.description
        this.company._id = result.data.data.getProject._id
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
