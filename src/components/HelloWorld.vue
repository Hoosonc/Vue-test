<template>
  <div>
    <Head>
    </Head>
    <Form></Form>
    <Foot></Foot>

  </div>
</template>

<script>
import Head from "./Head";
import Foot from "./Foot";
import Form from "./Form";
export default {
  name: 'HelloWorld',
  components: {Form, Foot, Head},
  props: {
    msg: String
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
