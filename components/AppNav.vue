<template>
  <header>
    <link rel="shortcut icon" type="image/png" href="/static/farmboylogo.png"/>
        <img class="logo" src="/farmboylogo.png"  />
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/">Home</nuxt-link>
        </li>
                <li>
                  <nuxt-link to="/aboutus">About</nuxt-link>
                </li>
                <li>
                 <nuxt-link to="/contactus">Contact Us</nuxt-link>
                </li>
                 <li>
                 <nuxt-link to="/newsletter">Newsletter</nuxt-link>
                </li>
                  
      </ul>
    </nav>
    <section class="banner"></section>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

nav {
  display: flex;
  width: 80vw;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  ul {
    padding-left: 0;
    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 1.25vw;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;
      a {
        color: black;
        &:hover {
          color: #c14103;
        }
      }
    }
  }
 
} .logo {
  max-width:10%;
  max-height:10%;
  height:auto;
  display: flex;
}
.carttotal {
  position: absolute;
  border-radius: 1000px;
  background: black;
  color: white;
  font-size: 10px;
  padding: 3px;
  top: -18px;
  right: -5px;
  width: 25px;
  text-align: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 10px;
  font-weight: bold;
}
.banner {
  width: 80vw;
  height: 20vw;
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
    width: 80vw;
    height: 20vw;
  }
}


@media screen and (max-width: 850px) {
  h1 {
    margin: 0;
    background: url("/farmboylog.png") center center no-repeat;
  }
  nav ul li {
    padding: 0 5px !important;
    border-left: none !important;
    border-right: none !important;
  }
}
</style>