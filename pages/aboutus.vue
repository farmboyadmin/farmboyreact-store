<template>
  <header>
    <p>
      Hope Farm School is a boarding school near Stockholm, Wisconsin with the mission of
      discipling, training, and educating young men in the spirit of Jesus Christ, all in
      a farm setting. Through Farmboy Industries we teach our students business
      principles, and make the learning real by selling our products. Proceeds support our
      school.
    </p>
    <p>
      For more details
      <a href="https://www.hopefarmschool.org"> Visit hopefarmschool.com!</a>
    </p>
    <ul class="thumbnails">
      <li>
        <img src="/bailinghay.jpg" />
      </li>
      <li>
        <img src="/movingbales.jpg" />
      </li>
        <li>
        <img src="/satwating.jpg" />
      </li>
             <li>
        <img src="/tendinghay.jpg" />
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: proxima-nova;
  background-color: #fff;
}
label {
  display: block;
  margin-bottom: 0.2em;
}
p {
  font-size: 20px;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.thumbnails {
  overflow: hidden;
}
.thumbnails li {
  float: left;
  width: 25%;
  position: relative;
  padding: 1px;
  min-height: 150px;
  background-color: #fff;
  border: 1px solid #ccc;
  overflow: hidden;
}
.thumbnails li img {
  max-width: 100%;
  display: block;
  position: absolute;
  max-height: 300px;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
}
</style>
