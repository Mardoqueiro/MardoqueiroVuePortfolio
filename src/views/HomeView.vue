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
      <EducationSection/>
      <ExperienceSection/>
      <SkillSection/>
    </section>
    <section class="row" id="project">
      <ProjectSection/>
    </section>
    <section class="row" id="testimonial">
      <TestimonialSection/>
    </section>
    <section class="row" id="reachMe">
      <ReachMeSection/>
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
import ProjectSection from '@/components/ProjectSection.vue';
import ReachMeSection from '@/components/ReachMeSection.vue';
import ResumeSection from '@/components/ResumeSection.vue';

export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    EducationSection,
    ExperienceSection,
    SkillSection,
    TestimonialSection,
    ProjectSection,
    ReachMeSection,
    ResumeSection
  }
}
</script>
