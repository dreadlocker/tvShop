<template>
  <div>
    <Nav/>
    <PageFromNav/>
  </div>
</template>

<script>
import Nav from "./Nav";
import PageFromNav from "./PageFromNav";

export default {
  name: "Skeleton",
  components: {
    Nav,
    PageFromNav
  }
};
</script>