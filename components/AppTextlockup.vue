<template>
  <footer>
    <section class="callout">
      <p>Hope Farm School is a boarding school near Stockholm, Wisconsin with the mission of discipling, training, and educating young men in the spirit of Jesus Christ, all in a farm setting.
           Through Farmboy Industries we teach our students business principles, and make the learning real by selling our products. Proceeds support our school.</p>
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
    padding: 0 30px;
    text-align: center;
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
