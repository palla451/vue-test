<script>
export default {
  props:{
    msg: String
  },
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    handleLogin(){
      this.$store.dispatch('login',{
        'username': this.username,
        'password': this.password
      });
    }
  }
}
</script>

<template>
<div id="login">
  <h3>{{msg}}</h3>
  <form @submit.prevent="handleLogin">
    <input type="text" v-model="username" placeholder="username">
    <input type="password" v-model="password" placeholder="password">
    <button type="submit">login</button>
  </form>
</div>
</template>

<style scoped lang="scss">

</style>