<template>
  <div class="main">
    <div class="title">
      <titleline></titleline>
    </div>
    <div class="main-container">
      <maincontent></maincontent>
    </div>
  </div>
</template>

<script>
import { titleline, maincontent } from './index.js'
export default {
  name: 'nuggest',
  data () {
    return {}
  },
  components: {
    titleline,
    maincontent
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  height: 5rem;
  background-color: #fff;
}
.main-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
}
</style>
