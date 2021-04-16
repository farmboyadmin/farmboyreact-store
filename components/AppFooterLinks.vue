<template>
  <section>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <ul>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
    </ul>
    <form class="email-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <div hidden aria-hidden="true">
        <label>
          Newsletter :
          <input name="bot-field" />
        </label>
      </div>
      <div class="newsletter">
            <label class="newsletter">Newsletter : </label>
            <label for="email">Your email address</label>
            <input type="email" name="email" placeholder="Email"  id="email" required />
             <span class="newsletter">
            <button type="submit">Subscribe</button></span>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
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

.newsletter {
    display: inline;
}

.fa {
  padding: 20px;
  font-size: 30px;
  width: 70px;
  text-align: center;
  text-decoration: none;
  border-radius: 100%;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #3B5998;
  color: white;
}

/* Twitter */
.fa-twitter {
  background: #55ACEE;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}
</style>