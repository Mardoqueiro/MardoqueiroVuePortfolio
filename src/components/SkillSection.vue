<template>
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
</template>

<script setup>
import Spinner from "./Spinner.vue";
import Card from "./Card.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const skills = computed(() => store.state.skills);
onMounted(() => {
  store.dispatch("fetchSkills");
});
</script>

<style></style>
