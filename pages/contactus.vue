<template>
<form name="contact" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="contact" />
              <p>
 <div class="container" >
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
      <label for="email">Email</label>
      <input type="text" id="email" name="email" />
      <label for="message">Message</label>
      <textarea id="message" name="message"></textarea>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
    </div>
  </form>
</template>

<script>


export default {
};
</script>

<style>

  body {
    font-family: sans-serif;
  }
  label {
    display: block;
    margin-bottom: .2em;
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
</style>
