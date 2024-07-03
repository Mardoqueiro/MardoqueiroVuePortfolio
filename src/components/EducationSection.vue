<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1" data-aos="fade-right">Resume</h1>
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
</template>

<script setup>
import Spinner from "./Spinner.vue";
import Card from "./Card.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const education = computed(() => store.state.education);
onMounted(() => {
  store.dispatch("fetchEducation");
});
</script>

<style></style>
