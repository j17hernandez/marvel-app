<template>
  <div>
    <div class="banner-character text-center">
      <div style="padding: 60px">
        <h1 class="white--text">MARVEL STUDIOS</h1>
        <span class="white--text">
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
}
</script>
<style scoped>
.banner-character {
  background-image: url('~assets/img/character_background.jpg') !important;
  width: 100% !important;
  height: 300px !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
</style>
