<template>
  <div>{{data}}</div>
</template>

<script>
export default {
  created() {

  },
  computed: {
    data(){
      return this.$route.params
    }
  },
  name: "Success"
}
</script>

<style scoped>

</style>