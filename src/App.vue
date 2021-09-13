<template>
  <div id="app">
    <!-- <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/test/1' }">Test 1</router-link>
    <router-link :to="{ path: '/test/2' }">Test 2</router-link>
    <router-link :to="{ path: '/test/3' }">Test 3</router-link>
     -->
    
    <navbar @searchItem="search"></navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view> </router-view>
          <!-- <inventory @newItemAdded="addCartItem" :items="items"></inventory> -->
        </div>
        <div class="col-sm-3">
          <cart @removeItem="removeItem" :items="carts"> </cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Cart from "./components/Cart.vue";
import Inventory from "./components/view/Inventory.vue";
import data from "./data.js";
export default {
  components: { Navbar, Cart, Inventory },
  data() {
    return {
      items: [],
      carts: [],
    };
  },
  mounted() {
    this.items = data;
  },
  methods: {
    addCartItem(item) {
      this.carts.push(item);
    },
    removeItem(index) {
      this.carts.splice(index, 1);
    },
    search(keyword) {
      this.items = data.filter((item) => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 10px;
}
</style>
