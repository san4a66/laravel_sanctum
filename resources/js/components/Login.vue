<template>
  <div class="w-25">
    <input v-model="email" type="email" placeholder="email" class="form-control">
    <input v-model="password" type="password" placeholder="password" class="form-control">
    <input @click.prevent="login" type="submit" value="login" class="btn btn-primary">
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    login() {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', {email: this.email, password: this.password})
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err.response)
            })
      })
    }
  },


}
</script>

<style scoped>

</style>