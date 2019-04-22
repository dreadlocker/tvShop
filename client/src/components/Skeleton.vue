<template>
  <div>
    <Nav/>
    <PageFromNav/>
  </div>
</template>

<script>
import Nav from "./Page/Nav";
import PageFromNav from "./Page/PageFromNav";

export default {
  name: "Skeleton",
  components: {
    Nav,
    PageFromNav,
  }
};
</script>