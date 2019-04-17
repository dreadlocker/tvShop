<template>
  <div id="about">
    <div v-for="(name, index) of creatorsArr" :key="index">
      <h1>Contact {{name}}:</h1>
      <div id="flex">
        <a id="fb" :href="contactLinksObj[name][0]" target="_blank"></a>
        <a id="gmail" :href="contactLinksObj[name][1]"></a>
        <a id="skype" :href="contactLinksObj[name][2]" target="_blank"></a>
      </div>
      <hr v-if="index < creatorsArr.length - 1">
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      creatorsArr: ["Jivko Jelev", "Svetozar Iliev"],
      contactLinksObj: {
        "Jivko Jelev": [
          "https://www.facebook.com/hankybrat",
          "mailto:hankybrat1914@gmail.com",
          "https://join.skype.com/invite/eobptMs9dzg3"
        ],
        "Svetozar Iliev": [
          "https://www.facebook.com/neTbk.13Tu",
          "mailto:svetozariliev13@gmail.com",
          "https://join.skype.com/invite/otXS3Vmaa9Aj"
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
#flex {
  display: flex;
  justify-content: center;
}
#fb,
#gmail,
#skype {
  margin: 0.5rem;
  height: 3rem;
  &:hover {
    transform: scale(0.9);
  }
}
#fb {
  content: url("../assets/facebook-logo.png");
}
#gmail {
  content: url("../assets/gmail-logo.png");
}
#skype {
  content: url("../assets/skype-icon.png");
}
</style>