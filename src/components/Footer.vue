<template>
  <footer class="footer">
    <div class="bubbles">
      <div v-for="i in 128" :key="i" class="bubble" :style="{
        '--size': `${2 + Math.random() * 4}rem`,
        '--distance': `${6 + Math.random() * 4}rem`,
        '--position': `${-5 + Math.random() * 110}%`,
        '--time': `${2 + Math.random() * 2}s`,
        '--delay': `${-1 * (2 + Math.random() * 2)}s`
      }"></div>
    </div>
    <div class="content">
      <div class="links">
        <footer class="container-fluid">
        <div class="row">
          <p class="lead">
            Mardoqueiro's porfolio &copy;<span class="shadow">{{ cYear }}</span>
          </p>
    </div>
  </footer>
      </div>
    </div>
    <svg style="position: fixed; top: 100vh">
      <defs>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="blob" />
        </filter>
      </defs>
    </svg>
  </footer>
  
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
    z-index: 1;
    --footer-background:#F5CB86;
    display:grid;
    position: relative;
    grid-area: footer;
    min-height:5rem;}


</style> 
