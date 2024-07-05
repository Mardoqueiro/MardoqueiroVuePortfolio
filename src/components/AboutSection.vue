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
          <!-- <p class="shadow">{{ about.quotes }}</p> -->
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
  background: #F5CB86; /* Set background color */
  width: 500px; /* Set width */
  height: 500px; /* Set height */
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; /* Set border radius for multiple values */
  overflow: hidden; /* Hide content that overflows */
  animation: morph 3s linear infinite; /* Apply animation */
}
p {
  color: whitesmoke;
  margin-top: 100px;
}

</style>
