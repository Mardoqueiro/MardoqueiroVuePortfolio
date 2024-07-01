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
      <ExperienceSection/>
    </section>
    <section class="row" id="skills">
      <SkillSection/>
    </section>
    <section class="row" id="testimonial">
      <TestimonialSection/>
    </section>
    <section class="row" id="project">
      <ProjectSection/>
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
import ExperienceSection from '@/components/ExperienceSection.vue';
import SkillSection from '@/components/SkillSection.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import ProjectSection from '@/components/ProjectSection.vue'

export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    EducationSection,
    ExperienceSection,
    SkillSection,
    TestimonialSection,
    ProjectSection
  }
}
</script>
