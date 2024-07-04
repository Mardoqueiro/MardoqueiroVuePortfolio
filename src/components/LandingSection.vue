<template>
  <div class="container">
    <div class="container-lg">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="intro-text">
          <h5>Hello, It's Me</h5>
          <h1>Mardoquéiro D. Lukembeladio</h1>
          <h4 v-if="title">
             and I am
              <span>{{ title }}</span>
            </h4>
            <Spinner v-else />
          <!-- <h4>And I'm a <span>Full-stack Developer apprentice</span></h4> -->
          <p>
            Welcome to my portfolio website! Explore a curated collection of my
            work, crafted with passion and dedication. From design to
            development, I invite you to delve into the creative journey that
            defines my expertise. Feel free to wander, and don't hesitate to
            reach out with any inquiries or collaboration opportunities. Let's
            create something amazing together!
          </p>
          <div id="details">
            <div class="animate__animated animate__bounce"></div>
            
            
          </div>
          <div class="social-media">
            <a
              class="icon"
              href="https://www.linkedin.com/feed/"
              target="_blank"
              ><i class="bi bi-linkedin"></i
            ></a>
            <a
              class="icon "
              href="https://github.com/Mardoqueiro"
              target="_blank"
              ><i class="bi bi-github"></i
            ></a>
          </div>
          <div>
            <button class="btn btn-outline-dark btn-lg">Download Cv</button>
          </div>
        </div>
      </div>
        <div class="col-sm-6 text-center">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import Spinner from "./Spinner.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const jobTitle = computed(() => store.state.jobTitle);
const title = ref("Aspiring Frontend Developer");
const cnt = ref(-1);

function repeat() {
  try {
    if (cnt.value == jobTitle.value?.length) cnt.value = 0;
    title.value = jobTitle.value?.at(cnt.value)?.title;
    setTimeout(repeat, 2000);
    cnt.value++;
  } catch (e) {
    //
  }
}
onMounted(() => {
  store.dispatch("fetchJobTitle");
  repeat();
});
// import { computed, onMounted, } from 'vue'
// import { useStore } from 'vuex'
// const store = useStore()
// const jobTitle =
// computed(() => store.state.jobTitle)
// onMounted(() => {
//     store.dispatch('fetchJobTitle')
// })
</script>

<style scoped>

@keyframes glow {
  0% {
    box-shadow: 0 0 0 0 #f5cb86;
  }
  50% {
    box-shadow: 0 0 20px 5px #f5cb86;
  }
  100% {
    box-shadow: 0 0 0 0 #f5cb86;
  }
}

.btn:hover,
.btn:hover a {
  animation: glow 1s;
  box-shadow: 0 0 1rem var(--main-color);
}

h1 {
  font-family: 'Poppins', sans-serif;
 color: whitesmoke;
}


</style>
