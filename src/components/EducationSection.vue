<template>
    <div class="container">
      <div class="row">
          <div class="col">
            <div id="details">
                <h1 class="display-1">Education</h1>
                <!-- <p v-if="education">
                </p> -->
                <div class="row gap-2 justify-content-center" v-if="education?.length">
                  <Card v-for="ed in education" :key="ed.id">
                    <template #cardheader>
                        <img loading="lazy" class="img-fluid">
                        <box-icon type='solid' name='school'></box-icon>
                    </template>
                    <template #cardbody>
                        <h5 class="card-title">{{ ed.name }}
                        </h5>
                        <p class="shadow">Duration: {{ ed.duration }}</p>
                        <!-- <p class="shadow">R {{ education.amount }}</p> -->
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
  const education = 
  computed(() => store.state.education);
  onMounted(() => {
      store.dispatch('fetchEducation')
  })
  </script>
  
  
  <style>
  
  </style>