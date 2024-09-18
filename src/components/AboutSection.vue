<template>
  <div class="container">
    <div class="row">
      <!-- <div class="col">
        <div class="wrap">
          <div class="circle">
            <img
              src="https://mardoqueiro.github.io/all_images/Vue.EOMP/Portfolio.images/portfolio.bgRemoved.png"
              alt="profile"
              class="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div> -->
      <div class="col-sm-6 text-center">
          <div class="wrap">
            <div class="circle">
              <img
                src="https://mardoqueiro.github.io/all_images/Vue.EOMP/Portfolio.images/MordecaiPortfolio.png"
                alt="profile"
                class="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      <div class="col">
        <div id="details">
          <h1 class="display-1">About</h1>
          <p v-if="about" class="lead">
            {{ about[0] }} 
          </p>
          <!-- <p class="shadow">{{ about.quotes }}</p> -->
          <Spinner v-else />
        </div>
      </div>
      <!-- Skills Section -->
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <!-- <h1 class="display-1">Skills</h1> -->
          <p v-if="skills"></p>
          <h3>Skills</h3>
          <div class="row gap-2 justify-content-center" v-if="skills?.length">
            <Card v-for="skills in skills" :key="skills.id">
              <template #cardHeader>
                <img :src="skills.image" loading="lazy" class="img-fluid" />
              </template>
              <template #cardBody>
                <h5 class="card-title">{{ skills.title }}</h5>
                <p class="shadow">{{ skills.experience }}</p>
                <!-- <p class="shadow">R {{ skills.amount }}</p> -->
              </template>
            </Card>
          </div>
          <Spinner v-else />
        </div>
      </div>
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
const about = computed(() => store.state.about);
const skills = computed(() => store.state.skills);
onMounted(() => {
  store.dispatch("fetchAbout");
  store.dispatch("fetchSkills");
});
</script>

<style scoped>
.circle {
  background: #F5CB86; 
  width: 500px;
  height: 500px;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  overflow: hidden; 
  animation: morph 3s linear infinite;
}
p {
  color: whitesmoke;
  margin-top: 100px;
}

</style>
