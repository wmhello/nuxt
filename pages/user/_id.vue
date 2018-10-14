<template lang="html">
  <div class="user">
      <h3>{{name}}</h3>
       <h4>@{{username}}</h4>
       <p>Email：{{email}}</p>
       <p><nuxt-link to="/user">用户列表</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  validate({params}) {
    return ! isNaN(+params.id)
  },
  async asyncData({params, error}){
     try {
       const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
       return data
     } catch (e) {
        error({ message: 'User not found', statusCode: 404 })
     } finally {

     }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
