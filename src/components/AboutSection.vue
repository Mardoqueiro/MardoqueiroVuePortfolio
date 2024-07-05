<template>
  <div class="container">
    <div class="row">
      <div class="col">
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
      </div>
      <div class="col">
        <div id="details">
          <h1 class="display-1" data-aos="fade-left">About</h1>
          <p v-if="about" class="lead">
            {{ about[0] }}
          </p>
          <Spinner v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Spinner from "./Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const about = computed(() => store.state.about);
onMounted(() => {
  store.dispatch("fetchAbout");
});
</script>

<style scoped>
.circle {
  /* Container for the circular image */
  background: #17182E; /* Set background color */
  width: 500px; /* Set width */
  height: 500px; /* Set height */
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; /* Set border radius for multiple values */
  overflow: hidden; /* Hide content that overflows */
  animation: morph 3s linear infinite; /* Apply animation */
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.about-section {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    max-width: 800px;
    margin: 50px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
}

.about-text {
    flex: 1;
}

.about-text h2 {
    margin-top: 0;
}

.about-text p {
    line-height: 1.6;
}

</style>
