<template>
  <div class="callout">
      <h2>"Hope Farm School is a boarding school near Stockholm, Wisconsin with the mission of discipling, training, and educating young men in the spirit of Jesus Christ, all in a farm setting.
           Through Farmboy Industries we teach our students business principles, and make the learning real by selling our products. Proceeds support our school."</h2>
      <p></p>
    </div>
    <div class="collection">
      <slot name="collection"></slot>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.textlockup {
  display: grid;
  grid-template-columns: 50px 100px 1fr;
  grid-template-rows: 50px 50px 100px 20px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .new {
    grid-area: 1 / 1 / 5 / 4;
    font-size: 23vmin;
    color: #efefef;
    text-transform: uppercase;
  }
  }
  .callout {
    width: 100%;
    height: 280px;
    background: url("/callout.jpg") center center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    h2 {
      padding: 0 30px;
      text-align: center;
    }

  .sale {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 6.5vmin;
    color: #d96528;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .collection {
    grid-area: 3 / 3 / 4 / 4;
    font-size: 8.5vmin;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .details {
    grid-area: 4 / 2 / 5 / 4;
    font-size: 2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .img {
    max-width: 950px;
    grid-area: 1 / 3 / 6 / 4;
    img {
      width: 95%;
    }
  }
}

@media screen and (max-width: 650px) {
  .textlockup {
    grid-template-columns: 25px 25px 1fr !important;
    grid-template-rows: 6vmin 5.5vmin 10vmin 20px 1fr !important;
  }
}
</style>