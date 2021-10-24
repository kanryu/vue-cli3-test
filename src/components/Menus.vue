<template>
  <div class="hello">
    <p>
      A sample to show / hide the menu depending on the value of the data properties.
    </p>
    <ul>
      <li v-if="availableMenus.products"><a href="/products" target="_blank" rel="noopener">Products</a></li>
      <li v-if="availableMenus.customers"><a href="/customers" target="_blank" rel="noopener">Customers</a></li>
      <li v-if="availableMenus.admin"><a href="/admin" target="_blank" rel="noopener">For Administrators</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menus',
  data() {
    return {
      availableMenus: {
        products: true,
        customers: true,
        admin: false,
      }
    }
  },
  mounted() {
    let json = null
    let menuJson = document.getElementById("menuJson")
    if (menuJson) {
      json = JSON.parse(menuJson.innerText)
    }
    this.initMainMenu(json)
  },
  methods: {
    initMainMenu(options) {
      if (options) {
        Object.assign(this, options);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
