<template>
  <div class="list row">
    <div class="col-md-10">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Sortuj po tytułach"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Wyszukaj
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-10">
      <h4>CRUD</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          <div style="float: left">
            <span v-show="index === currentIndex">Tytuł:</span>
            {{ tutorial.title }}<br />

            <strong v-show="index === currentIndex"
              >Opis: {{ tutorial.description }}</strong
            >
          </div>
          <div v-if="index === currentIndex" style="float: right">
            <div style="float: left" @click="deleteTutorial()">
              <span class="material-icons">delete</span>
            </div>
            <button
              type="button"
              class="btn btn-primary xd"
              data-toggle="modal"
              data-target="#exampleModal"
              style="padding: 0px"
            >
              <span class="material-icons" type="button"> edit </span>
            </button>
          </div>
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Usuń wszystkie
      </button>
    </div>
    <!-- Button trigger modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div v-if="currentTutorial" class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edytuj pole</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Tytuł:<input
              type="text"
              class="form-control"
              id="title"
              v-model="currentTutorial.title"
            /><br />
            Opis:<input
              type="text"
              class="form-control"
              id="description"
              v-model="currentTutorial.description"
            /><br />
            Status: {{ currentTutorial.published ? "Published" : "Pending" }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Zamknij
            </button>
            <button
              class="btn btn-primary"
              @click="updatePublished()"
            >
              Zmień status
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.xd:hover,
.xd,
.xd:active,
.xd:focus {
  background: none;
  border: none;
}
</style>
<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePublished() {
      this.currentTutorial.published = !this.currentTutorial.published;
    },
   
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
      console.log(this.currentTutorial);
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then((response) => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
      this.$forceUpdate();
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
