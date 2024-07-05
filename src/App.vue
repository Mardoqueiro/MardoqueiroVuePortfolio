<template>
  <div class="wrapper">
    <NavBar/>
    <main class="container-fluid">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>  
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  },
  computed: {
    jobTitle() {
      return this.$store.state.jobTitle
    },
    about() {
      return this.$store.state.about
    },
    skills() {
      return this.$store.state.skills
    },
    experiences() {
      return this.$store.state.experiences
    },
    education() {
      return this.$store.state.education
    },
    projects() {
      return this.$store.state.projects
    },
    testimonials() {
      return this.$store.state.testimonials
    }
  },
}
</script>

<style src="@/assets/css/style.css">

</style>
