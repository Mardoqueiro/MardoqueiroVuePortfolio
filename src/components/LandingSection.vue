<template>
    <div class="container">
        <div class="row vh-100 align-items-center">
            <div class="col">
                <img src="https://mardoqueiro.github.io/all_images/Vue.EOMP/Portfolio.images/portfolio.bgRemoved.png" alt="profile" class="img-fluid" loading="lazy">
            </div>
            <div class="col">
                <div id="details">
                    <h1 class="display-1">Mardoqueiro D Lukembeladio</h1>
                    <p v-if="title">
                        I am
                        <span>{{ title }}</span>
                    </p>
                    <Spinner v-else/>
                    <!-- <p v-if="jobTitle?.length">
                        <span>{{ jobTitle[0]?.title }}</span>
                    </p> -->
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const jobTitle = 
computed(() => store.state.jobTitle)
const title = ref('Aspiring Frontend Developer')
const cnt = ref(-1)

function repeat() {
    try {
        if (cnt.value == jobTitle.value?.length) cnt.value = 0; 
        title.value = 
            jobTitle.value?.at(cnt.value)?.title;
            setTimeout(repeat, 2000)
        cnt.value++
    } catch (e) {
        //
    }
 }
onMounted(() => {
    store.dispatch('fetchJobTitle')
    repeat()
})
// import { computed, onMounted, } from 'vue'
// import { useStore } from 'vuex'
// const store = useStore()
// const jobTitle = 
// computed(() => store.state.jobTitle)
// onMounted(() => {
//     store.dispatch('fetchJobTitle')
// })
</script>

<style>

</style>