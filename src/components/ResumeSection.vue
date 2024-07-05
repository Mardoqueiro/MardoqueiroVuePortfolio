<template>
  <div>

    <!-- Education Section -->
    <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1">Resume</h1>
          <!-- <p v-if="education">
                </p> -->
          <h3>Education</h3>
          <div
            class="row gap-2 justify-content-center"
            v-if="education?.length"
          >
            <Card v-for="ed in education" :key="ed.id">
              <template #cardHeader>
                <img
                  :src="ed.image"
                  :alt="ed.name"
                  loading="lazy"
                  class="img-fluid"
                />
              </template>
              <template #cardBody>
                <h5 class="card-title">{{ ed.name }}</h5>
                <p class="shadow">Duration: {{ ed.duration }}</p>
              </template>
            </Card>
          </div>
          <Spinner v-else />
        </div>
      </div>
    </div>
  </div>

  <!-- Experience Section -->
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <!-- <h1 class="display-1">Experiences</h1> -->
          <p v-if="experiences"></p>
          <h3>Experiences</h3>
          <div
            class="row gap-2 justify-content-center"
            v-if="experiences?.length"
          >
            <Card v-for="exp in experiences" :key="exp.id">
              <template #cardHeader>
                <img :src="exp.profile" loading="lazy" class="img-fluid" />
              </template>
              <template #cardBody>
                <h5 class="card-title">{{ exp.companyName }}</h5>
                <p class="shadow">Title: {{ exp.jobTitle }}</p>
                <p>Duties: {{ exp.duties }}</p>
              </template>
            </Card>
          </div>
          <Spinner v-else />
        </div>
      </div>
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
</template>

<script setup>
import Spinner from "./Spinner.vue";
import Card from "./Card.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const education = computed(() => store.state.education);
const experiences = computed(() => store.state.experiences);
const skills = computed(() => store.state.skills);
onMounted(() => {
  store.dispatch("fetchEducation");
  store.dispatch("fetchExperiences");
  store.dispatch("fetchSkills");
});
</script>

<style scoped>
h5 {
  color: #F9F2F2;
}

h3 {
  font-family: 'Poppin' sans-serif;
  color: white;
}
</style>