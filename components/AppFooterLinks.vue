<template>
  <section>
 <div>
     <mdb-btn tag="a" size="lg" floating class="btn-fb" icon="facebook-f" fab></mdb-btn>
     <mdb-btn tag="a" size="lg" floating class="btn-tw" icon="twitter" fab></mdb-btn>
     <mdb-btn tag="a" size="lg" floating class="btn-ins" icon="instagram" fab></mdb-btn>
 </div>
    <ul>
      <h4>Newsletter:</h4>
      <input type="text" />
    </ul>
  </section>
</template>

<script>
  import { mdbBtn } from 'mdbvue';
  export default {
    name: 'ButtonsSocial',
    components: {
      mdbBtn
    }
  }
</script>

<style lang="scss" scoped>
section {
  width: 80%;
  margin-left: 10%;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

ul {
  list-style: none;
  padding-left: 0;
}

input {
  width: 100%;
}

@media screen and (min-width: 850px) {
  section {
    padding: 40px !important;
  }
}
</style>