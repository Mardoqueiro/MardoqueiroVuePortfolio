<template>
  <div class="container">
    <section class="row" id="landing">
      <LandingSection/>
    </section>
    <section class="row" id="about">
      <AboutSection/>
    </section>
    <section class="row" id="resume">
      <ResumeSection/>
    </section>
    <section class="row" id="project">
      <ProjectSection/>
    </section>
    <!-- <section class="row" id="testimonial">
      <TestimonialSection/>
    </section> -->
    <section class="row" id="reachMe">
      <ReachMeSection/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingSection from '@/components/LandingSection.vue';
import AboutSection from '@/components/AboutSection.vue';
// import TestimonialSection from '@/components/TestimonialSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import ReachMeSection from '@/components/ReachMeSection.vue';
import ResumeSection from '@/components/ResumeSection.vue';

export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    // TestimonialSection,
    ProjectSection,
    ReachMeSection,
    ResumeSection
  }
}
</script>
