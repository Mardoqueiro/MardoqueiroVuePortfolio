<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1" data-aos="fade-right">Testimonials</h1>
          <p v-if="testimonials"></p>
          <div
            class="row gap-2 justify-content-center"
            v-if="testimonials?.length"
          >
            <Card v-for="testimonial in testimonials" :key="testimonial.id">
              <template #cardHeader>
                <img
                  :src="testimonial.profile"
                  :alt="testimonial.name"
                  loading="lazy"
                  class="img-fluid"
                />
              </template>
              <template #cardBody>
                <h5 class="card-title">{{ testimonial.name }} {{ testimonial.surname }}</h5>
                <p class="shadow">{{ testimonial.quotes }}</p>
                <!-- <p class="shadow">R {{ testimonials.amount }}</p> -->
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
const testimonials = computed(() => store.state.testimonials);
onMounted(() => {
  store.dispatch("fetchTestimonials");
});
</script>

<!-- <script setup>
  import Card from '../components/Card.vue'
  import Spinner from './Spinner.vue'
  import { computed, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const testimonials = 
  computed(() => store.state.testimonials)
  const title = ref('Aspiring Frontend Developer')
  const cnt = ref(-1)
  
  function repeat() {
      try {
          if (cnt.value == testimonials.value?.length) cnt.value = 0; 
          title.value = 
              testimonials.value?.at(cnt.value)?.title;
              setTimeout(repeat, 2000)
          cnt.value++
      } catch (e) {
          //
      }
   }
  onMounted(() => {
      store.dispatch('fetchTestimonials')
      repeat()
  })
  </script> -->

<style scoped>
h5 {
  color: #F9F2F2;
}
</style>
