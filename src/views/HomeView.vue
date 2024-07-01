<template>
  <div class="container">
    <section class="row" id="landing">
      <LandingSection/>
    </section>
    <section class="row" id="about">
      <AboutSection/>
    </section>
    <section class="row" id="education">
      <EducationSection/>
    </section>
    <section class="row" id="experience">
      <ExperiencesSection/>
    </section>
    <section class="row" id="skills">
      <SkillsSection/>
    </section>
    <section class="row" id="testimonial">
      <TestimonialsSection/>
    </section>
    <section class="row" id="project">
      <ProjectsSection/>
    </section>
    <section class="row" id="reachMe">

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingSection from '@/components/LandingSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import EducationSection from '@/components/EducationSection.vue';
import ExperiencesSection from '@/components/ExperiencesSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue'

export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    EducationSection,
    ExperiencesSection,
    SkillsSection,
    TestimonialsSection,
    ProjectsSection
  }
}
</script>
