<template>
  <section>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <ul>
      <a href="https://www.facebook.com/hopefarmschoolwis" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="https://www.instagram.com/hopefarmschool/" class="fa fa-instagram"></a>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  align-items: center;

}

ul {
  list-style: none;
    align-items: center;
    
}

input {
  width: 100%;
}

@media screen and (min-width: 850px) {
  section {
    padding: 20px !important;
  }
}

/* Add some padding and a grey background color to containers */
.container {
  padding: 20px;
  background-color: #f1f1f1;
}

/* Style the input elements and the submit button */
input[type=text], input[type=submit] {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;

}

/* Add margins to the checkbox */
input[type=checkbox] {
  margin-top: 16px;
}

/* Style the submit button */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  border: none;
}

input[type=submit]:hover {
  opacity: 0.8;
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