<template>
    <div class="container">
      <div class="row">
          <div class="col">
            <div id="details">
                <h1 class="display-1">Experiences</h1>
                <p v-if="experiences">
                </p>
                <div class="row gap-2 justify-content-center" v-if="experiences?.length">
                  <Card v-for="exp in experiences" :key="exp.id">
                    <template #cardheader>
                        <img :src="exp.profile" loading="lazy" class="img-fluid">
                    </template>
                    <template #cardbody>
                        <h5 class="card-title">{{ exp.companyName }}
                        </h5>
                        <p class="shadow">{{ exp.quotes }}</p>
                        <!-- <p class="shadow">R {{ exp.amount }}</p> -->
                    </template>
                  </Card>
                </div>
                <Spinner v-else/>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Spinner from './Spinner.vue'
  import Card from './Card.vue'
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const experiences = 
  computed(() => store.state.experiences);
  onMounted(() => {
      store.dispatch('fetchExperiences')
  })
  </script>
  
  
  <style>
  
  </style>