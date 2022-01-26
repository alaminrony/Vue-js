<template>
  <div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.photo" alt="Photo">
    </div>
    <div class="col-sm-6">
      <h4>{{ item.title }}</h4>
      <p v-text>{{ item.description }}</p>
      <div class="card-footer">
        <span>$ {{ item.price }}</span>
         <a @click="addToCart(item)" class="btn btn-primary">+ Add</a>
      </div>

    </div>
  </div>
  <h3 v-else>Loading...</h3>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      item: null
    }
  },
  mounted() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      var self = this
      axios.get('http://localhost/ftdev/api/item/'+ this.$route.params.id).then(response => {
        console.log(response);
        self.item = response.data
      })
    },
    addToCart(item){
      this.$store.commit('addToCart',item)
    }
    
  }
}
</script>

<style>

</style>
