<script>
/* eslint-disable */
export default {
  data() {
    return {
      imgPath: "https://click.ecc.ac.jp/ecc/msatou/cocotabe/img/",
      // productsData: "",
      productsData: "http://localhost:8888/cocotabe.php",
      innerH: 0,
    };
  },
  mounted() {
    this.innerH = window.innerHeight;
    setTimeout(() => {
      this.$_setLoadFlag(false);
    }, 0);//1500
  },
};
</script>
