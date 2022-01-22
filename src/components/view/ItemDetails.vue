<template>
  <h4>Hello vue route {{$route.params.id}}</h4>
</template>

<script>
  import axios from 'axios'
export default {
  data(){
    return {
      item : []
    }
  },
  mounted(){
    this.fetchItem();
  },
  methods : {
    fetchItem(){
      var self = this;
      axios.get(`http://localhost/ftdev/api/item/${this.$route.params.id}`).then((response)=>{
        // console.log(response);
        self.item = response.data;
      });
    },
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
