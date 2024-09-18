<template>
  <div class="card" >
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
  </div>

</template>

<script>
export default {
    name: "CardComp"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Rubik+Glitch+Pop&display=swap');

.card {
  width: 18rem;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #F5CB86;
  background-color: #17182E;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #F5CB86;
}
</style>