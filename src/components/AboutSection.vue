<template>
  <div class="container">
    <div class="row">
      <!-- <div class="col-sm-6 text-center">
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
      </div> -->
      <div class="col">
        <div id="details">
          <h1 class="display-1">About</h1>
          <p v-if="about" class="lead">
            {{ about[0] }}
          </p>
          <!-- <p class="shadow">{{ about.quotes }}</p> -->
          <Spinner v-else />
        </div>
        <!-- Skills Section -->
        <div class="row">
          <div class="col">
            <div id="details">
              <h3>Skills</h3>
              <div class="skills-container" v-if="skills?.length">
                <div
                  v-for="skill in skills"
                  :key="skill.id"
                  class="skill-badge"
                >
                  <img
                    :src="skill.image"
                    loading="lazy"
                    class="skill-image"
                    :alt="skill.title"
                  />
                  <span class="skill-title">{{ skill.title }}</span>
                  <!-- <span class="skill-experience">{{ skill.experience }}</span> -->
                </div>
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
// import Card from "./Card.vue";
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
  background: #17182e;
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

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.skill-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #17182e;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #333;
  text-align: center;
}

.skill-badge:hover {
  background-color: #f3bf6d;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.skill-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.skill-title {
  font-weight: bold;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  line-height: 1.2;
}

.skill-experience {
  font-size: 0.8rem;
  opacity: 0.8;
}

h3 {
  color: #f9f7f4;
}
</style>
