<template>
  <ul>
    <li><router-link to="/top">top</router-link></li> |
    <li><router-link to="/result">Result</router-link></li> |
    <li><router-link to="/detail">detail</router-link></li> |
    <li><router-link to="/bookmark">book mark</router-link></li>
  </ul>
</template>

<style scoped>
  a {
    color: rgb(50, 174, 110);
    text-decoration: none;
  }

  a:hover {
    color: rgb(40, 56, 76);
  }

  ul {
    list-style-type: none;
    margin-top: 80px;
  }

  li { display: inline-block; }
</style>
