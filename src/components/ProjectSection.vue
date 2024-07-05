<template>
  <div class="container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Projects</h1>
            <p v-if="projects"></p>
            <div class="row gap-2 justify-content-center" v-if="projects?.length">
              <Card  v-for="proj in projects" :key="proj.id">
                <template #cardHeader>
                  <img
                    :src="proj.image"
                    :alt="proj.name"
                    loading="lazy"
                    class="img-fluid"
                  />
                </template>
                <template #cardBody>
                  <h5 class="card-title">{{ proj.name }}</h5>
                  <h6 class="shadow">{{ proj.description }}</h6>
                  <p class="lead">
                    <button>
                      <a class="icon1" :href="proj.gitHub" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                    </button>
                    <button>
                      <a class="icon1" :href="proj.vercel" target="_blank">
                        <i class="bi bi-triangle-fill"></i>
                      </a>
                    </button>
                  </p>
                </template>
              </Card>
            </div>
            <Spinner v-else />
          </div>
        </div>
      </div>
  </div>

</template>

<script setup>
import Spinner from "./Spinner.vue";
import Card from "./Card.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const projects = computed(() => store.state.projects);
onMounted(() => {
  store.dispatch("fetchProjects");
});
</script>

<style scoped>
h5 {
  color: #F5CB86;
}

h6 {
  color: white;
}
.card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #F5CB86;
  background-color: #17182E;
  
}

.card:has(li:hover) li:not(:hover) {
  filter: blur(4px)
}
/* @media screen and (width > 800px) {
    card {
        flex-direction: column;
    }
} */
</style>
