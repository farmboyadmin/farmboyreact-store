<template>
  <footer>
    <section class="callout">
     </section>
    <app-footer-links />
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.callout {
  width: 100%;
  //background: url("/callout.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //color: white;
  h2 {
    padding: 0 20px;
    font-size: large;
    text-align: left;
    width: 80vw;
    height: 10vw;
    font-family: Verdana  ;
  }
}

.sarahstuff {
  background: black;
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
}

a,
a:visited,
a:active {
  color: #c4c3ec;
  font-weight: bold;
}
</style>
