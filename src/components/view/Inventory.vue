<template>
  <div v-if="!loading" class="row">
    <div v-for="(item,index) in items" :key="index" class="card" style="width: 30%; margin: 5px">
      <router-link  v-slot="{ navigate }" :to="{path:`/item/${item.id}`}"> 
        <span @click="navigate">
        <img class="card-img-top" :src="item.photo" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">${{item.price}}
        </p>
        <a @click="addToCart(item)" class="btn btn-primary">+ Add</a>
      </div>
      </span>
      </router-link>
    </div>
  </div>
  <h1 v-else>Loading.........</h1>
</template>

<script>
  import axios from 'axios'
export default {
    data(){
      return {
        loading : true,
        items : []
      }
    },
    mounted(){
      this.fetchInventory();
    },
    methods :{
         addToCart(item){
           this.$emit('newItemAdded',item)
         },
         fetchInventory(){
          var self = this;
          axios.get('http://localhost/ftdev/api/items').then(response =>{
              self.items = response.data,
              self.loading = false
            
          })
         }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
